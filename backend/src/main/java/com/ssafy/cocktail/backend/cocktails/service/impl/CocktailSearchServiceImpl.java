package com.ssafy.cocktail.backend.cocktails.service.impl;


import com.ssafy.cocktail.backend.cocktails.dto.*;
import com.ssafy.cocktail.backend.cocktails.service.CocktailSearchService;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Ingredient;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.IngredientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CocktailSearchServiceImpl implements CocktailSearchService {

    private IngredientRepository ingredientRepository;
    private CocktailRepository cocktailRepository;

    @Override
    public ArrayList<CocktailSearchDetail> getCocktailSearchList(SearchInfo info) {
        ArrayList<CocktailSearchDetail> cocktailSearchDetails = new ArrayList<>();
        List<Cocktail> cocktails = cocktailRepository.findAll(); // 모든 칵테일 가져오기
        for (Cocktail cocktail: cocktails) { // 칵테일
            String cocktailKo = cocktail.getCocktailNameKo(); // 칵테일 한글 이름
            String cocktailEn = cocktail.getCocktailNameEn(); // 칵테일 영어 이름
            String cocktailBase = cocktail.getCocktailBase(); // 칵테일 베이스
            String cocktailColor1 = cocktail.getCocktailColor1(); // 칵테일 색상1
            String cocktailColor2 = cocktail.getCocktailColor2(); // 칵테일 색상2
            String cocktaildifficulty = (int)cocktail.getCocktailDifficulty() == 1 ? "하" :
                    cocktail.getCocktailDifficulty() == 2 ? "중" : "상";
        }

        return null;
    }

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

    @Override
    public ArrayList<CocktailMain> getCocktailMainList() {
        // 칵테일을 좋아요 개수 최대 상위 10개 리턴
        ArrayList<CocktailMain> cocktailMains = new ArrayList<>(); // 좋아요 칵테일 정보
        List<CocktailLikesInterface> cocktailLikesInterfaces = cocktailRepository.findCocktailByLikes(); // 좋아요 개수로 내림차순 정렬하여 칵테일 가져오기
        for (CocktailLikesInterface cocktail: cocktailLikesInterfaces) { // 칵테일
            if (cocktailMains.size() == 10) break; // 10개의 칵테일을 찾았으면
            if (cocktail.getCocktailRating() == null) {
                CocktailMain cocktailMain = new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), 0.0); // 좋아요 칵테일 추가
                cocktailMains.add(cocktailMain);
                continue;
            }
            cocktailMains.add(new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), Math.round(cocktail.getCocktailRating()*10)/10.0)); // 좋아요 칵테일 추가
        }
        return cocktailMains;
    }

    @Override
    public CocktailMain getCocktailRandomOne() {
        // 칵테일을 랜덤으로 1개 뽑아서 리턴
        CocktailLikesInterface cocktail = cocktailRepository.getCocktailRandomOne(); // 칵테일 랜덤으로 1개 가져오기
        if (cocktail.getCocktailRating() == null) {
            return new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), 0.0); // 랜덤 칵테일 1개 추가
        }
        return new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), Math.round(cocktail.getCocktailRating()*10)/10.0); // 랜덤 칵테일 1개 추가
    }
}
