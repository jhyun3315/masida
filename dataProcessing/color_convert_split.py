import cv2
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
import pandas as pd
import urllib.request
import time

# 데이터 가져오기
csv_file = pd.read_csv('csv/img.csv')

cocktail_list = [] # 칵테일 id 리스트

# 이미지 url 추출 및 리스트에 저장
for index, row in csv_file.iterrows():
    cocktail_list.append(csv_file['cocktail_id'][index])

# 이미지 가져오기
# for cocktail_id in cocktail_list:
for i in range(3659, len(cocktail_list)):
    cocktail_id = cocktail_list[i]  
    image_path = 'image/' + str(cocktail_id) + '.jpg'
    save_path = 'image_new2/' + str(cocktail_id) + '.jpg'
    # 이미지 로드 후 RGB로 변환
    image_bgr = cv2.imread(image_path)
    image_rgb = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB)

    # 사각형 좌표: 시작점의 x,y  ,넢이, 너비
    # rectangle = (100, 150, 300, 300)
    # rectangle = (50, 0, 150, 250)
    # rectangle = (10, 10, 130, 200)
    # rectangle = (200, 100, 400, 600)
    rectangle = (50, 25, 150, 180)

    # 초기 마스크 생성
    mask = np.zeros(image_rgb.shape[:2], np.uint8)

    # grabCut에 사용할 임시 배열 생성
    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)

    # grabCut 실행
    cv2.grabCut(image_rgb, # 원본 이미지
               mask,       # 마스크
               rectangle,  # 사각형
               bgdModel,   # 배경을 위한 임시 배열
               fgdModel,   # 전경을 위한 임시 배열 
               5,          # 반복 횟수
               cv2.GC_INIT_WITH_RECT) # 사각형을 위한 초기화
    # 배경인 곳은 0, 그 외에는 1로 설정한 마스크 생성
    mask_2 = np.where((mask==2) | (mask==0), 0, 1).astype('uint8')

    # 이미지에 새로운 마스크를 곱행 배경을 제외
    image_rgb_nobg = image_rgb * mask_2[:, :, np.newaxis]

    plt.axis('off') # 축 제거

    # plot
    plt.imshow(image_rgb_nobg)
    # plt.show()
    plt.savefig(save_path, bbox_inches='tight', pad_inches=0)
    print(cocktail_id, '이미지 변환 완료')