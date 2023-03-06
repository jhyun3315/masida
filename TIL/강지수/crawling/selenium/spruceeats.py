import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import pandas as pd
import csv

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome(options=options)
pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]

nameList = []
imgUrlList = []
cookingTime = []
ingredientsList = []
recipe = []
urls = []

def search(ul):
    cur_ingre = []
    for i in range(0, len(ul)):
        pList = ul[i].find_elements(By.TAG_NAME,"li > p")
        if len(pList) != 0:
            for v in range(0,len(pList)):
                amount = "null"
                unit = "null"
                name = "null"
                line = {'amount' : amount, 'unit' : unit, 'name' : name}
                spans = pList[v].find_elements(By.TAG_NAME,"span")   
                if len(spans) == 3:
                    amount = spans[0].text
                    unit = spans[1].text
                    name = spans[2].text
                elif len(spans) == 2:
                    try:
                        amount = spans[0].text
                        unit = spans[1].text
                        name = pList[v].find_element(By.TAG_NAME,"a > span").text
                    except:
                        amount = "null"
                        name = spans[0].text
                        unit = spans[1].text
                elif len(spans) == 1:
                    amount = "null"
                    unit = "null"
                    name = spans[0].text
                line = {'amount' : amount, 'unit' : unit, 'name' : name}
                cur_ingre.append(line)   
        else:
            pList = ul[i].find_elements(By.TAG_NAME,"li")
            for v in range(0,len(pList)):
                line = {'amount' : "여기다", 'unit' : "여기다", 'name' : "여기다"}
                cur_ingre.append(line)
    return cur_ingre

for page in pages:
    url = "https://www.thespruceeats.com/search?q=&page="+str(page)+"&searchType=recipe&fh=eyJmYWNldHMiOnsicG9wX3NlYXJjaCI6W10sImdyb3VwX2NvdXJzZSI6W10sImdyb3VwX2N1aXNpbmUiOltdLCJncm91cF9kaXNoIjpbeyJ2YWx1ZSI6ImNvY2t0YWlsIiwiZGlzcGxheU5hbWUiOiJjb2NrdGFpbCJ9XSwiZ3JvdXBfcHJlcGFyYXRpb24iOltdLCJncm91cF9vY2Nhc2lvbiI6W10sInN0YXJSYXRpbmdfc2NvcmUiOltdfX0%3D"
    driver.get(url)
    driver.implicitly_wait(3)
    aTags = driver.find_elements(By.XPATH,"//*[@id='faceted-search-results']/div[2]/ul/li/a")
    links = [aTag.get_attribute('href') for aTag in aTags]
    for link in links:
        driver.get(link)
        driver.implicitly_wait(3)
        # 이름
        name = driver.find_element(By.CSS_SELECTOR,".heading__title").text
        nameList.append(name)
        print(name)
        # 이미지
        imgUrl = driver.find_element(By.XPATH,"//*[@id='figure_1-0']/div/div/img").get_attribute("src")
        imgUrlList.append(imgUrl)
        # 제조시간
        time = driver.find_element(By.XPATH,"//*[@id='meta-text_1-0']/span[2]").text
        cookingTime.append(time)
        # 재료
        try:
            div = driver.find_element(By.XPATH,"//*[@id='structured-ingredients_1-0']")
        except:
            div = driver.find_element(By.XPATH,"//*[@id='section--ingredients_1-0']/div")
        ul = div.find_elements(By.TAG_NAME,"ul")
        cur_ingre = search(ul)
        ingredientsList.append(cur_ingre)
        # 제조방법
        cur_rep = []
        div = driver.find_element(By.XPATH,"//*[@id='structured-project__steps_1-0']")
        cur_rep.append(div.text)
        recipe.append(cur_rep)
        # 해당 페이지 url
        url = driver.current_url
        urls.append(url)

driver.close()

data = {"name" : nameList, "img url" : imgUrlList, "time" : cookingTime, "ingredient list" : ingredientsList , "recipe" : recipe , "url" : urls}
df = pd.DataFrame(data)

df.to_csv("spruceeats.csv", encoding = "utf-8-sig")
    
