package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailRecommendDetail;
import com.ssafy.cocktail.backend.cocktails.service.CocktailRecommendService;
import com.ssafy.cocktail.backend.domain.entity.RecommendIngredient;
import com.ssafy.cocktail.backend.domain.repository.RecommendColorRepository;
import com.ssafy.cocktail.backend.domain.repository.RecommendIngredientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CocktailRecommendServiceImpl implements CocktailRecommendService {
    private RecommendIngredientRepository recommendIngredientRepository;
    private RecommendColorRepository recommendColorRepository;

    @Override
    public ArrayList<CocktailRecommendDetail> getRecommendCocktails(int op, String accessToken) {
        ArrayList<CocktailRecommendDetail> results = new ArrayList<>();
        List<?> recommends = new ArrayList<>();
        if (op == 0) {
//            recommends =
        } else {

        }

        return null;
    }
}
