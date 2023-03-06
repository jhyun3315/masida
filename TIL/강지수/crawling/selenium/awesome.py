import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import pandas as pd
import csv

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
# options.add_argument('headless')
driver = webdriver.Chrome(options=options)
# url = "https://recipe.awesomedrinks.com/category/list?page="
pages = [1,2,3,4,5,6,7,8,9]

nameList = []
imgUrlList = []
ingredientsList = []
how = []
garnishs = []
# glass = []
tasteNotes= []
urls = []

def crawl():
    elems = driver.find_elements(By.CSS_SELECTOR,".list-group.mt-4 > .list-group-item.list-group-item-action.flex-column.align-items-start")
    links = [elem.get_attribute('href') for elem in elems]
    for i in range(1, len(links)):
        driver.get(links[i])
        time.sleep(3)
        driver.implicitly_wait(3)
        # 칵테일 이름
        cocktailName = driver.find_element(By.CSS_SELECTOR,".col.col-sm-12 > h1").text
        nameList.append(cocktailName)
        print(cocktailName)
        # 이미지 url 얻어오기
        imgUrl = driver.find_element(By.CSS_SELECTOR,".rounded.border.border-white.mx-auto.d-block.img-responsive").get_attribute("src")
        imgUrlList.append(imgUrl)
        print(imgUrl)
        # 재료목록
        cur_list = []
        ingredient = driver.find_elements(By.CSS_SELECTOR,".col.col-xl-7 > .row > .col.col-sm-7")
        amount = driver.find_elements(By.CSS_SELECTOR,".col.col-xl-7 > .row > .col.col-2")
        unit = driver.find_elements(By.CSS_SELECTOR,".col.col-xl-7 > .row > .col.col-3")
        
        for j in range(0, len(ingredient)):
            try:
                detail = {'amount' : amount[j].text, 'unit' : unit[j].text, 'name' : ingredient[j].text}
                cur_list.append(detail)
            except:
                detail = {'amount' : "null", 'unit' : "null", 'name' : ingredient[j].text}
                cur_list.append(detail)
        ingredientsList.append(cur_list)
        # 제조방법
        howToMake = driver.find_element(By.XPATH,"/html/body/main/div[2]/div[1]/div[4]/div").text
        how.append(howToMake)
        print(howToMake)
        # 가니쉬
        garnish = driver.find_element(By.XPATH,"/html/body/main/div[2]/div[1]/div[5]/div[2]").text
        garnishs.append(garnish)
        print(garnish)
        # 맛
        taste = driver.find_element(By.XPATH,"/html/body/main/div[2]/div[1]/div[7]/div[2]").text
        tasteNotes.append(taste)
        print(taste)
        driver.implicitly_wait(3)
        time.sleep(3)
        # 해당 페이지 url
        url = driver.current_url
        urls.append(url)

for page in pages:
    url = "https://recipe.awesomedrinks.com/category/list?page=" + str(page)
    driver.get(url)
    # 대기
    driver.implicitly_wait(3)
    time.sleep(3)
    new_pages = driver.find_elements(By.CSS_SELECTOR,".col.col-sm-10 > ul.list-group.mt-3 > li.list-group-item.justify-content-between.list-group-item-primary > h3 > a")
    new_page_urls = [new_page.get_attribute('href') for new_page in new_pages]
    for new_page_url in new_page_urls:
        driver.get(new_page_url)
        # 대기
        driver.implicitly_wait(3)
        time.sleep(3)
        navs = driver.find_elements(By.CSS_SELECTOR, ".pagination > .page-item > .page-link")
        nav_links = [nav.get_attribute('href') for nav in navs]
        linkLen = len(nav_links)
        print(linkLen)
        print(linkLen//2)
        for k in range(linkLen-1, (linkLen//2)-1, -1):
            nav_links.pop(k)
        if linkLen != 0:
            for v in range(1, len(nav_links)-2):
                driver.get(nav_links[v])
                driver.implicitly_wait(3)
                time.sleep(3)
                crawl()
        else:
            crawl()
            


driver.close()

data = {"name" : nameList, "img url" : imgUrlList, "ingredients" : ingredientsList , "recipe" : how , "garnish" : garnishs, "notes" : tasteNotes, "url" : urls}
df = pd.DataFrame(data)

df.to_csv("awesome.csv", encoding = "utf-8-sig")