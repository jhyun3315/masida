# Today I Learned(TIL)
## 날짜: 2023년 3월 21일 
## 한것
### 데이터 전처리
#### 칵테일 이미지 색상 분류
1. 3676개의 배경 제거한 칵테일 사진에서 색상 추출
2. 추출된 여러개의 색상 중에서 상위 2개를 뽑아 칵테일 색으로 사용
3. 상위 2개의 색은 대표색과 코사인 유사도를 계산하여 가장 유사도가 높은 색상으로 각각 분류하여 저장
```
대표색 rgb: [(255, 0, 0), (255, 50, 0), (255, 255, 0), (0, 255, 0), (0, 0, 255), (0, 5, 255), (100, 0, 255), (102, 51, 51), (255, 153, 204), (255, 255, 255)]<br/>
대표색: ['빨강색', '주황색', '노랑색', '초록색', '파랑색', '남색', '보라색', '갈색', '핑크색', '흰색']
```

### API 명세서 수정
1. 카카오 로그인 api Response 값 수정<br/>
```
{
	message: 응답메시지(example="Success"),
	statusCode: 응답 코드(example=200),
	accessToken: JWT access 인증 토큰 (example = "ekdif123SDKVIdf1231...")
	userName: 유저 이름 (example = "김싸피")
}
```

2. 칵테일 상세조회 api에 가니쉬 추가

### API 개발
##### 엔티티 생성 및 매핑
- 스프링 부트에서 엔티티를 만들고 연관 관계 매핑을 진행 <br/>
- 만든 엔티티: Bookmark, Cocktail, CocktailIngredient, Color, Comment, Ingredient, Like, User <br>
- JPA로 빌드할때  CommandAcceptanceException 에러가 발생하였는데 Like, User 엔티티에서 문제를 발견 <br/>
- Like, User 는 MySQL의 예약어로 등록된 단어여서 테이블 명을 각각 Likes, Users로 변경
