package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IngredientSearch {
    @Schema(description = "재료 id", example = "0")
    @JsonProperty("ingredient_id")
    private Long ingredientId;

    @Schema(description = "재료 이름", example = "럼")
    @JsonProperty("ingredient_name")
    private String ingredientName;

    @Schema(description = "재료 추가", example = "false")
    @JsonProperty("ingredient_add")
    private boolean ingredientAdd;

    public IngredientSearch(Long ingredientId, String ingredientName) {
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
        this.ingredientAdd = false;
    }
}
