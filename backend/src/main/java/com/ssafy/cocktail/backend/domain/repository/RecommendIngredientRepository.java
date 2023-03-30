package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.RecommendIngredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecommendIngredientRepository extends JpaRepository<RecommendIngredient, Long> {
    public RecommendIngredient findByCocktail(Cocktail cocktail);
}
