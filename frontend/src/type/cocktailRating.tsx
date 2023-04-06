// 마이페이지 별점 분포 (베이스)
export type cocktailBaseRating = {
  Whisky: number,
  Tequila: number,
  Vodka: number,
  Mezcal: number,
  Spirits: number,
  Rum: number,
  Liqueur: number,
  Brandy: number,
  rating_score: number,
  Gin: number,
  Beer: number,
  Wine: number
}

// 마이페이지 별점 분포 결과(베이스)
export type cocktailBase_props = {
  rating_average: number,
	rating_count: number,
	rating_max: number,
	rating_max_base: string
  data: cocktailBaseRating[];
}

// 마이페이지에서 별점 분포(색상)
export type cocktailColorRating = {
  red: number,
  orange: number,
  pink: number,
  green: number,
  blue: number,
  white: number,
  navy: number,
  yellow: number,
  purple: number,
  brown: number,
  rating_score: number
}

// 마이페이지 별점 분포 결과(색상)
export type cocktailColor_props = {
  rating_average: number,
	rating_count: number,
	rating_max: number,
	rating_max_color: string
  data: cocktailColorRating[];
}

// 마이페이지 별점 분포(재료)
export type cocktailIngredientRating = {
  rating_score: number,
  ingredient_name1: string,
  ingredient_count1: number,
  ingredient_name2: string,
	ingredient_count2: number,
	ingredient_name3: string,
	ingredient_count3: number,
	ingredient_name4: string,
	ingredient_count4: number,
	ingredient_name5: string,
	ingredient_count5: number,
}

// 마이페이지 별점 분포 결과(재료)
export type cocktailIngredient_props = {
  rating_average: number,
	rating_count: number,
	rating_max: number,
	rating_max_ingredient: string
  data: cocktailIngredientRating[];
}