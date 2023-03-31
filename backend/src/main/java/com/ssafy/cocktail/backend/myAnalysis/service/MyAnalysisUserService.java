package com.ssafy.cocktail.backend.myAnalysis.service;

import com.ssafy.cocktail.backend.myAnalysis.dto.*;

import java.util.ArrayList;

public interface MyAnalysisUserService {
    ArrayList<MyAnalysisBase> getAnalysisByBase(String accessToken);
    ArrayList<MyAnalysisColor> getAnalysisByColor(String accessToken);
    ArrayList<MyAnalysisIngredient> getAnalysisByIngredient(String accessToken);
    ArrayList<MyAnalysisOthers> getAnalysisByOthers(String accessToken);
    RatingBase getAnalysisByRatingBase(String accessToken);
    RatingColor getAnalysisByRatingColor(String accessToken);
}
