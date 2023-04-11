from fastapi import FastAPI
from starlette.requests import Request
import numpy as np
from scipy.spatial.distance import cdist
from concurrent.futures import ThreadPoolExecutor
import csv

app = FastAPI()

# 사용자와 칵테일 재료를 희소 벡터로 변환하기
def to_sparse_vector(ingredients, all_ingredients):
    ingredients = set(map(int, ingredients))
    return np.array([[1 if ingredient in ingredients else 0 for ingredient in all_ingredients]])


# 칵테일 목록을 받아 사용자와의 자카드 유사도를 계산하는 함수
def calculate_jaccard_similarity(user_vector, cocktail_list, all_ingredients):
    cocktail_vectors = [to_sparse_vector(cocktail, all_ingredients)[0] for cocktail in cocktail_list]
    jaccard_distances = cdist(user_vector, np.array(cocktail_vectors), metric='jaccard')
    jaccard_similarities = 1 - jaccard_distances
    return jaccard_similarities


# 병렬 처리를 위한 함수를 정의
# 병렬 처리를 사용하여 유사도를 계산
def calculate_jaccard_similarity_parallel(user_vector, cocktails, all_ingredients):
    with ThreadPoolExecutor() as executor:
        similarities = list(executor.map(lambda x: calculate_jaccard_similarity(user_vector, [x], all_ingredients), cocktails))
    return similarities



# FastAPI 엔드포인트 정의
@app.post("/recommend")
async def assosiateion(request: Request):
    # 요청의 바디를 파싱하여 출력
    req = await request.json()
    # req 자체는 json객체, req에서 userLikeIngredient와 userLikeList 꺼내기
    basis = req['basis']
    userLikeIngredient = req['userLikeIngredient']
    userLikeList = req['userLikeList']
    all_ingredients = req['allIngredient']      # 재료 테이블의 인덱스 값 리스트 생성
    all_ingredients = list(map(int, all_ingredients))

    with open('cocktail_recommend_'+basis+'.csv', 'r', encoding='utf-8-sig') as file:
        csv_reader = csv.reader(file)
        cocktails = [row for row in csv_reader]

    # 사용자 재료 취향 분석 리스트 (희소 벡터로 변환)
    user_vector = to_sparse_vector(userLikeIngredient, all_ingredients)

    jaccard_similarities_parallel = calculate_jaccard_similarity_parallel(user_vector, cocktails, all_ingredients)
    indexed_similarities = list(enumerate(jaccard_similarities_parallel))
    sorted_similarities = sorted(indexed_similarities, key=lambda x: x[1][0][0], reverse=True)

    # 추천 칵테일 담을 리스트
    response = dict()
    cocktailIdList = []

    # 전체 유사도 결과에서 기존에 사용자가 좋아요 눌렀던 것들은 제외
    for i, (index, similarity) in enumerate(sorted_similarities):
        for userLike in userLikeList:
            if int(userLike) == index + 1:
                break
        else:
            # 기존에 사용자가 좋아요한 칵테일 아니면 추천 칵테일 리스트에 추가
            cocktailIdList.append(index + 1)
            # 상위 9개가 모두 구해졌다면 break
            if (len(cocktailIdList)) == 9:
                break

    response["cocktailIdList"] = cocktailIdList

    # 최종 결과값 스프링 부트로 리턴
    return response
