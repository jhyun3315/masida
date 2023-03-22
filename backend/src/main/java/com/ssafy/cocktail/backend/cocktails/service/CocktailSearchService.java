package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.IngredientSearch;

import java.util.ArrayList;

public interface CocktailSearchService {
    public ArrayList<IngredientSearch> getIngredientSearchList();
}
