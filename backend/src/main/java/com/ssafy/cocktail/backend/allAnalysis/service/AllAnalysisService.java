package com.ssafy.cocktail.backend.allAnalysis.service;

import com.ssafy.cocktail.backend.allAnalysis.dto.WordCloudDetail;

import java.util.List;

public interface AllAnalysisService {
    public List<WordCloudDetail> getWordCloudData();
}
