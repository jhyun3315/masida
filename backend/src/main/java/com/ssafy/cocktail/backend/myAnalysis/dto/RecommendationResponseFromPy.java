package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecommendationResponseFromPy {
	@JsonProperty("cocktailIdList")
	private List<Long> cocktailIdList;

	public RecommendationResponseFromPy() {}

	public List<Long> getCocktailIdList() {
		return cocktailIdList;
	}
}
