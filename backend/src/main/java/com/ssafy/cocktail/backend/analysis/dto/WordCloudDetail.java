package com.ssafy.cocktail.backend.analysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;
import lombok.ToString;

@Setter
@ToString
public class WordCloudDetail {
    @Schema(description = "재료 이름", example = "진")
    @JsonProperty("text")
    private String text;

    @Schema(description = "재료 개수", example = "100")
    @JsonProperty("value")
    private Integer value;
}
