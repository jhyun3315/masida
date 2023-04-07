package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MyAnalysisBase {
    @Schema(description = "베이스 이름", example = "럼")
    @JsonProperty("base_name")
    private String baseName;

    @Schema(description = "베이스 개수", example = "3")
    @JsonProperty("base_count")
    private int baseCount;

    @Schema(description = "베이스 비율", example = "15")
    @JsonProperty("base_ratio")
    private int baseRatio;

    @Builder
    public MyAnalysisBase(String baseName, int baseCount, int baseRatio) {
        this.baseName = baseName;
        this.baseCount = baseCount;
        this.baseRatio = baseRatio;
    }
}