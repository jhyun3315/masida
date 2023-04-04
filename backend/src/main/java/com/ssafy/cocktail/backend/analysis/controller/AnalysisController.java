package com.ssafy.cocktail.backend.analysis.controller;

import com.ssafy.cocktail.backend.analysis.dto.WordCloudDetail;
import com.ssafy.cocktail.backend.analysis.dto.response.WordCloudRes;
import com.ssafy.cocktail.backend.analysis.service.AnalysisService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@Tag(name = "Analysis", description = "전체 분석 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("/api/analysis")
public class AnalysisController {
    private AnalysisService analysisService;
    @GetMapping("/world-cloud")
    public ResponseEntity<WordCloudRes> wordCloudData() {
        ArrayList<WordCloudDetail> wordCloudDetails = analysisService.getWordCloudData();

        return ResponseEntity.status(200).body(WordCloudRes.of(200, "Success", wordCloudDetails));
    }
}
