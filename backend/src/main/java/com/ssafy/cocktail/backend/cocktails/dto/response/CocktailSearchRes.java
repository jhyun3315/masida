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

    public static CocktailSearchRes of(Integer statusCode, String message, ArrayList<CocktailSearchDetail> cocktailSearchDetailsc) {
        CocktailSearchRes res = new CocktailSearchRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailSearchDetailsc);

        return res;
    }
}
