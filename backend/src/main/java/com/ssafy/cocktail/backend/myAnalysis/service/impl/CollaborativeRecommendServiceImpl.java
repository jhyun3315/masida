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


	@Override
	public List<Object[]> getTop5Base(Long userId) {
		List<Object[]> top5Base = myAnalysisRepository.findTop5BaseByUserId(userId, PageRequest.of(0, 5));
		for (Object[] base : top5Base) {
			String name = (String) base[0];
			Long baseId = (Long) base[1];
			Long count = (Long) base[2];
			System.out.println(name+ "("+ baseId+ ")" + " : " + count);
		}
		return null;
	}

	@Override
	public List<Object[]> getTop5Ingredients(Long userId) {
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
