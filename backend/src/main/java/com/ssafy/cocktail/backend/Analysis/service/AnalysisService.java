package com.ssafy.cocktail.backend.Analysis.service;

import com.ssafy.cocktail.backend.Analysis.dto.WordCloudDetail;

import java.util.ArrayList;

public interface AnalysisService {
    public ArrayList<WordCloudDetail> getWordCloudData();
}
