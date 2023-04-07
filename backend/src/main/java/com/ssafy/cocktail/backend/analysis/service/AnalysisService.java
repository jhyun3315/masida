package com.ssafy.cocktail.backend.analysis.service;

import com.ssafy.cocktail.backend.analysis.dto.WordCloudDetail;

import java.util.ArrayList;

public interface AnalysisService {
    public ArrayList<WordCloudDetail> getWordCloudData();
}
