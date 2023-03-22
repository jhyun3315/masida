package com.ssafy.cocktail.backend.cocktails.dto;

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
    private Long ingredient_id;
    @Schema(description = "재료 이름", example = "럼")
    private String ingredient_name;
    @Schema(description = "재료 추가", example = "false")
    private boolean ingredient_add;

    public IngredientSearch(Long ingredient_id, String ingredient_name) {
        this.ingredient_id = ingredient_id;
        this.ingredient_name = ingredient_name;
        this.ingredient_add = false;
    }
}
