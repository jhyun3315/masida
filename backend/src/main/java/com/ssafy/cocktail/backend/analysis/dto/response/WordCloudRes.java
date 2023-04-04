package com.ssafy.cocktail.backend.analysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.analysis.dto.WordCloudDetail;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
@Schema(defaultValue = "WordCloudResponse")
public class WordCloudRes extends BaseResponseBody {
    @Schema(name="워드 클라우드 데이터", example = "이름, 개수")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<WordCloudDetail> data;

    public static WordCloudRes of(Integer statusCode, String message, ArrayList<WordCloudDetail> wordCloudDetails) {
        WordCloudRes res = new WordCloudRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(wordCloudDetails);

        return res;
    }
}
