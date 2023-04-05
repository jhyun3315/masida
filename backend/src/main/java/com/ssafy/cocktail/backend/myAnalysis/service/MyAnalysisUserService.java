package com.ssafy.cocktail.backend.myAnalysis.service;

import com.ssafy.cocktail.backend.myAnalysis.dto.*;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.MyAnalysisBaseRes;

import java.util.ArrayList;

public interface MyAnalysisUserService {
    ArrayList<MyAnalysisBase> getAnalysisByBase(String accessToken);
    ArrayList<MyAnalysisColor> getAnalysisByColor(String accessToken);
    ArrayList<MyAnalysisIngredient> getAnalysisByIngredient(String accessToken);
    ArrayList<MyAnalysisOthers> getAnalysisByOthers(String accessToken);
    RatingBase getAnalysisByRatingBase(String accessToken);
    RatingColor getAnalysisByRatingColor(String accessToken);
    RatingIngredient getAnalysisByRatingIngredient(String accessToken);
    ArrayList<TestRecommend> getRecommendTest(String accessToken, String num);

    ArrayList<MyAnalysisRecommend> getRecommendByColor(String accessToken);

}
