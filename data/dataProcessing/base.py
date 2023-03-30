import pandas as pd
import csv

ingredient_amount = list()
ingredient_unit = list()
ingredient_name = list()
type_string = list()
cocktail_id = list()

file = open("C:/Users/SSAFY/Desktop/jupyter/base.csv", "r", encoding='utf-8-sig')
rows = csv.reader(file)
for row in rows:
    ingredient_amount.append(row[1])
    ingredient_unit.append(row[2])
    ingredient_name.append(row[3])
    type_string.append(row[4])
    cocktail_id.append(row[6])
file.close


amount_list = []
name_list = []
type_list = []
for v in range(0, 3676):
    amount_list.append(list())
    type_list.append(list())
    name_list.append(list())


for v in range(1, len(cocktail_id)):
    if ingredient_unit[v] == 'ml':
        amount_list[int(cocktail_id[v])].append(float(ingredient_amount[v]))
        type_list[int(cocktail_id[v])].append(type_string[v])
        name_list[int(cocktail_id[v])].append(ingredient_name[v])
    else:
        pass

idx = 0
ID = []
base_amount = []
base_name = []
base_type = []
non_alcohol = []        # 논알콜 칵테일 인덱스
for i in range(0, len(amount_list)):
    ID.append(idx)
    try:
        base_amount.append(amount_list[i].index(max(amount_list[i])))
        base_name.append(name_list[i][amount_list[i].index(max(amount_list[i]))])
        base_type.append(type_list[i][amount_list[i].index(max(amount_list[i]))])
    except:
        base_amount.append(-1)
        base_name.append("null")
        base_type.append("null")
        non_alcohol.append(i)
    idx = idx + 1

print(non_alcohol)

data = { "id" : ID, "type" : base_type}
df = pd.DataFrame(data)


df.to_csv("base_analysis.csv", encoding = "utf-8-sig")
# print(len(base_list))
# print(len(non_alcohol))
# print(non_alcohol)

# for v in range(0, len(base_list[0])):
    # print(base_list[0][v])
