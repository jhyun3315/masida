package com.ssafy.cocktail.backend.myPage.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CocktailSummaryAnalysisTop {
	// 설명 = 분석 기준에 따라 Top1, 예시 = (럼 | 라임 | 빨간색)
	private String x;
	// 설명 = Top1의 비율, 예시 = (32 | 29 | 41)
	private int y;

	@Builder
	public CocktailSummaryAnalysisTop (String x, int y) {
		this.x = x;
		this.y = y;
	}
}
