package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailDetail;

public interface CocktailDetailService {
        public CocktailDetail getCocktailDetail(String cocktailId, String accessToken);
        public void setCocktailLike(Long cocktailId, String accessToken);
}
