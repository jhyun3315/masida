package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    public List<Like> findAllByCocktail(Cocktail cocktail);
}
