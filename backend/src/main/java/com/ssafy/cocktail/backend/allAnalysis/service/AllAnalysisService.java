package com.ssafy.cocktail.backend.allAnalysis.service;

import com.ssafy.cocktail.backend.allAnalysis.dto.WordCloudDetail;

import java.util.ArrayList;

public interface AllAnalysisService {
    public ArrayList<WordCloudDetail> getWordCloudData();
}
