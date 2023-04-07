package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

public class MyAnalysisRatingIngredient {
    @Schema(description = "별점", example = "3")
    @JsonProperty("rating_score")
    private int RatingScore;

    @Schema(description = "재료1 이름", example = "레몬")
    @JsonProperty("ingredient_name1")
    private String IngredientName1;

    @Schema(description = "재료1 개수", example = "17")
    @JsonProperty("ingredient_count1")
    private int IngredientCount1;

    @Schema(description = "재료2 이름", example = "라임")
    @JsonProperty("ingredient_name2")
    private String IngredientName2;

    @Schema(description = "재료2 개수", example = "17")
    @JsonProperty("ingredient_count2")
    private int IngredientCount2;

    @Schema(description = "재료3 이름", example = "라즈베리")
    @JsonProperty("ingredient_name3")
    private String IngredientName3;

    @Schema(description = "재료3 개수", example = "17")
    @JsonProperty("ingredient_count3")
    private int IngredientCount3;

    @Schema(description = "재료4 이름", example = "체리")
    @JsonProperty("ingredient_name4")
    private String IngredientName4;

    @Schema(description = "재료4 개수", example = "17")
    @JsonProperty("ingredient_count4")
    private int IngredientCount4;

    @Schema(description = "재료5 이름", example = "오렌지")
    @JsonProperty("ingredient_name5")
    private String IngredientName5;

    @Schema(description = "재료5 개수", example = "17")
    @JsonProperty("ingredient_count5")
    private int IngredientCount5;

    @Builder
    public MyAnalysisRatingIngredient(){
    }

    @Builder
    public MyAnalysisRatingIngredient(int ratingScore, String ingredientName1, int ingredientCount1, String ingredientName2, int ingredientCount2, String ingredientName3, int ingredientCount3, String ingredientName4, int ingredientCount4, String ingredientName5, int ingredientCount5) {
        RatingScore = ratingScore;
        IngredientName1 = ingredientName1;
        IngredientCount1 = ingredientCount1;
        IngredientName2 = ingredientName2;
        IngredientCount2 = ingredientCount2;
        IngredientName3 = ingredientName3;
        IngredientCount3 = ingredientCount3;
        IngredientName4 = ingredientName4;
        IngredientCount4 = ingredientCount4;
        IngredientName5 = ingredientName5;
        IngredientCount5 = ingredientCount5;
    }
}
