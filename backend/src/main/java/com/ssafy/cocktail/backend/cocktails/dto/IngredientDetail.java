package com.ssafy.cocktail.backend.cocktails.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class IngredientDetail {
    @Schema(description = "재료 이름", example = "레몬위스키")
    private String ingredient_name;
    @Schema(description = "재료 양", example = "10")
    private String ingredient_amount;
    @Schema(description = "재료 단위", example = "oz")
    private String ingredient_unit;
}
