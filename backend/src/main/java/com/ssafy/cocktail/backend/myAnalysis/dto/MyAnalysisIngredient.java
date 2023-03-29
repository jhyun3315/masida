package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

public class MyAnalysisIngredient {
    @Schema(description = "재료 이름", example = "레몬")
    @JsonProperty("ingredient_name")
    private String IngredientName;

    @Schema(description = "재료 분포도", example = "31")
    @JsonProperty("ingredient_ratio")
    private int IngredientRatio;

    @Schema(description = "재료 개수", example = "12")
    @JsonProperty("ingredient_count")
    private int IngredientCount;

    @Builder
    public MyAnalysisIngredient(String ingredientName, int ingredientCount, int ingredientRatio) {
        this.IngredientName = ingredientName;
        this.IngredientCount = ingredientCount;
        this.IngredientRatio = ingredientRatio;
    }
}
