package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.CocktailIngredient;
import com.ssafy.cocktail.backend.myAnalysis.dto.CocktailIngredientInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CocktailIngredientRepository extends JpaRepository<CocktailIngredient, Long> {
    public List<CocktailIngredient> findByCocktail(Cocktail cocktail);

    // 추천 알고리즘용_Ingredient : 칵테일별 General, Garnish 재료 인덱스 리스트
    @Query(value = "SELECT c.cocktail_id AS cocktailId, " +
            "GROUP_CONCAT(ci.ingredient_id SEPARATOR ',') AS ingredientList " +
            "FROM cocktails c\n" +
            "LEFT JOIN cocktail_ingredient ci\n" +
            "ON c.cocktail_id = ci.cocktail_id AND ci.ingredient_type IN ('General', 'Garnish')\n" +
            "GROUP BY c.cocktail_id" , nativeQuery = true)
    public List<CocktailIngredientInterface> findCocktailIngredientId();

    // 추천 알고리즘용_Base : 칵테일별 General, Garnish 외의 재료들 (베이스 종류 재료들)
    @Query(value = "SELECT c.cocktail_id AS cocktailId, " +
            "GROUP_CONCAT(ci.ingredient_id SEPARATOR ',') AS ingredientList " +
            "FROM cocktails c\n" +
            "LEFT JOIN cocktail_ingredient ci\n" +
            "ON c.cocktail_id = ci.cocktail_id AND ci.ingredient_type NOT IN ('General', 'Garnish')\n" +
            "GROUP BY c.cocktail_id" , nativeQuery = true)
    public List<CocktailIngredientInterface> findCocktailBaseId();


}
