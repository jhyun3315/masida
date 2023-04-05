package com.ssafy.cocktail.backend.myAnalysis.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.HashMap;

@Getter
public class RatingBaseObj extends HashMap {
    HashMap<String, Integer> bMap = new HashMap<>();

    @Builder
    public RatingBaseObj(int i) {
        this.bMap.put("rating_score",i);
        this.bMap.put("Gin", 0);
        this.bMap.put("Rum", 0);
        this.bMap.put("Vodka", 0);
        this.bMap.put("Whisky", 0);
        this.bMap.put("Liqueur", 0);
        this.bMap.put("Brandy", 0);
        this.bMap.put("Tequila", 0);
        this.bMap.put("Beer", 0);
        this.bMap.put("Wine", 0);
        this.bMap.put("Mezcal", 0);
        this.bMap.put("Spirits", 0);
    }

}
