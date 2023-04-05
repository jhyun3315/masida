package com.ssafy.cocktail.backend.myAnalysis.service;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendCocktail;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendationRequestToPy;

import java.util.List;

public interface CollaborativeRecommendService {

	List<String> recommendCocktailByBase(Long userId);
	List<RecommendCocktail> recommendCocktailByIngredient(Long userId) throws UnirestException, JsonProcessingException;
	List<Long> dataToPython(RecommendationRequestToPy recommendationReq, String endPoint) throws UnirestException, JsonProcessingException;
}
