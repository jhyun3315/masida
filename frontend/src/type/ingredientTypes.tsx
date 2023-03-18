//재료들 타입 지정.
export type searchIngredientType = {
  ingredient_id: number;
  ingredient_name: string;
  ingredient_add: boolean; //현재 검색 추가된 재료인지 확인하게 해주는 props.
};

export type searchedIngredientType = {
  ingredient: searchIngredientType[];
};
