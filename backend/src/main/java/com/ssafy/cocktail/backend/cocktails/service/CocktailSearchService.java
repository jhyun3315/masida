package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailMain;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailSearchDetail;
import com.ssafy.cocktail.backend.cocktails.dto.IngredientSearch;
import com.ssafy.cocktail.backend.cocktails.dto.SearchInfo;

import java.util.ArrayList;

public interface CocktailSearchService {
    public ArrayList<CocktailSearchDetail> getCocktailSearchList(SearchInfo info);
    public ArrayList<IngredientSearch> getIngredientSearchList();
    public ArrayList<CocktailMain> getCocktailMainList();
    public CocktailMain getCocktailRandomOne();
}
