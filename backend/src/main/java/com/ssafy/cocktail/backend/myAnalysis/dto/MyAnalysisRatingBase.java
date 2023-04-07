package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

public class MyAnalysisRatingBase {
    @Schema(description = "별점", example = "3")
    @JsonProperty("rating_score")
    private double RatingScore;

    @Schema(description = "진 개수", example = "17")
    @JsonProperty("jin")
    private int JinCount;

    @Schema(description = "럼 개수", example = "17")
    @JsonProperty("rum")
    private int RumCount;

    @Schema(description = "보드카 개수", example = "17")
    @JsonProperty("vodka_count")
    private int VodkaCount;

    @Schema(description = "위스키 개수", example = "17")
    @JsonProperty("whisky")
    private int WhiskyCount;

    @Schema(description = "리큐르 개수", example = "17")
    @JsonProperty("liqueur")
    private int LiqueurCount;

    @Schema(description = "브랜디 개수", example = "17")
    @JsonProperty("brandy")
    private int BrandyCount;

    @Schema(description = "데킬라 개수", example = "17")
    @JsonProperty("tequila")
    private int TequilaCount;

    @Schema(description = "맥주 개수", example = "17")
    @JsonProperty("beer")
    private int BeerCount;

    @Schema(description = "와인 개수", example = "17")
    @JsonProperty("wine")
    private int WineCount;

    @Schema(description = "메즈칼 개수", example = "17")
    @JsonProperty("mezcal")
    private int MezcalCount;

    @Schema(description = "증류수 개수", example = "17")
    @JsonProperty("spirits")
    private int SpiritsCount;

    @Builder
    public MyAnalysisRatingBase(int ratingScore, int jinCount, int rumCount, int whiskyCount, int liqueurCount, int vodkaCount, int brandyCount, int tequilaCount, int beerCount, int wineCount, int mezcalCount, int spiritsCount) {
        this.RatingScore = ratingScore;
        this.JinCount = jinCount;
        this.RumCount = rumCount;
        this.WhiskyCount = whiskyCount;
        this.LiqueurCount = liqueurCount;
        this.VodkaCount = vodkaCount;
        this.BrandyCount = brandyCount;
        this.TequilaCount = tequilaCount;
        this.BeerCount = beerCount;
        this.WineCount = wineCount;
        this.MezcalCount = mezcalCount;
        this.SpiritsCount = spiritsCount;
    }
}
