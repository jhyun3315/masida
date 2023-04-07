package com.ssafy.cocktail.backend.cocktails.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
public class CocktailIDReq {
    @Schema(defaultValue = "칵테일 ID", example = "0")
    @JsonProperty("cocktail_id")
    private Long cocktailId;
}
