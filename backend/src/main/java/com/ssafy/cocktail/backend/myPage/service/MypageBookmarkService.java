package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;

import java.util.List;

public interface MypageBookmarkService {
	public List<LikeBookmarkCocktail> getBookmarkCocktailList(Long userId);
	public Long getBookmarkCocktailCnt(Long userId);
}
