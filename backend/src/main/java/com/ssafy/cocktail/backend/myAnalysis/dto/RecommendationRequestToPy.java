package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecommendationRequestToPy {
	@JsonProperty("userLikeIngredient")
	private List<String> userLikeIngredient;
	@JsonProperty("userLikeList")
	private List<String> userLikeList;
	@JsonProperty("cocktailIngredients")
	private List<Long[]> cocktailIngredients;	// 칵테일별 재료(General,Garnish) 혹은 베이스 인덱스 리스트
	@JsonProperty("allIngredient")
	private List<Long> allIngredient;			// 재료 테이블에서 조회한 재료(General, Garnish) 혹은 베이스 인덱스 리스트
}
