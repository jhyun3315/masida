package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myAnalysis.dto.TestRecommend;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
public class TestRecommendRes extends BaseResponseBody {
    @Schema(name="테스트 칵테일 데이터 9개", example = "id, 한글이름, 이미지")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<TestRecommend> data;

    public static TestRecommendRes of(Integer statusCode, String message, ArrayList<TestRecommend> testRecommends) {
        TestRecommendRes res = new TestRecommendRes();

        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(testRecommends);

        return res;
    }

}
