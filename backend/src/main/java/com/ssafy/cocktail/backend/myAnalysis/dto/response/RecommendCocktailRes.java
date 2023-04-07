package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendCocktail;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.List;

@Setter
public class RecommendCocktailRes extends BaseResponseBody {
    @Schema(name="추천 칵테일 데이터 9개", example = "id, 한글이름, 이미지")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    List<RecommendCocktail> data;

    public static RecommendCocktailRes of(Integer statusCode, String message, List<RecommendCocktail> recommendCocktails) {
        RecommendCocktailRes res = new RecommendCocktailRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(recommendCocktails);
        return res;
    }
}
