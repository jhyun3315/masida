package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;

import java.util.List;

public interface MypageLikeService {
	public List<LikeBookmarkCocktail> getLikeCocktailList(User user);
}
