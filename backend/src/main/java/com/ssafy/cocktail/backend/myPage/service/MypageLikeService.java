package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;

import java.util.List;

public interface MypageLikeService {
	public List<LikeBookmarkCocktail> getLikeCocktailList(Long userId);
}
