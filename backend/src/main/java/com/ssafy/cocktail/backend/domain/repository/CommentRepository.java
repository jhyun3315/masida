package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    public List<Comment> findAllByCocktailAndCommentDeleted(Cocktail cocktail, boolean commentDeleted);

    @Query("select c from Comment c " +
            "where c.user.id = :userId " +
            "and c.commentDeleted = false")
    public Page<Comment> findCommentCocktailsByUserId(@Param("userId") Long userId, Pageable pageable);

}
