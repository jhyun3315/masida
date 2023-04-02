package com.ssafy.cocktail.backend.myAnalysis.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.HashMap;
@Getter
public class RatingColorObj {
    HashMap<String, Integer> cMap = new HashMap<>();

    @Builder
    public RatingColorObj(int i) {
        this.cMap.put("rating_score",i);
        this.cMap.put("red", 0);
        this.cMap.put("orange", 0);
        this.cMap.put("pink", 0);
        this.cMap.put("green", 0);
        this.cMap.put("blue", 0);
        this.cMap.put("yellow", 0);
        this.cMap.put("violet", 0);
        this.cMap.put("purple", 0);
        this.cMap.put("brown", 0);
        this.cMap.put("white", 0);
    }
}
