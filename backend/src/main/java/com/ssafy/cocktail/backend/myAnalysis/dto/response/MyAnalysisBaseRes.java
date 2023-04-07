package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
@Schema(defaultValue = "MyAnalysisBaseResponse")
public class MyAnalysisBaseRes extends BaseResponseBody {
    @Schema(name="마이페이지 상세보기 베이스 분석 정보", example = "마이페이지 상세보기 베이스 분석 정보")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<MyAnalysisBase> data;

    public static MyAnalysisBaseRes of(Integer statusCode, String message, ArrayList<MyAnalysisBase> myAnalysisBaseArrayList) {
        MyAnalysisBaseRes res = new MyAnalysisBaseRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(myAnalysisBaseArrayList);
        return res;
    }
}
