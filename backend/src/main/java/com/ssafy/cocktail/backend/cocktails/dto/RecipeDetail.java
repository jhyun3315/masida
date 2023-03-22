package com.ssafy.cocktail.backend.cocktails.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class RecipeDetail {
    @Schema(description = "제조법 순서", example = "1")
    private int recipe_num;
    @Schema(description = "제조법 내용", example = "모두 넣고 섞으세요")
    private String recipe_content;
}
