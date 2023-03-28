package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.security.cert.CertPath;
import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    public List<Like> findAllByCocktailAndLikeDeleted(Cocktail cocktail, boolean likeDeleted);
    public Like findByUserAndCocktail(User user, Cocktail cocktail);
}
