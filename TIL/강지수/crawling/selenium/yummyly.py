from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
import random

# 브라우저 옵션
options = webdriver.ChromeOptions() # 브라우저 옵션
options.add_argument("--incognito") # privacy 모드
options.add_experimental_option("excludeSwitches", ["enable-logging"]) # 외부 장치 오류 

driver = webdriver.Chrome(ChromeDriverManager().install()) # 크롬 버전에 맞춰서 크롬 드라이버 다운로드
driver = webdriver.Chrome(options=options) # 크롬 드라이버 옵션 설정

driver.get("https://www.yummly.com/recipes?q=cocktail&taste-pref-appended=true") # 칵테일 검색결과 페이지로 이동

driver.maximize_window() # 브라우저 화면을 최대 크기로 변경

time.sleep(3) # 대기
result = 6995 # 검색 결과수
down = (int)((result - 1) / 36) # 필요한 스크롤 횟수

# 스크롤
for i in range(11): # 스크롤횟수 만큼 반복
    # yummly는 최대 10번 스크롤이 가능하다
    itemlist = driver.find_elements(By.XPATH, '//*[@id="mainApp"]/div[1]/div[4]') # 스크롤할 element
    driver.execute_script("arguments[0].scrollBy(0, arguments[0].scrollHeight)", itemlist[0]) # 스크롤 내리기
    time.sleep(3) # 페이지 로딩 기다림

# 상세조회 페이지로 이동, 이미지 다운로드
elems = driver.find_elements(By.CSS_SELECTOR,".link-overlay") # 칵테일 element
print(len(elems))

links = [elem.get_attribute('href') for elem in elems] # 칵테일별 상세 조회 페이지
print(len(links))

nameList = [] # 칵테일 이름
imgUrlList = [] # 칵테일 이미지 url
ingredientCnt = [] #  칵테일 재료
cookingTime = [] # 칵테일 제조 시간 
calories = [] # 칵테일 칼로리
ingredientsList = [] # 칵테일 재료 목록

for link in links: # 모든 칵테일
    driver.implicitly_wait(3) # 페이지 로딩 wait
    driver.get(link) # 페이지 이동
    time.sleep(random.randrange(1, 4)) # 1 - 3 사이의 난수 시간 wait

    # 칵테일 이름
    cocktailName = driver.find_element(By.CSS_SELECTOR,".recipe-title.font-bold.h2-text.primary-dark").text # 칵테일 이름 가져오기
    nameList.append(cocktailName) # 칵테일 이름 추가
    print('cocktailName: ', cocktailName)

    # 이미지 url 얻어오기
    imgUrl = driver.find_element(By.CSS_SELECTOR,".recipe-image").get_attribute("src") # 이미지 url 가져오기
    imgUrlList.append(imgUrl) # 이미지 url 추가

    # 재료수
    ingredients = driver.find_element(By.CSS_SELECTOR,".recipe-summary-item.h2-text > .value.font-light.h2-text").text # 재료 개수 가져오기
    ingredientCnt.append(ingredients) # 재료 개수 추가

    # 제조시간
    minutes = driver.find_element(By.CSS_SELECTOR,".recipe-summary-item.unit.h2-text > .value.font-light.h2-text").text # 제조시간 기져오기
    cookingTime.append(minutes) # 제조 시간 추가

    # 칼로리
    try:
        cal = driver.find_element(By.CSS_SELECTOR,".recipe-summary-item.nutrition.h2-text > .value.font-light.h2-text").text # 칼로리 가져오기
        calories.append(cal) # 칼로리 추가
    except: # 칼로리가 없으면
        cal = "null" # 칼로리는 null
        calories.append(cal) # 칼로리 추가

    # 재료목록
    cur_list = [] # 현재 칵테일 재료
    ingredient = driver.find_elements(By.CSS_SELECTOR,".shopping-list-ingredients > .add-ingredient.show-add > .IngredientLine > .ingredient") # 재료 이름 가져오기
    amount = driver.find_elements(By.CSS_SELECTOR,".shopping-list-ingredients > .add-ingredient.show-add > .IngredientLine > .amount") # 재료 양 가져오기
    unit = driver.find_elements(By.CSS_SELECTOR,".shopping-list-ingredients > .add-ingredient.show-add > .IngredientLine  > .unit") # 재료 양의 단위 가져오기
    for v in range(len(amount)): # 양이 있는 모든 재료
        try:
            detail = ingredient[v].text + " " + amount[v].text + " " + unit[v].text # 재료 정보(이름, 양, 단위)
            cur_list.append(detail) # 칵테일 재료에 추가
            print(detail)
        except: # 단위가 없는 재료이면
            try:
                detail = ingredient[v].text + " " + amount[v].text # 재료 정보(이름, 양)
                cur_list.append(detail) # 칵테일 재료에 추가
                print(detail)
            except: # 양과 단위가 없는 재료이면
                detail = ingredient[v].text + " " + unit[v].text # 재료 정보(이름)
                cur_list.append(detail) # 칵테일 재료에 추가
                print(detail)
    for v in range(len(amount) ,len(ingredient)): # 위의 검색에서 포함되지 않은 재료
        cur_list.append(ingredient[v].text) # 칵테일 재료에 추가
    ingredientsList.append(cur_list) # 전체 칵테일 정보에 추가
driver.close()

data = {"name" : nameList, "imgUrl" : imgUrlList, "cnt" : ingredientCnt, "minutes" : cookingTime ,"calories" : calories, "list" : ingredientsList} # 데이터 변환
df = pd.DataFrame(data) # dataFrame 생성

df.to_csv("data/yummly.csv", encoding = "utf-8-sig") # csv로 저장
