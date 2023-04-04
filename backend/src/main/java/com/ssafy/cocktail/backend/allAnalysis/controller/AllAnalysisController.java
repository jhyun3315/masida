package com.ssafy.cocktail.backend.allAnalysis.controller;

import com.ssafy.cocktail.backend.allAnalysis.dto.WordCloudDetail;
import com.ssafy.cocktail.backend.allAnalysis.dto.response.WordCloudRes;
import com.ssafy.cocktail.backend.allAnalysis.service.AllAnalysisService;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailDetail;
import com.ssafy.cocktail.backend.domain.repository.CocktailIngredientRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@Tag(name = "allAnalysis", description = "전체 분석 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("/api/all-analysis")
public class AllAnalysisController {
    private AllAnalysisService allAnalysisService;
    @GetMapping("/world-cloud")
    public ResponseEntity<WordCloudRes> wordCloud() {
        ArrayList<WordCloudDetail> cocktailDetails = allAnalysisService.getWordCloudData();

        return ResponseEntity.status(200).body(WordCloudRes.of(200, "Success", cocktailDetails));
    }
}
