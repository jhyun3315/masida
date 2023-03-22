package com.ssafy.cocktail.backend.cocktails.controller;

import com.ssafy.cocktail.backend.cocktails.dto.IngredientSearch;
import com.ssafy.cocktail.backend.cocktails.dto.response.IngredientSearchRes;
import com.ssafy.cocktail.backend.cocktails.service.CocktailSearchService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@Tag(name = "cocktail", description = "칵테일 API")
@RestController
@AllArgsConstructor
@RequestMapping("api/cocktails")
public class CocktailController {
    private final CocktailSearchService cocktailSearchService;

    @GetMapping("/ingredients")
    public ResponseEntity<IngredientSearchRes> cocktailIngredients() {
        ArrayList<IngredientSearch> ingredientSearchList = cocktailSearchService.getIngredientSearchList();
        System.out.println("--------------------------------------------------------------");
        System.out.println("ingredientSearchList 결과: ");
        for (IngredientSearch ingredientSearch: ingredientSearchList) {
            System.out.println(ingredientSearch.toString());
        }
        return ResponseEntity.status(200).body(IngredientSearchRes.of(200, "Success", ingredientSearchList));
    }
}
