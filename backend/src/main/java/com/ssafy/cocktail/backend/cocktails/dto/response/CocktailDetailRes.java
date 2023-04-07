package com.ssafy.cocktail.backend.cocktails.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailDetail;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

@Setter
@Schema(defaultValue = "CocktailDetailResponse")
public class CocktailDetailRes extends BaseResponseBody {
    @Schema(name="칵테일 상세 정보", example = "칵테일 상세 정보")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    CocktailDetail data;

    public static CocktailDetailRes of(Integer statusCode, String message, CocktailDetail cocktailDetail) {
        CocktailDetailRes res = new CocktailDetailRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailDetail);
        return res;
    }
}
