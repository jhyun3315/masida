package com.ssafy.cocktail.backend.worldcups.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.worldcups.dto.CocktailWorldCupDetail;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
@Schema(defaultValue = "CocktailWorldCupResponse")
public class CocktailWorldCupRes extends BaseResponseBody {
    @Schema(name="월드컵 칵테일 정보", example = "칵테일")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<CocktailWorldCupDetail> data;

    public static CocktailWorldCupRes of(Integer statusCode, String message, ArrayList<CocktailWorldCupDetail> cocktailWorldCupDetails) {
        CocktailWorldCupRes res = new CocktailWorldCupRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailWorldCupDetails);

        return res;
    }
}
