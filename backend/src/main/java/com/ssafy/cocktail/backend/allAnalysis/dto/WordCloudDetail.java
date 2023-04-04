package com.ssafy.cocktail.backend.allAnalysis.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;
import lombok.ToString;

@Setter
@ToString
public class WordCloudDetail {
    @Schema(description = "재료 이름", example = "진")
    private String name;

    @Schema(description = "재료 개수", example = "100")
    private Integer value;
}
