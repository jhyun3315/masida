package com.ssafy.cocktail.backend.myAnalysis.service;

import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBase;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisColor;

import java.util.ArrayList;

public interface MyAnalysisUserService {
    ArrayList<MyAnalysisBase> getAnalysisByBase(String accessToken);
    ArrayList<MyAnalysisColor>  getAnalysisByColor(String accessToken);

}
