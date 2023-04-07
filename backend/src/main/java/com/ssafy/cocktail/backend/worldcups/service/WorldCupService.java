package com.ssafy.cocktail.backend.worldcups.service;

import com.ssafy.cocktail.backend.worldcups.dto.CocktailWorldCupDetail;

import java.util.ArrayList;

public interface WorldCupService {
    public ArrayList<CocktailWorldCupDetail> getWorldCupCocktails();
}
