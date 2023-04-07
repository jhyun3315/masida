package com.ssafy.cocktail.backend.myAnalysis.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class RatingIngredientObj {
    String ingredientName;
    int ingredientCount;

@Builder
    public RatingIngredientObj(String ingredientName, int ingredientCount) {
        this.ingredientName = ingredientName;
        this.ingredientCount = ingredientCount;
    }
}
