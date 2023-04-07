package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

@Setter
@Schema(defaultValue = "MyAnalysisRatingColorResponse")
public class MyAnalysisRatingColorRes extends BaseResponseBody {
    @Schema(name="별점 평균", example = "2.5")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    double rating_average;

    @Schema(name="별점 개수", example = "11")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    int rating_count;

    @Schema(name="최대 별점", example = "5")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    int rating_max;

    @Schema(name="최대 별점 색상", example = "red")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    String rating_max_color;

    @Schema(name="펼점별 색상의 개수 분포", example = "HashMap<String,Integer>")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    Object data;

    public static MyAnalysisRatingColorRes of(Integer statusCode, String message, double rating_average, int rating_count, int rating_max, String rating_max_color, Object data) {
        MyAnalysisRatingColorRes res = new MyAnalysisRatingColorRes();

        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setRating_average(rating_average);
        res.setRating_count(rating_count);
        res.setRating_max(rating_max);
        res.setRating_max_color(rating_max_color);
        res.setData(data);

        return res;
    }
}
