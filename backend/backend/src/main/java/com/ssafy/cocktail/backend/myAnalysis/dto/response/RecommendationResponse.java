package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecommendationResponse {
	@JsonProperty("cocktailIdList")
	private List<String> cocktailIdList;

	public List<String> getCocktailIdList() {
		return cocktailIdList;
	}
}
