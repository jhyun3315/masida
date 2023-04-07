package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

	// 추천 알고리즘용_Ingredient : General, Garnish 재료 인덱스 리스트
	@Query("select i.id from Ingredient i where i.ingredientType in ('General' , 'Garnish')")
	public List<Long> findIngredientsId();

	// 추천 알고리즘용_Base : General, Garnish 외의 재료들
	@Query("select i.id from Ingredient i where i.ingredientType not in ('General' , 'Garnish')")
	public List<Long> findBaseId();

}
