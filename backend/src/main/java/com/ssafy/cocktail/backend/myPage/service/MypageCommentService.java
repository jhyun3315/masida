package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.CommentCocktail;

import java.util.List;

public interface MypageCommentService {
	public List<CommentCocktail> getCommentCocktailList(Long userId);
}
