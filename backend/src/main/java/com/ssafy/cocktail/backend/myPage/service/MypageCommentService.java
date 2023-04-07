package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.PaginationDataSet;
import org.springframework.data.domain.Pageable;


public interface MypageCommentService {
	public PaginationDataSet getCommentCocktailList(Long userId, Pageable pageable);
}
