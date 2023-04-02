package com.ssafy.cocktail.backend.myAnalysis.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;

@Getter
public class RatingBase {
    double rating_average;
    int rating_count;
    int rating_max;
    String rating_max_base;
    ArrayList<HashMap<String, Integer>> data;

    @Builder
    public RatingBase() {
    }

    @Builder
    public RatingBase(double rating_average, int rating_count, int rating_max, String rating_max_base, ArrayList<HashMap<String, Integer>> data) {
        this.rating_average = Math.round(rating_average*100)/100.0;
        this.rating_count = rating_count;
        this.rating_max = rating_max;
        this.rating_max_base = rating_max_base;
        this.data = data;
    }
}
