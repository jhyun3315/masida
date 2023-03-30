package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisIngredient;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisOthers;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
@Schema(defaultValue = "MyAnalysisOthersResponse")
public class MyAnalysisOthersRes extends BaseResponseBody {
    @Schema(name="마이페이지 상세보기 비슷한 사용자 분석 정보", example = "마이페이지 상세보기 비슷한 사용자 분석 정보")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<MyAnalysisOthers> data;

    public static MyAnalysisOthersRes of(Integer statusCode, String message, ArrayList<MyAnalysisOthers> myAnalysisOthersResArrayList) {
        MyAnalysisOthersRes res = new MyAnalysisOthersRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(myAnalysisOthersResArrayList);
        return res;
    }

}
