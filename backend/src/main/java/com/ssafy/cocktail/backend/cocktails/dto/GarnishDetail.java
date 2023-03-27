package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Setter
@Getter
@AllArgsConstructor
@ToString
public class GarnishDetail {
    @Schema(description="가니쉬 이름", example = "초콜릿")
    @JsonProperty("garnish_name")
    private String garnishName;
}
