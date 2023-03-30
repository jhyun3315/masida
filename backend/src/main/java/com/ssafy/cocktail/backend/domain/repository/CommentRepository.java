package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.myPage.dto.CommentCocktail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    public List<Comment> findAllByCocktailAndCommentDeleted(Cocktail cocktail, boolean commentDeleted);

    // 해당 유저가 댓글과 평점 등록한 칵테일 리스트
    @Query("select c.cocktail.id, c.cocktail.cocktailNameKo, c.cocktail.cocktailImg," +
            "c.commentDifficulty, c.commentContent, c.commentRating, c.commentCreatedDate " +
            "from Comment c where c.user.id = :userId")
    public List<CommentCocktail> findCommentCocktailsByUserId(@Param("userId") Long userId);

}
