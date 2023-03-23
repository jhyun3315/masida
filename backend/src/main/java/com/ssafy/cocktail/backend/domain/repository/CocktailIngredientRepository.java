package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.CocktailIngredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CocktailIngredientRepository extends JpaRepository<CocktailIngredient, Long> {
    public List<CocktailIngredient> findByCocktail(Cocktail cocktail);
}
