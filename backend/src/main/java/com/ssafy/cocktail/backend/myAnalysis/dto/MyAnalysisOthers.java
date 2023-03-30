package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

public class MyAnalysisOthers {
    @Schema(description = "칵테일 이름", example = "레몬")
    @JsonProperty("cocktail_name_ko")
    private String CocktailNameKo;

    @Schema(description = "칵테일 분포도", example = "31")
    @JsonProperty("cocktail_ratio")
    private int CocktailRatio;

    @Schema(description = "칵테일 개수", example = "12")
    @JsonProperty("cocktail_count")
    private int CocktailCount;

    @Builder
    public MyAnalysisOthers(String CocktailNameKo, int CocktailRatio, int CocktailCount){
        this.CocktailNameKo = CocktailNameKo;
        this.CocktailCount = CocktailCount;
        this.CocktailRatio = CocktailRatio;
    }
}
