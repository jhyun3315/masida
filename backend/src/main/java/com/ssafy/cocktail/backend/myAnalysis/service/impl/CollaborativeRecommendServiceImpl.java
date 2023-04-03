package com.ssafy.cocktail.backend.myAnalysis.service.impl;

import com.ssafy.cocktail.backend.domain.repository.MyAnalysisRepository;
import com.ssafy.cocktail.backend.myAnalysis.service.CollaborativeRecommendService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class CollaborativeRecommendServiceImpl implements CollaborativeRecommendService {
	private MyAnalysisRepository myAnalysisRepository;

	/**
	 * 사용자가 선호하는 베아스 top 5 리스트 조회
	 * 파이썬  FastAPI로 유사도 분석 자료 전송
	 * 파이썬 FastAPI로부터 유사도가 가장 높은 칵테일 9개 전달받기
	 * @param userId
	 * @return List<Object[]>
	 */
	@Override
	public List<String> recommendCocktailByBase(Long userId) {
		// 사용자가 선호하는 베이스 top 5 조회
		List<Object[]> top5Base = myAnalysisRepository.findTop5BaseByUserId(userId, PageRequest.of(0, 5));
		for (Object[] base : top5Base) {
			String name = (String) base[0];
			Long baseId = (Long) base[1];
			Long count = (Long) base[2];
			System.out.println(name+ "("+ baseId+ ")" + " : " + count);
		}
		return null;
	}

	/**
	 * 사용자가 선호하는 재료 top 5 리스트 조회
	 * 파이썬  FastAPI로 유사도 분석 자료 전송
	 * 파이썬 FastAPI로부터 유사도가 가장 높은 칵테일 9개 전달받기
	 * @param userId
	 * @return List<Object[]>
	 */
	@Override
	public List<String> recommendCocktailByIngredient(Long userId) {
		// 사용자가 선호하는 재료 top 5 조회
		List<Object[]> top5Ingredients = myAnalysisRepository.findTop5IngredientsByUserId(userId, PageRequest.of(0, 5));
		for (Object[] ingredient : top5Ingredients) {
			String name = (String) ingredient[0];
			Long ingredientId = (Long) ingredient[1];
			Long count = (Long) ingredient[2];
			System.out.println(name+ "("+ ingredientId+ ")" + " : " + count);
		}
		return null;
	}
}
