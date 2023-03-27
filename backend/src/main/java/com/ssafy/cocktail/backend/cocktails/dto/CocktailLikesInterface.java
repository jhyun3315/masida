package com.ssafy.cocktail.backend.cocktails.dto;

public interface CocktailLikesInterface {
    Long getCocktailId();
    String getCocktailNameKo();
    String getCocktailNameEn();
    String getCocktailImg();
    Double getCocktailRating();
    Long getCnt();
}
