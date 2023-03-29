package com.ssafy.cocktail.backend.worldcups.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.worldcups.dto.CocktailWorldDetail;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
@Schema(defaultValue = "CocktailWorldResponse")
public class CocktailWorldRes extends BaseResponseBody {
    @Schema(name="월드컵 칵테일 정보", example = "칵테일")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<CocktailWorldDetail> data;

    public static CocktailWorldRes of(Integer statusCode, String message, ArrayList<CocktailWorldDetail> cocktailWorldDetails) {
        CocktailWorldRes res = new CocktailWorldRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailWorldDetails);

        return res;
    }
}
