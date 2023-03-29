package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.StringTokenizer;

@Setter @Getter
@ToString
public class SearchInfo {
    @Schema(description = "정렬 기준", example = "0")
    private String sortNum;

    @Schema(description = "칵테일 이름", example = "모히토")
    private String cocktailName;

    @Schema(description = "칵테일 베이스", example = "진")
    private String cocktailBase;

    @Schema(description = "칵테일 색", example = "빨강색")
    private ArrayList<String> cocktailColor;

    @Schema(description = "칵테일 난이도", example = "중")
    private ArrayList<String> cocktailDifficulty;

    @Schema(description = "칵재일 재료", example = "0")
    private ArrayList<Long> cocktailIngredient;

    public void setCocktailColor(String cocktailColors) {
        this.cocktailColor = new ArrayList<String>();
        StringTokenizer st = new StringTokenizer(cocktailColors, ",");
        while (st.hasMoreTokens()) this.cocktailColor.add(st.nextToken().trim());
    }

    public void setCocktailDifficulty(String cocktailDifficultys) {
        this.cocktailDifficulty = new ArrayList<String>();
        StringTokenizer st = new StringTokenizer(cocktailDifficultys, ",");
        while (st.hasMoreTokens()) this.cocktailDifficulty.add(st.nextToken());
    }

    public void setCocktailIngredient(String cocktailIngredients) {
        this.cocktailIngredient = new ArrayList<Long>();
        StringTokenizer st = new StringTokenizer(cocktailIngredients, ",");
        while (st.hasMoreTokens()) this.cocktailIngredient.add(Long.valueOf(st.nextToken().trim()));
    }
}
