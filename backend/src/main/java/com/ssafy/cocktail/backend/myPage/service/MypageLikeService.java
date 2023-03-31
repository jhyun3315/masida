package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.PaginationDataSet;
import org.springframework.data.domain.Pageable;

public interface MypageLikeService {
	public PaginationDataSet getLikeCocktailList(Long userId, Pageable pageable);
	public Long getLikeCocktailCnt(Long userId);
}
