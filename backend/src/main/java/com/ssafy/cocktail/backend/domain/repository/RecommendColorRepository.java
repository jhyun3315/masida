package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.RecommendColor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecommendColorRepository extends JpaRepository<RecommendColor, Long> {
    public RecommendColor findByCocktail(Cocktail cocktail);
}
