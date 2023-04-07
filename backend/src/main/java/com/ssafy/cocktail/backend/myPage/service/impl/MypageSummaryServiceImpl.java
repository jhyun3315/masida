package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.repository.MyAnalysisRepository;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBaseInterface;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisColorInterface;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisIngredientInterface;
import com.ssafy.cocktail.backend.myPage.dto.CocktailSummary;
import com.ssafy.cocktail.backend.myPage.dto.CocktailSummaryAnalysisTop;
import com.ssafy.cocktail.backend.myPage.service.MypageSummaryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class MypageSummaryServiceImpl implements MypageSummaryService {

	private MyAnalysisRepository myAnalysisRepository;

	@Override
	public List<CocktailSummary> getCocktailSummaryList(Long userId) {

		MyAnalysisBaseInterface myAnalysisBase = myAnalysisRepository.getMyAnalysisBaseList(userId).get(0);
		MyAnalysisIngredientInterface myAnalysisIngredient = myAnalysisRepository.getMyAnalysisIngredientList(userId).get(0);
		MyAnalysisColorInterface myAnalysisColor = myAnalysisRepository.getMyAnalysisColorList(userId).get(0);

		List<CocktailSummary> result = new ArrayList<>();

		// Summary - 베이스
		CocktailSummaryAnalysisTop analysisTopBase = CocktailSummaryAnalysisTop.builder()
				.x(myAnalysisBase.getBaseName())
				.y(myAnalysisBase.getBaseRatio())
				.build();

		CocktailSummary cocktailSummaryBase = CocktailSummary.builder()
				.id("베이스")
				.data(analysisTopBase)
				.build();
		result.add(cocktailSummaryBase);

		// Summary - 재료
		CocktailSummaryAnalysisTop analysisTopIngredient = CocktailSummaryAnalysisTop.builder()
				.x(myAnalysisIngredient.getIngredientName())
				.y(myAnalysisIngredient.getIngredientRatio())
				.build();

		CocktailSummary cocktailSummaryIngre = CocktailSummary.builder()
				.id("재료")
				.data(analysisTopIngredient)
				.build();
		result.add(cocktailSummaryIngre);

		// Summary - 색상
		CocktailSummaryAnalysisTop analysisTopColor = CocktailSummaryAnalysisTop.builder()
				.x(myAnalysisColor.getColorName())
				.y(myAnalysisColor.getColorRatio())
				.build();

		CocktailSummary cocktailSummaryColor = CocktailSummary.builder()
				.id("색상")
				.data(analysisTopColor)
				.build();
		result.add(cocktailSummaryColor);

		return result;
	}
}
