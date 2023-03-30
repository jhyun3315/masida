package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.RecommendIngredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendIngredientRepository extends JpaRepository<RecommendIngredient, Long> {
}
