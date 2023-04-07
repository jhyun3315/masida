package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Setter @Getter
@ToString
public class CocktailRecommendDetail {
    @Schema(description = "칵테일 id", example = "0")
    @JsonProperty("cocktail_id")
    private Long cocktailId;

    @Schema(description = "칵테일 한글 이름", example = "칵테일")
    @JsonProperty("cocktail_name_ko")
    private String cocktailNameKo;

    @Schema(description = "칵테일 이미지", example = "/image")
    @JsonProperty("cocktail_img")
    private String cocktailImg;

    @Schema(description = "칵테일 좋아요 수", example = "1")
    @JsonProperty("cocktail_likes")
    private int cocktailLikes;

    @Schema(description = "칵테일 평점", example = "4.9")
    @JsonProperty("cocktail_rating")
    private Double cocktailRating;

    @Schema(description = "칵테일 북마크 체크", example = "false")
    @JsonProperty("bookmark_checker")
    private boolean bookmarkCheckcker;
}
