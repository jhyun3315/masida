package com.ssafy.cocktail.backend.cocktails.controller;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailDetail;
import com.ssafy.cocktail.backend.cocktails.dto.IngredientSearch;
import com.ssafy.cocktail.backend.cocktails.dto.response.CocktailDetailRes;
import com.ssafy.cocktail.backend.cocktails.dto.response.IngredientSearchRes;
import com.ssafy.cocktail.backend.cocktails.service.CocktailDetailService;
import com.ssafy.cocktail.backend.cocktails.service.CocktailSearchService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;
import java.util.stream.DoubleStream;

@Tag(name = "cocktail", description = "칵테일 API")
@RestController
@AllArgsConstructor
@RequestMapping("api/cocktails")
public class CocktailController {
    private final CocktailSearchService cocktailSearchService;
    private final CocktailDetailService cocktailDetailService;
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

    @GetMapping("{cocktail_id}")
    public ResponseEntity<CocktailDetailRes> cocktailDetails(@PathVariable("cocktail_id") String id, @RequestHeader Map<String, String> data) {
        String accessToken = data.get("authorization"); // 엑세스 토큰 가져오기
        CocktailDetail cocktailDetail = cocktailDetailService.getCocktailDetail(id, accessToken); // 칵테일 상세 정보 가져오기
        System.out.println(cocktailDetail.toString());
        return ResponseEntity.status(200).body(CocktailDetailRes.of(200, "Success", cocktailDetail));
    }
}
