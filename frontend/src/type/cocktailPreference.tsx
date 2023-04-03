// 마이페이지 상세 -> 칵테일 베이스 선호도
export type cocktailBase = {
  base_name: string,
  base_count: number,
  base_ratio: number
};

// 마이페이지 상세 -> 칵테일 베이스 선호도
// 원형 그래프(Pie Chart)에 전달할 값
export type dataType = {
  id: string,
  value: number
};

// 마이페이지 상세 - > 칵테일 색상 선호도
export type cocktailColor = {
  color_name: string,
  color_rgb: string,
  color_ratio: number,
  color_count: 1
};

// 마이페이지 상세 -> 칵테일 재료 선호도
export type cocktailIngredient = {
  ingredient_name: string,
	ingredient_ratio: number,
	ingredient_count: number
};

// 마이페이지 상세 -> 취향분석(비슷한 나이&성별대에서 선호하는 칵테일 top 5)
export type cocktailAgeGender = {
  cocktail_name_ko: string,
  cocktail_ratio: number,
  cocktail_count: number
  cocktail_name_en: string
};

