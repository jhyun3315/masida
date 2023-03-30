package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Bookmark;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    public Bookmark findByUserAndCocktail(User user, Cocktail cocktail);

    // 해당 유저가 북마크한 칵테일 개수
    @Query("select count(b.cocktail) from Bookmark b where b.user.id = :userId")
    public Long findBookmarkCntByUserId(@Param("userId") Long userId);
}
