package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MypageLikeService {
	public List<LikeBookmarkCocktail> getLikeCocktailList(Long userId, Pageable pageable);
	public Long getLikeCocktailCnt(Long userId);

}
