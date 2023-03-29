package com.ssafy.cocktail.backend.worldcups.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Setter @Getter @ToString
public class CocktailWorldCupDetail {
    @Schema(description = "칵테일 id", example = "0")
    @JsonProperty("cocktail_id")
    private Long cocktailId;

    @Schema(description = "칵테일 한글 이름", example = "칵테일")
    @JsonProperty("cocktail_name_ko")
    private String cocktailNameKo;

    @Schema(description = "칵테일 영어 이름", example = "cocktail")
    @JsonProperty("cocktail_name_en")
    private String cocktailNameEn;

    @Schema(description = "칵테일 이미지", example = "/image")
    @JsonProperty("cocktail_img")
    private String cocktailImg;

    @Schema(description = "칵테일 내용", example = "싸피에서 만든 칵테일입니다")
    @JsonProperty("cocktail_content")
    private String cocktailContent;

    @Schema(description = "칵테일 재료", example = "칵테일 재료")
    private ArrayList<IngredientName> ingredient;
}
