package com.ssafy.cocktail.backend.cocktails.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailMain;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailRecommendDetail;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Setter
@ToString
@Schema(defaultValue = "CocktailRecommendResponse")
public class CocktailRecommendRes extends BaseResponseBody {
    @Schema(name="칵테일 추천 6개", example = "id, 한글 이름, 이미지, 좋아요 수, 평점, 북마크 체크")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<CocktailRecommendDetail> data;

    public static CocktailRecommendRes of(Integer statusCode, String message, ArrayList<CocktailRecommendDetail>  cocktailRecommendDetails) {
        CocktailRecommendRes res = new CocktailRecommendRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(cocktailRecommendDetails);

        return res;
    }
}
