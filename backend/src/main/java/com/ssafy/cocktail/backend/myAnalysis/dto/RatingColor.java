package com.ssafy.cocktail.backend.myAnalysis.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;

@Getter
public class RatingColor {
    double rating_average;
    int rating_count;
    int rating_max;
    String rating_max_color;
    ArrayList<HashMap<String, Integer>> data;

    @Builder
    public RatingColor() {
    }

    @Builder
    public RatingColor(double rating_average, int rating_count, int rating_max, String rating_max_color, ArrayList<HashMap<String, Integer>> data) {
        this.rating_average = rating_average;
        this.rating_count = rating_count/2;
        this.rating_max = rating_max;
        this.rating_max_color = rating_max_color;
        this.data = data;
    }
}
