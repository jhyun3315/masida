package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisIngredient;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
@Schema(defaultValue = "MyAnalysisIngredientResponse")
public class MyAnalysisIngredientRes extends BaseResponseBody {
    @Schema(name="마이페이지 상세보기 재료 분석 정보", example = "마이페이지 상세보기 재료 분석 정보")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<MyAnalysisIngredient> data;

    public static MyAnalysisIngredientRes of(Integer statusCode, String message, ArrayList<MyAnalysisIngredient> myAnalysisIngredientArrayListArrayList) {
        MyAnalysisIngredientRes res = new MyAnalysisIngredientRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(myAnalysisIngredientArrayListArrayList);
        return res;
    }
}
