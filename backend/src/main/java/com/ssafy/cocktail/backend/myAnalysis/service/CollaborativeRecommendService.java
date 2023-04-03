package com.ssafy.cocktail.backend.myAnalysis.service;


import java.util.List;

public interface CollaborativeRecommendService {

	List<String> recommendCocktailByBase(Long userId);
	List<String> recommendCocktailByIngredient(Long userId);
}
