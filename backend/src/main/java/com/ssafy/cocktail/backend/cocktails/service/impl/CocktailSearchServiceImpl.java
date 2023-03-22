package com.ssafy.cocktail.backend.cocktails.service.impl;


import com.ssafy.cocktail.backend.cocktails.dto.IngredientSearch;
import com.ssafy.cocktail.backend.cocktails.service.CocktailSearchService;
import com.ssafy.cocktail.backend.domain.entity.Ingredient;
import com.ssafy.cocktail.backend.domain.repository.IngredientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CocktailSearchServiceImpl implements CocktailSearchService {

    private IngredientRepository ingredientRepository;
    @Override
    public ArrayList<IngredientSearch> getIngredientSearchList() {
        // 재료 검색에 필요한 모든 재료 리스트 반환
        List<Ingredient> ingredients = ingredientRepository.findAll(); // 모든 재료 목록 가져오기
        ArrayList<IngredientSearch> ingredientSearchList  = new ArrayList<>(); // 모든 재료 리스트
        for (Ingredient ingredient: ingredients) { // 재료
            ingredientSearchList.add(new IngredientSearch(ingredient.getId(), ingredient.getIngredientName())); // 칵테일 재료 리스트에 추가
        }
        return ingredientSearchList;
    }
}
