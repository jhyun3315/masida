package com.ssafy.cocktail.backend.myAnalysis.controller;

import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBase;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisColor;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisIngredient;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisOthers;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.MyAnalysisBaseRes;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.MyAnalysisColorRes;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.MyAnalysisIngredientRes;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.MyAnalysisOthersRes;
import com.ssafy.cocktail.backend.myAnalysis.service.MyAnalysisUserService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
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

    @GetMapping("/cocktail-base")
    public ResponseEntity<MyAnalysisBaseRes> analysisByUserBase(@RequestHeader Map<String, String> data ) {
        String accessToken = data.get("authorization");
        System.out.println(data.get("authorization"));

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
        System.out.println(data.get("authorization"));

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
        System.out.println(data.get("authorization"));

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
        System.out.println(data.get("authorization"));

        if(accessToken !=null){
            ArrayList<MyAnalysisOthers> myAnalysisOthersList = myAnalysisUserService.getAnalysisByOthers(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisOthersRes.of(200, "Success", myAnalysisOthersList));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisOthersRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
        }
    }
}