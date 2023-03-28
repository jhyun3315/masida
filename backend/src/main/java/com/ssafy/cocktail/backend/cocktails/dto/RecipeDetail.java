package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@ToString
public class RecipeDetail {
    @Schema(description = "제조법 순서", example = "1")
    @JsonProperty("recipe_num")
    private int recipeNum;

    @Schema(description = "제조법 내용", example = "모두 넣고 섞으세요")
    @JsonProperty("recipe_content")
    private String recipeContent;
}
