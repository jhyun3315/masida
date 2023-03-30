package com.ssafy.cocktail.backend.myAnalysis.service;

import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBase;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisColor;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisIngredient;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisOthers;

import java.util.ArrayList;

public interface MyAnalysisUserService {
    ArrayList<MyAnalysisBase> getAnalysisByBase(String accessToken);
    ArrayList<MyAnalysisColor> getAnalysisByColor(String accessToken);
    ArrayList<MyAnalysisIngredient> getAnalysisByIngredient(String accessToken);
    ArrayList<MyAnalysisOthers> getAnalysisByOthers(String accessToken);
}
