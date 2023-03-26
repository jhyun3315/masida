package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailDetail;

public interface CocktailDetailService {
        public CocktailDetail getCocktailDetail(String cocktailId, String accessToken);
        public boolean setCocktailLike(Double cocktailId, String accessToken);
}
