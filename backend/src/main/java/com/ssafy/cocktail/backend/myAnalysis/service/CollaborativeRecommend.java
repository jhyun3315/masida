package com.ssafy.cocktail.backend.myAnalysis.service;


import java.util.List;

public interface CollaborativeRecommend {
	List<Object[]> getTop5Ingredients(Long userId);
	List<Object[]> getTop5Base(Long userId);
}
