package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.security.cert.CertPath;
import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    public List<Like> findAllByCocktailAndLikeDeleted(Cocktail cocktail, boolean likeDeleted);
    public Like findByUserAndCocktail(User user, Cocktail cocktail);

    // 해당 유저가 좋아요한 칵테일 리스트
    @Query("select l.cocktail from Like l where l.user = :user")
    public List<Cocktail> findByUser(@Param("user") User user);

}
