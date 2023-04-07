package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisColor;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;
@Setter
@Schema(defaultValue = "MyAnalysisColorResponse")
public class MyAnalysisColorRes extends BaseResponseBody {
    @Schema(name="마이페이지 상세보기 베이스 분석 정보", example = "마이페이지 상세보기 베이스 분석 정보")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<MyAnalysisColor> data;

    public static MyAnalysisColorRes of(Integer statusCode, String message, ArrayList<MyAnalysisColor> myAnalysisColorArrayList) {
        MyAnalysisColorRes res = new MyAnalysisColorRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(myAnalysisColorArrayList);
        return res;
    }
}
