package com.ssafy.cocktail.backend.myAnalysis.service;


import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendationReq;

import java.util.List;

public interface CollaborativeRecommendService {

	List<String> recommendCocktailByBase(Long userId);
	List<String> recommendCocktailByIngredient(Long userId);
//	List<String> dataToPy(RecommendationReq recommendationReq);
}
