package com.ssafy.cocktail.backend.myPage.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myPage.dto.CocktailSummary;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.List;

@Setter
@Schema(defaultValue = "CocktailSummaryResponse")
public class CocktailSummaryRes extends BaseResponseBody {
	@Schema(name="칵테일 취향 분석 요약본 결과", example = "진: 32, 라임: 29, 노란색: 41")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	List<CocktailSummary> data;

	public static CocktailSummaryRes of(Integer statusCode, String message, List<CocktailSummary> result) {
		CocktailSummaryRes res = new CocktailSummaryRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setData(result);
		return res;
	}
}
