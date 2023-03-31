package com.ssafy.cocktail.backend.cocktails.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailSearchDetail;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
public class CocktailSearchRes extends BaseResponseBody {
    @Schema(name="칵테일 상세 정보", example = "칵테일 상세 정보")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<CocktailSearchDetail> data;

    @Schema(name="다음 페이지 번호", example = "1")
    @JsonProperty(value = "next_page", access = JsonProperty.Access.READ_WRITE)
    Integer nextPage;

    @Schema(name="마지막 페이지 여부", example = "1")
    @JsonProperty(value = "is_end", access = JsonProperty.Access.READ_WRITE)
    boolean isEnd;

    @Schema(name="총 검색 결과 개수", example = "1")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    Integer max;

    public static CocktailSearchRes of(Integer statusCode, String message, ArrayList<CocktailSearchDetail> cocktailSearchDetailsc, int nextPage, boolean isEnd, int max) {
        CocktailSearchRes res = new CocktailSearchRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailSearchDetailsc);
        res.setNextPage(nextPage);
        res.setMax(max);

        res.setEnd(isEnd);

        return res;
    }
}
