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

nameList = []
imgUrlList = []
ingredientsList = []
recipe = []
garnishs = []
glasses = []
urls = []

def crawl():
    elems = driver.find_elements(By.CSS_SELECTOR,".colItem > .colItemText > .colItemDesc > a")
    links = [elem.get_attribute('href') for elem in elems]
    for link in links:
        driver.get(link)
        time.sleep(3)
        driver.implicitly_wait(3)
        # 이름
        name = driver.find_element(By.XPATH, "//*[@id='cocktail']/h1").text
        name = name.replace(" Recipe", "")
        print(name)
        nameList.append(name)
        # 이미지
        img_url = driver.find_element(By.XPATH, "//*[@id='drinkimage']/img").get_attribute("src")
        imgUrlList.append(img_url)
        # 재료, 가니쉬, 글라스
        ul = driver.find_element(By.XPATH, "//*[@id='drinkdata']/ul[1]")
        lis = ul.find_elements(By.TAG_NAME, "li")
        cur_ingre = []
        cur_garnish = []
        for li in lis:
            garnish = ""
            glass = ""
            name = ""
            ingre = li.text
            ingreList = ingre.split()
            if ingreList[0] == "Garnish:":
                for i in range(1, len(ingreList)):
                    garnish = garnish.replace(",", "")
                    cur_garnish.append(ingreList[i])
                print(cur_garnish)
            elif ingreList[0] == "Glass:":
                for i in range(1, len(ingreList)):
                    glass += ingreList[i] + " "
                glass = glass.rstrip()
                print(glass)
                glasses.append(glass)
            elif len(ingreList) == 1:
                amount = "null"
                unit = "null"
                name = ingreList[0]
                line = {'amount' : amount, 'unit' : unit, 'name' : name}
                cur_ingre.append(line)
                print(line)
            elif len(ingreList) == 2:
                amount = ingreList[0]
                unit = "null"
                name = ingreList[1]
                line = {'amount' : amount, 'unit' : unit, 'name' : name}
                cur_ingre.append(line)
                print(line)
            elif "garnish" in ingreList:
                flag = ingreList.index("-")
                amount = "null"
                unit = "null"
                name = ""
                for i in range(0, flag):
                    name += ingreList[i] + " "
                name = name.rstrip()
                line = {'amount' : amount, 'unit' : unit, 'name' : name}
                cur_ingre.append(line)
                print(line)
            else:
                # print(ingreList)
                amount = ingreList[0]
                unit = ingreList[1]
                for i in range(2, len(ingreList)):
                    name += ingreList[i] + " "
                name = name.rstrip()
                line = {'amount' : amount, 'unit' : unit, 'name' : name}
                print(line)
                cur_ingre.append(line)
        ingredientsList.append(cur_ingre)
        garnishs.append(cur_garnish)
        # 제조법
        ul = driver.find_element(By.XPATH, "//*[@id='drinkdata']/ul[2]")
        lis = ul.find_elements(By.TAG_NAME, "li")
        direction = ""
        for li in lis:
            direction += (li + " ")
        direction.rstrip()
        recipe.append(direction)
        # url
        url = driver.current_url
        urls.append(url)
    
        

category = ["/Ingredients/WhiteRum.aspx", "/Ingredients/Vodka.aspx", "/Ingredients/Gin.aspx", "/Ingredients/LemonJuice.aspx", "/Ingredients/Milk.aspx", "/DrinksByIngredient.aspx"]
cnt = 1
for c in category:
    url = "http://www.completecocktails.com" + c
    driver.get(url)
    # 대기
    driver.implicitly_wait(3)
    time.sleep(3)
    # 여기서 크롤링?
    crawl()
    cur_url = url
    while True:
        driver.get(cur_url)
        if cnt == 1:
            # 다음 페이지로
            next = driver.find_element(By.XPATH, "//*[@id='bodycontent']/div[1]/div[11]/a")
            next.click()
            cur_url = driver.current_url
            cnt = cnt + 1
            # driver.get(cur_url)
        else:
            try:
                next = driver.find_element(By.XPATH, "//*[@id='bodycontent']/div[1]/div[12]/a")
                next.click()
                cur_url = driver.current_url
            except:
                cnt = 1
                break
        crawl()



driver.close()

data = {"name" : nameList, "img" : imgUrlList, "ingredients" : ingredientsList , "recipe" : recipe , "garnish" : garnishs, "glass" : glasses, "url" : urls}
df = pd.DataFrame(data)

df.to_csv("spruceeats.csv", encoding = "utf-8-sig")
