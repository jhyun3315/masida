import pandas as pd
import cv2
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
from colorthief import ColorThief

remove_list = (12, 13, 16, 29, 28, 20, 40, 41, 42, 50, 52, 53, 60, 63, 64, 66, 79, 85, 89, 90, 91, 93, 95, 100, 102, 108, 109, 121, 124, 125, 126, 127, 128, 134, 136, 152, 154, 155, 165, 166, 169, 171, 172, 173, 174, 175, 177, 181, 194, 201, 206, 208, 210, 211, 212, 215, 217, 220, 225, 232, 235, 249, 250, 253, 265, 266, 270, 276, 282, 283, 287, 288, 289, 292, 296, 298, 307, 310, 311, 313, 324, 327, 328, 332, 335, 336, 337, 339, 340, 343, 349, 351, 356, 357, 360, 362, 365, 367, 369, 371, 373, 374, 382, 383, 386, 393, 396, 397, 400, 410, 411, 412, 414, 417, 423, 424, 426, 439, 446, 449, 450, 451, 452, 454, 455, 456, 457, 460, 463, 467, 470, 478, 480, 486, 487, 488, 494, 496, 500, 501, 502, 503, 505, 507, 508, 509, 513, 514, 515, 516, 525, 529, 532, 533, 536, 539, 541, 543, 551, 544, 556, 557, 569, 573, 578, 581, 582, 586, 592, 595, 598, 603, 606, 612, 613, 619, 620, 622, 623, 624, 626, 627, 629, 630, 632, 633, 639, 645, 655, 658, 659, 661, 663, 664, 667, 670, 671, 673, 674, 675, 678, 680, 683, 684, 694, 696, 703, 706, 716, 718, 720, 721, 730, 732, 735, 739, 741, 747, 754, 756, 757, 759, 763, 766, 769, 778, 781, 786, 787, 793, 795, 798, 799, 803, 808, 811, 814, 815, 816, 821, 822, 826, 830, 831, 836, 837, 840, 841, 842, 846, 847, 852, 853, 854, 857, 864, 868, 873, 878, 879, 907, 912, 917, 922, 924, 927, 930, 931, 933, 935, 938, 3675,3671,3660,3634,3462,3449,3362,3353,3265,2984,2909,2632,1302,1255,1145,1150,1126,1110,1114,1108,1106,1104,1097,1092,1087,1090,1086,1084,1082,1073,1069,1064,1058,1046,1040,1037,1036,1035,1029,1028,1017,1019,1010,1006,1007,1000,999,998,995,992,991,987,985,984,978,977,974,973,972,966,956,955,951,950,948,947,945938,935,933,931,930,928,924,922,917,908, 411, 1097, 1746, 2930, 2931, 2932, 2933, 2976, 2980, 2991)

# main_colors = [(255, 0, 0), (255, 50, 0), (255, 255, 0), (0, 255, 0), (0, 0, 255), (0, 5, 255), (100, 0, 255)]
# main_colors_name = ['빨강색', '주황색', '노랑색', '초록색', '파랑색', '남색', '보라색']
main_colors = [(255, 0, 0), (255, 50, 0), (255, 255, 0), (0, 255, 0), (0, 0, 255), (0, 5, 255), (100, 0, 255), (102, 51, 51), (255, 153, 204), (255, 255, 255)]
main_colors_name = ['빨강색', '주황색', '노랑색', '초록색', '파랑색', '남색', '보라색', '갈색', '핑크색', '흰색']

# 데이터 프레임 만들기
# cocktail_id, name, recipe_content, url
img_new = dict()
img_new['cocktail_id'] = []
img_new['name'] = []
img_new['cocktail_color1'] = []
img_new['cocktail_color2'] = []
img_new['url'] = []

# 데이터 가져오기
csv_file = pd.read_csv('csv/img.csv')

cocktail_list = [] # 칵테일 id 리스트

# 이미지 url 추출 및 리스트에 저장
for index, row in csv_file.iterrows():
    cocktail_list.append(csv_file['cocktail_id'][index])

# 사진 가져오기
for cocktail_id in cocktail_list:
    if cocktail_id in remove_list:
        # 데이터 변수에 넣기
        img_new['cocktail_color1'].append('null')
        img_new['cocktail_color2'].append('null')
        img_new['cocktail_id'].append(cocktail_id)
        img_new['name'].append(csv_file['name'][cocktail_id])
        img_new['url'].append(csv_file['url'][cocktail_id])

        # 데이터 저장
        pd.DataFrame.from_dict(img_new).to_csv("csv/img_new3.csv", encoding = "utf-8-sig")
        print(cocktail_id, "저장 완료(null)")
        continue

    image_path = 'image_new2/' + str(cocktail_id) + '.jpg' # 사진 경로
    color_thief = ColorThief(image_path) # 사진에서 색상 추출
    palette = color_thief.get_palette(color_count=3) # palette 는 N개의 컬러를 list에 담아 return
    # 사진 색상 2개 추출
    max = 0
    max_index = 0
    for index, value in enumerate(main_colors):
        a = value
        b = palette[1]
        num = np.dot(a, b) / (np.linalg.norm(a) * (np.linalg.norm(b)))
        if num > max:
            max = num
            max_index = index
    # color_1 = get_color(palette[1])
    color_1 = main_colors_name[max_index]
    max = 0
    max_index = 0
    for index, value in enumerate(main_colors):
        a = value
        b = palette[2]
        num = np.dot(a, b) / (np.linalg.norm(a) * (np.linalg.norm(b)))
        if num > max:
            max = num
            max_index = index
    # color_2 = get_color(palette[2])
    color_2 = main_colors_name[max_index]

    # 데이터 변수에 넣기
    img_new['cocktail_color1'].append(color_1)
    img_new['cocktail_color2'].append(color_2)
    img_new['cocktail_id'].append(cocktail_id)
    img_new['name'].append(csv_file['name'][cocktail_id])
    img_new['url'].append(csv_file['url'][cocktail_id])

    # 데이터 저장
    pd.DataFrame.from_dict(img_new).to_csv("csv/img_new3.csv", encoding = "utf-8-sig")
    print(cocktail_id, "저장 완료")

