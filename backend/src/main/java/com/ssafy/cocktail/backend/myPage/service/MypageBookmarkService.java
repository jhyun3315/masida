package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.PaginationDataSet;
import org.springframework.data.domain.Pageable;

public interface MypageBookmarkService {
	public PaginationDataSet getBookmarkCocktailList(Long userId, Pageable pageable);
	public Long getBookmarkCocktailCnt(Long userId);
}
