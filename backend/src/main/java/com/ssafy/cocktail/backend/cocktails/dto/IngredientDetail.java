package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class IngredientDetail {
    @Schema(description = "재료 이름", example = "레몬위스키")
    @JsonProperty("ingredient_name")
    private String ingredientName;

    @Schema(description = "재료 양", example = "10")
    @JsonProperty("ingredient_amount")
    private String ingredientAmount;

    @Schema(description = "재료 단위", example = "oz")
    @JsonProperty("ingredient_unit")
    private String ingredientUnit;
}
