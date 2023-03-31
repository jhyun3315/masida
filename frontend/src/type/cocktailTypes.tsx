// 기본적인 칵테일 정보
export type cocktailType = {
  cocktail_id : number;
  cocktail_name_ko : string;
  cocktail_name_en  :string;
  cocktail_img : string;
  cocktail_rating : number;
  cocktail_likes : number;
  cocktail_difficulty : string;
};

// 레시피 object
export type recipeType = {
  recipe_num: number;
  recipe_content: string;
};

// 재료 object
export type ingredientType = {
  ingredient_name: string;
  ingredient_amount: string;
  ingredient_unit: string;
};

export type garnishType = {
  garnish_name : string;
}

// 칵테일 상세 정보 props
export type detail_props = {
  cocktail_id?: number;
  cocktail_name_ko?: string;
  cocktail_name_en?: string;
  cocktail_img?: string;
  cocktail_content?: string;
  cocktail_difficulty?: string;
  cocktail_rating?: number;
  cocktail_likes?: number;
  cocktail_comments?: number;
  likes_checker?: boolean;
  bookmark_checker?: boolean;
  glass?: string;
  base ?: string;
  garnish ?: garnishType[];
  recipe?: recipeType[];
  ingredient?: ingredientType[];
};

// 마이페이지 칵테일 추천...
export type cocktail_recommend = {
  cocktail_id: number,
  cocktail_name_ko: string,
  cocktail_img: string,
}

// 칵테일 랜덤 추천 1개
export type randomType = {
  cocktail_id?: number;
  cocktail_name_ko?: string;
  cocktail_name_en?: string;
  cocktail_img?: string;
  cocktail_content?: string;
  cocktail_rating?: number;
  cocktail_comments?: number;
};

// 칵테일 좋아요 상위 10개
export type likeType = {
  cocktail_id?: number;
  cocktail_name_ko?: string;
  cocktail_name_en?: string;
  cocktail_img?: string;
  cocktail_rating?: number;
  cocktail_comments?: number;
};


// 마이페이지 칵테일 데이터
export type cocktail_summary_data = {
  x: string;
  y: number;
}

// 마이페이지 요약본 데이터
export type cocktail_summary = {
  id: string;
  data: cocktail_summary_data[];
}

//마이페이지에서 좋아요 누른 칵테일 반환
export type likes_cocktail = {
  cocktail_id : string,
  cocktail_name_ko? : string,
  cocktail_img? : string,
  cocktail_likes : number,
  cocktail_rating : number,
  cocktail_difficulty : string,
}

// 칵테일 월드컵 데이터
export type cocktail_worldcup_data = {
  cocktail_id: string,
  cocktail_name_ko: string,
  cocktail_name_en: string,
  cocktail_img: string,
  cocktail_content: string,
  cocktail_difficulty: string,
  cocktail_rating: number,
  cocktail_likes: number,
  cocktail_comments: number,
  ingredient: ingredientType[]
}