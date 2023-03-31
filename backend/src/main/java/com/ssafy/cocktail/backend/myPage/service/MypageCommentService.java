package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.CommentCocktail;
import com.ssafy.cocktail.backend.myPage.dto.PaginationDataSet;
import com.ssafy.cocktail.backend.myPage.dto.response.PageableRes;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MypageCommentService {
	public PaginationDataSet getCommentCocktailList(Long userId, Pageable pageable);
}
