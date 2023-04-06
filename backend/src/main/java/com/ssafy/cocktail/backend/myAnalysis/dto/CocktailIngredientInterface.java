package com.ssafy.cocktail.backend.myAnalysis.dto;

import java.util.List;

public interface CocktailIngredientInterface {
	Long getCocktailId();
	List<String> getIngredientList();
}
