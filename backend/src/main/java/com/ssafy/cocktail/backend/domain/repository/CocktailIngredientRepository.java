package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.CocktailIngredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CocktailIngredientRepository extends JpaRepository<CocktailIngredient, Long> {
    public List<CocktailIngredient> findByCocktail(Cocktail cocktail);

    // 추천 알고리즘용_Ingredient : 칵테일별 General, Garnish 재료 인덱스 리스트
    @Query("select ci.ingredient.id  " +
            "from CocktailIngredient ci " +
            "where ci.cocktail.id = :cocktailId " +
            "and ci.ingredientType in ('General', 'Garnish') ")
    public Long[] findCocktailIngredientId(@Param("cocktailId") Long cocktailId);

    // 추천 알고리즘용_Base : 칵테일별 General, Garnish 외의 재료들 (베이스 종류 재료들)
//    public Map<Long, List<Long>> findCocktailBaseId();


}
