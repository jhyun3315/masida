package com.ssafy.cocktail.backend.myAnalysis.service;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendationRequest;

import java.util.List;

public interface CollaborativeRecommendService {

	List<String> recommendCocktailByBase(Long userId);
	List<String> recommendCocktailByIngredient(Long userId) throws UnirestException, JsonProcessingException;
	List<String> dataToPython(RecommendationRequest recommendationReq) throws UnirestException, JsonProcessingException;
}
