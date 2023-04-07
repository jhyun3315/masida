package com.ssafy.cocktail.backend.myPage.service;

import com.ssafy.cocktail.backend.myPage.dto.CocktailSummary;

import java.util.List;

public interface MypageSummaryService {

	public List<CocktailSummary> getCocktailSummaryList(Long userId);

}
