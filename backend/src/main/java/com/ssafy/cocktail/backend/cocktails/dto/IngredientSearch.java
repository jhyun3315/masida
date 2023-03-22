package com.ssafy.cocktail.backend.cocktails.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IngredientSearch {
    private Long ingredient_id;
    private String ingredient_name;
    private boolean ingredient_add;

    public IngredientSearch(Long ingredient_id, String ingredient_name) {
        this.ingredient_id = ingredient_id;
        this.ingredient_name = ingredient_name;
        this.ingredient_add = false;
    }
}
