package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RecommendCocktail {
	@Schema(description = "칵테일 id", example = "0")
	@JsonProperty("cocktail_id")
	private long cocktailId;

	@Schema(description = "칵테일 한글 이름", example = "칵테일")
	@JsonProperty("cocktail_name_ko")
	private String cocktailNameKo;

	@Schema(description = "칵테일 이미지 url", example = ".jpg")
	@JsonProperty("cocktail_img")
	private String cocktailImg;

	@Builder
	public RecommendCocktail (long cocktailId, String cocktailNameKo, String cocktailImg) {
		this.cocktailId = cocktailId;
		this.cocktailNameKo = cocktailNameKo;
		this.cocktailImg = cocktailImg;
	}

	public RecommendCocktail() {}
}
