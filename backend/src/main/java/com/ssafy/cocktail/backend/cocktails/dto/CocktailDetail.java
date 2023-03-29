package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Setter
@Getter
@ToString
public class CocktailDetail {
    @Schema(description = "칵테일 id", example = "0")
    @JsonProperty("cocktail_id")
    private int cocktailId;

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

    @Schema(description = "칵테일 난이도", example = "하")
    @JsonProperty("cocktail_difficulty")
    private String cocktailDifficulty;

    @Schema(description = "칵테일 평점", example = "4.9")
    @JsonProperty("cocktail_rating")
    private String cocktailRating;

    @Schema(description = "칵테일 좋아요 수", example = "1")
    @JsonProperty("cocktail_likes")
    private int cocktailLikes;

    @Schema(description = "칵테일 댓글 수", example = "1")
    @JsonProperty("cocktail_comments")
    private int cocktailComments;

    @Schema(description = "칵테일 좋아요 체크", example = "false")
    @JsonProperty("likes_checker")
    private boolean likesChecker;

    @Schema(description = "칵테일 북마크 체크", example = "false")
    @JsonProperty("bookmark_checker")
    private boolean bookmarkCheckcker;

    @Schema(description = "글라스 종류", example = "마티니")
    private String glass;

    @Schema(description = "베이스 종류", example = "위스키")
    private String base;

    @Schema(description = "칵테일 가니쉬", example = "가나쉬 이름")
    private ArrayList<GarnishDetail> garnish;

    @Schema(description = "칵테일 제조법", example = "칵테일 제조법")
    private ArrayList<RecipeDetail> recipe;

    @Schema(description = "칵테일 재료", example = "칵테일 재료")
    private ArrayList<IngredientDetail> ingredient;
}
