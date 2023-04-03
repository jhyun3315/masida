package com.ssafy.cocktail.backend.myAnalysis.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class RecommendationReq {
	private List<String> userLikeIngredient;
	private List<String> userLikeList;

	@Builder
	public RecommendationReq(List<String> userLikeIngredient, List<String> userLikeList) {
		this.userLikeIngredient = userLikeIngredient;
		this.userLikeList = userLikeList;
	}
}
