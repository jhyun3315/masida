package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

public class MyAnalysisColor {
    @Schema(description = "색상 이름", example = "빨간색")
    @JsonProperty("color_name")
    private String ColorName;

    @Schema(description = "색상 rgb", example = "2")
    @JsonProperty("color_rgb")
    private String ColorRGB;

    @Schema(description = "색상 분포도", example = "15")
    @JsonProperty("color_ratio")
    private int ColorRatio;

    @Schema(description = "색상 개수", example = "2")
    @JsonProperty("color_count")
    private int ColorCount;

    @Builder
    public MyAnalysisColor(String ColorName, String ColorRGB, int ColorCount, int ColorRatio) {
        this.ColorName = ColorName;
        this.ColorRGB = ColorRGB;
        this.ColorCount = ColorCount;
        this.ColorRatio = ColorRatio;
    }
}
