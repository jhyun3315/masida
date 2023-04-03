package com.ssafy.cocktail.backend.myAnalysis.controller;

import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.myAnalysis.dto.*;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.*;
import com.ssafy.cocktail.backend.myAnalysis.service.CollaborativeRecommendService;
import com.ssafy.cocktail.backend.myAnalysis.service.MyAnalysisUserService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@Tag(name = "my-analysis", description = "마이페이지 상세 API")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("api/my-analysis")
public class MyAnalysisController {
    private final MyAnalysisUserService myAnalysisUserService;
    private final OAuthService oAuthService;
    private final CollaborativeRecommendService collaborativeRecommend;

    @GetMapping("/recommend/base")
    public ResponseEntity<TestRecommendRes> testBase(@RequestHeader("Authorization") String accessToken) {
        ArrayList<TestRecommend> recommends = myAnalysisUserService.getRecommendTest(accessToken, "1");
        return ResponseEntity.status(200).body(TestRecommendRes.of(200, "Success", recommends));
    }

    @GetMapping("/recommend/ingredient")
    public ResponseEntity<TestRecommendRes> testIngredient(@RequestHeader("Authorization") String accessToken) {
        ArrayList<TestRecommend> recommends = myAnalysisUserService.getRecommendTest(accessToken, "2");
        return ResponseEntity.status(200).body(TestRecommendRes.of(200, "Success", recommends));
    }

    @GetMapping("/recommend/color")
    public ResponseEntity<TestRecommendRes> testColor(@RequestHeader("Authorization") String accessToken) {
        ArrayList<TestRecommend> recommends = myAnalysisUserService.getRecommendTest(accessToken, "3");
        return ResponseEntity.status(200).body(TestRecommendRes.of(200, "Success", recommends));
    }

    @GetMapping("/recommend/age-gender")
    public ResponseEntity<TestRecommendRes> testAgeGender(@RequestHeader("Authorization") String accessToken) {
        ArrayList<TestRecommend> recommends = myAnalysisUserService.getRecommendTest(accessToken, "4");
        return ResponseEntity.status(200).body(TestRecommendRes.of(200, "Success", recommends));
    }
    @GetMapping("/cocktail-base")
    public ResponseEntity<MyAnalysisBaseRes> analysisByUserBase(@RequestHeader Map<String, String> data ) {
        String accessToken = data.get("authorization");

        if(accessToken !=null){
            ArrayList<MyAnalysisBase> myAnalysisBaseList = myAnalysisUserService.getAnalysisByBase(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisBaseRes.of(200, "Success", myAnalysisBaseList));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisBaseRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
        }
    }

    @GetMapping("/cocktail-color")
    public ResponseEntity<MyAnalysisColorRes> analysisByUserColor(@RequestHeader Map<String, String> data ) {
        String accessToken = data.get("authorization");

        if(accessToken !=null){
            ArrayList<MyAnalysisColor> myAnalysisColorList = myAnalysisUserService.getAnalysisByColor(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisColorRes.of(200, "Success", myAnalysisColorList));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisColorRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
        }
    }

    @GetMapping("/cocktail-ingredient")
    public ResponseEntity<MyAnalysisIngredientRes> analysisByUserIngredient(@RequestHeader Map<String, String> data) {
        String accessToken = data.get("authorization");

        if(accessToken !=null){
            ArrayList<MyAnalysisIngredient> myAnalysisIngredientsList = myAnalysisUserService.getAnalysisByIngredient(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisIngredientRes.of(200, "Success", myAnalysisIngredientsList));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisIngredientRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
        }
    }

    @GetMapping("/cocktail-age-gender")
    public ResponseEntity<MyAnalysisOthersRes> MyAnalysisByUserIngredient(@RequestHeader Map<String, String> data) {
        String accessToken = data.get("authorization");

        if(accessToken !=null){
            ArrayList<MyAnalysisOthers> myAnalysisOthersList = myAnalysisUserService.getAnalysisByOthers(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisOthersRes.of(200, "Success", myAnalysisOthersList));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisOthersRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
        }
    }

    @GetMapping("/base-rating")
    public ResponseEntity<MyAnalysisRatingBaseRes> MyAnalysisByRatingBase(@RequestHeader Map<String, String> data) {
        String accessToken = data.get("authorization");

        if(accessToken !=null){
            RatingBase ratingBase = myAnalysisUserService.getAnalysisByRatingBase(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisRatingBaseRes.of(200, "Success",
                    ratingBase.getRating_average(),
                    ratingBase.getRating_count(),
                    ratingBase.getRating_max(),
                    ratingBase.getRating_max_base(),
                    ratingBase.getData()));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisRatingBaseRes.of(400, "존재하지 않는 사용자입니다.",
                    0,0,0,null, null));
        }
    }

    @GetMapping("/color-rating")
    public ResponseEntity<MyAnalysisRatingColorRes> MyAnalysisByRatingColor(@RequestHeader Map<String, String> data) {
        String accessToken = data.get("authorization");

        if(accessToken !=null){
            RatingColor ratingColor = myAnalysisUserService.getAnalysisByRatingColor(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisRatingColorRes.of(200, "Success",
                    ratingColor.getRating_average(),
                    ratingColor.getRating_count(),
                    ratingColor.getRating_max(),
                    ratingColor.getRating_max_color(),
                    ratingColor.getData()));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisRatingColorRes.of(400, "존재하지 않는 사용자입니다.",
                    0,0,0,null, null));
        }
    }

//    @GetMapping("/recommend/ingredient")
//    public ResponseEntity<?> getRecommendByIngredient(@RequestHeader Map<String, String> data) {
//        String accessToken = data.get("authorization");
//
//        if(accessToken == null) { // 토큰이 없는 경우,
//            return null;
//        }
//
//        try { // 토큰이 유효한 경우,
//            User user = oAuthService.getUser(accessToken); // 해당 사용자 가져오기
//            collaborativeRecommend.recommendCocktailByIngredient(user.getId());
//            return null;
//        }
//        catch (Exception e) { // 토큰이 유효하지 않은 경우
//            return null;
//        }
//    }

//    @GetMapping("/recommend/base")
//    public ResponseEntity<?> getRecommendByBase(@RequestHeader Map<String, String> data) {
//        String accessToken = data.get("authorization");
//
//        if(accessToken == null) { // 토큰이 없는 경우,
//            return null;
//        }
//
//        try { // 토큰이 유효한 경우,
//            User user = oAuthService.getUser(accessToken); // 해당 사용자 가져오기
//            collaborativeRecommend.recommendCocktailByBase(user.getId());
//            return null;
//        }
//        catch (Exception e) { // 토큰이 유효하지 않은 경우
//            return null;
//        }
//    }

}