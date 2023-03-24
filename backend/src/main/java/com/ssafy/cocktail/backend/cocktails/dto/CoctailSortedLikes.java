package com.ssafy.cocktail.backend.cocktails.dto;

import lombok.Getter;

@Getter
public class CoctailSortedLikes {
    private int cocktailId;
    private String cocktailNameKo;
    private String cocktailNameEn;
    private String cocktailImg;
    private Double cocktailRating;
    private int cnt;
}
