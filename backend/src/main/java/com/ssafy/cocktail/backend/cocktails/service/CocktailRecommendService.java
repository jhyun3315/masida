package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailRecommendDetail;

import java.util.ArrayList;

public interface CocktailRecommendService {
    public ArrayList<CocktailRecommendDetail> getRecommendCocktails(int op, String cocktailId, String accessToken);
}
