package com.ssafy.cocktail.backend.myAnalysis.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;
@Getter
public class RatingIngredient {
    double rating_average;
    int rating_count;
    int rating_max;
    String rating_max_ingredient;
    ArrayList<MyAnalysisRatingIngredient> data;

    @Builder
    public RatingIngredient() {
    }

    @Builder
    public RatingIngredient(double rating_average, int rating_count, int rating_max, String rating_max_ingredient, ArrayList<MyAnalysisRatingIngredient> data) {
        this.rating_average = rating_average;
        this.rating_count = rating_count;
        this.rating_max = rating_max;
        this.rating_max_ingredient = rating_max_ingredient;
        this.data = data;
    }
}
