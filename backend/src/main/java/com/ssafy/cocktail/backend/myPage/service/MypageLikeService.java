package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.User;

import java.util.List;

public interface MypageLikeService {
	public List<Cocktail> getLikeCocktailList(User user);
}
