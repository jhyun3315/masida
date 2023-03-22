package com.ssafy.cocktail.backend.cocktails.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.cocktails.dto.IngredientSearch;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Setter
@ToString
@Schema(defaultValue = "IngredientSearchResponse")
public class IngredientSearchRes extends BaseResponseBody {
    @Schema(name="재료 리스트", example = "재료 id, 재료 이름")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<IngredientSearch> data = new ArrayList<>();

    public static IngredientSearchRes of(Integer statusCode, String message, ArrayList<IngredientSearch> data) {
        IngredientSearchRes res = new IngredientSearchRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(data);

        return res;
    }
}
