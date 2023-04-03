package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.security.cert.CertPath;
import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    public List<Like> findAllByCocktailAndLikeDeleted(Cocktail cocktail, boolean likeDeleted);
    public Like findByUserAndCocktail(User user, Cocktail cocktail);

    // 해당 유저가 좋아요한 칵테일 리스트 - 페이지네이션 적용
    @Query("select l.cocktail from Like l where l.user.id = :userId and l.likeDeleted = false")
    public Page<Cocktail> findLikeCocktailByUserId(@Param("userId") Long userId, Pageable pageable);

    // 해당 유저가 좋아요한 칵테일 개수
    @Query("select count(l.cocktail) from Like l where l.user.id = :userId and l.likeDeleted = false")
    public Long findLikeCntByUserId(@Param("userId") Long userId);

    // 해당 칵테일의 좋아요 개수
    @Query("select count(l.id) from Like l where l.cocktail.id = :cocktailId and l.likeDeleted = false")
    public  Long findLikeCntByCocktailId(@Param("cocktailId") Long cocktailId);

    // 해당 유저가 좋아요한 칵테일 리스트 모두 조회 - 추천알고리즘용
    @Query("select l.cocktail from Like l where l.user.id = :userId and l.likeDeleted = false")
    public List<Cocktail> findLikeCocktailAllByUserId(@Param("userId") Long userId);
}
