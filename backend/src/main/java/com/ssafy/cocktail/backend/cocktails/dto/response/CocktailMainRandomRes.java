package com.ssafy.cocktail.backend.cocktails.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailMain;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

@Setter
public class CocktailMainRandomRes extends BaseResponseBody {
    @Schema(name="랜덤 칵테일 추첨 1개", example = "랜덤 칵테일")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    CocktailMain data;

    public static CocktailMainRandomRes of(Integer statusCode, String message, CocktailMain cocktailMain) {
        CocktailMainRandomRes res = new CocktailMainRandomRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailMain);

        return res;
    }
}
