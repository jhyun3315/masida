package com.ssafy.cocktail.backend.cocktails.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailMain;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
public class CocktailMainLikesRes extends BaseResponseBody {
    @Schema(name="가장 좋아요를 많이 누른 칵테일", example = "좋아요 상위 10개 칵테일")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<CocktailMain> data;

    public static CocktailMainLikesRes of(Integer statusCode, String message, ArrayList<CocktailMain> cocktailMains) {
        CocktailMainLikesRes res = new CocktailMainLikesRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailMains);

        return res;
    }
}
