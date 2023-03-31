package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MypageLikeService {
	public Page<Cocktail> getLikeCocktailList(Long userId, Pageable pageable);
	public Long getLikeCocktailCnt(Long userId);
}
