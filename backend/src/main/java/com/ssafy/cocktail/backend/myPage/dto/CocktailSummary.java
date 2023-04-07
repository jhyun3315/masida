package com.ssafy.cocktail.backend.myPage.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CocktailSummary {
	@Schema(description = "분석 기준", example = "베이스 | 재료 | 색상")
	@JsonProperty("id")
	private String id;

	@Schema(description = "분석 카테고리별 Top 1", example = "{x: 라임, y: 29}")
	@JsonProperty("data")
	private CocktailSummaryAnalysisTop data;

	@Builder
	public CocktailSummary (String id, CocktailSummaryAnalysisTop data) {
		this.id = id;
		this.data = data;
	}

}