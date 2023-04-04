package com.ssafy.cocktail.backend.allAnalysis.controller;

import com.ssafy.cocktail.backend.domain.repository.CocktailIngredientRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "allAnalysis", description = "전체 분석 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
@RequestMapping("/api/all-analysis")
public class AllAnalysisController {

}
