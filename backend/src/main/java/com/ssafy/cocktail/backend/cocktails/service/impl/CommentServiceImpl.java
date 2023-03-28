package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    private CommentRepository commentRepository;
    private OAuthService oAuthService;
    private CocktailRepository cocktailRepository;

    @Override
    public boolean registerComment(String cocktailId, CommentReq commentInfo, String accessToken) {
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        Cocktail cocktail = cocktailRepository.findCocktailById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        Double cocktailDiffculty =
                commentInfo.getCommentContent().equals("하") ? 1.0 :
                commentInfo.getCommentContent().equals("중") ? 2.0 : 3.0;
        commentRepository.save(
                Comment.builder()
                        .commentContent(commentInfo.getCommentContent())
                        .commentRating(commentInfo.getCommentRating())
                        .commentDifficulty(cocktailDiffculty)
                        .commentDeleted("N")
                        .commentCreatedDate(LocalDateTime.now())
                        .commentUpdateDate(LocalDateTime.now())
                        .user(user)
                        .cocktail(cocktail)
                        .build()
        );
        return true;
    }
}
