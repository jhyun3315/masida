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
        this.bMap.put("jin", 0);
        this.bMap.put("rum", 0);
        this.bMap.put("vodka", 0);
        this.bMap.put("whisky", 0);
        this.bMap.put("liqueur", 0);
        this.bMap.put("brandy", 0);
        this.bMap.put("tequila", 0);
        this.bMap.put("beer", 0);
        this.bMap.put("wine", 0);
        this.bMap.put("mezcal", 0);
        this.bMap.put("spirits", 0);
    }

}
