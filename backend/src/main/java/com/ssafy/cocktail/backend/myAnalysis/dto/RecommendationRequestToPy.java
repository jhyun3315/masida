package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
import java.util.Map;

@Getter
@AllArgsConstructor
public class RecommendationRequestToPy {
	@JsonProperty("basis")
	private String basis;
	@JsonProperty("userLikeIngredient")
	private List<String> userLikeIngredient;
	@JsonProperty("userLikeList")
	private List<String> userLikeList;
	@JsonProperty("allIngredient")
	private List<String> allIngredient;			// 재료 테이블에서 조회한 재료(General, Garnish) 혹은 베이스 인덱스 리스트
}
