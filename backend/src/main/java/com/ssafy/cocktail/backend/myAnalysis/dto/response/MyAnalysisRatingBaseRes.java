package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

@Setter
@Schema(defaultValue = "MyAnalysisRatingBaseResponse")
public class MyAnalysisRatingBaseRes  extends BaseResponseBody {
    @Schema(name="마이페이지 상세보기 비슷한 사용자 분석 정보", example = "마이페이지 상세보기 비슷한 사용자 분석 정보")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    double rating_average;
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    int rating_count;
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    int rating_max;
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    String rating_max_base;
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    Object data;

    public static MyAnalysisRatingBaseRes of(Integer statusCode, String message, double rating_average, int rating_count, int rating_max, String rating_max_base, Object data) {
        MyAnalysisRatingBaseRes res = new MyAnalysisRatingBaseRes();

        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setRating_average(rating_average);
        res.setRating_count(rating_count);
        res.setRating_max(rating_max);
        res.setRating_max_base(rating_max_base);
        res.setData(data);

        return res;
    }
}
