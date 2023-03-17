// 기본적인 칵테일 정보
export type cocktailType = {
  cocktail_id ?: number;
  cocktail_name_ko ?: string;
  cocktail_name_en ?: string;
  cocktail_img ?: string;
  cocktail_likes ?: number;
  cocktail_rating ?: number;
  cocktail_difficulty ?: string;
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

// 칵테일 상세 정보 props
export type detail_props = {
  cocktail_id: number;
  cocktail_name_ko: string;
  cocktail_name_en: string;
  cocktail_img: string;
  cocktail_content: string;
  cocktail_difficulty: string;
  cocktail_rating: number;
  cocktail_likes: number;
  cocktail_comments: number;
  likes_checker: boolean;
  bookmark_checker: boolean;
  glass: string;
  recipe: recipeType[];
  ingredient: ingredientType[];
};