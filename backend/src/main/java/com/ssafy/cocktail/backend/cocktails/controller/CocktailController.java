package com.ssafy.cocktail.backend.cocktails.controller;

import com.ssafy.cocktail.backend.cocktails.dto.*;
import com.ssafy.cocktail.backend.cocktails.dto.request.CocktailIDReq;
import com.ssafy.cocktail.backend.cocktails.dto.response.*;
import com.ssafy.cocktail.backend.cocktails.service.CocktailDetailService;
import com.ssafy.cocktail.backend.cocktails.service.CocktailRecommendService;
import com.ssafy.cocktail.backend.cocktails.service.CocktailSearchService;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@Tag(name = "cocktail", description = "칵테일 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
@RequestMapping("/api/cocktails")
public class CocktailController {
    private CocktailSearchService cocktailSearchService;
    private CocktailDetailService cocktailDetailService;
    private CocktailRecommendService cocktailRecommendService;

    @GetMapping("/search")
    public ResponseEntity<CocktailSearchRes> cocktailSerch(@RequestParam Map<String, Object> params) {
//        System.out.println(params.get("sort_num"));
//        System.out.println(params.get("cocktail_name"));
//        System.out.println(params.get("cocktail_base"));
//        System.out.println(params.get("cocktail_color"));
//        System.out.println(params.get("cocktail_difficulty"));
//        System.out.println(params.get("cocktail_ingredient"));
        SearchInfo searchInfo = new SearchInfo();
        if (params.get("page") != null) searchInfo.setPage((String) params.get("page"));
        if (params.get("sort_num") != null) searchInfo.setSortNum((String) params.get("sort_num"));
        if (params.get("cocktail_name") != null) searchInfo.setCocktailName((String) params.get("cocktail_name"));
        if (params.get("cocktail_base") != null) searchInfo.setCocktailBase((String) params.get("cocktail_base"));
        if (params.get("cocktail_color") != null) searchInfo.setCocktailColor((String) params.get("cocktail_color"));
        if (params.get("cocktail_difficulty") != null) searchInfo.setCocktailDifficulty((String) params.get("cocktail_difficulty"));
        if (params.get("cocktail_ingredient") != null) searchInfo.setCocktailIngredient((String) params.get("cocktail_ingredient"));
//        System.out.println(searchInfo.toString());

        ArrayList<CocktailSearchDetail> results = cocktailSearchService.getCocktailSearchList(searchInfo); // 칵테일 검색
        int nextPage = Integer.parseInt((String) params.get("page")) + 1; // 다음 페이지 번호
        boolean isEnd = results.size() != 15; // 마지막 페이지 여부
        int max = cocktailSearchService.getMax(); // 총 검색 결과 수 가져오기
        if (results.size() == 0) return ResponseEntity.status(404).body(CocktailSearchRes.of(404, "Cocktail Not Found", results, 0, true, 0));
        return ResponseEntity.status(200).body(CocktailSearchRes.of(200, "Success", results, nextPage, isEnd, max));
    }

    @GetMapping("/ingredients")
    public ResponseEntity<IngredientSearchRes> cocktailIngredients() {
        ArrayList<IngredientSearch> ingredientSearchList = cocktailSearchService.getIngredientSearchList();
        System.out.println("--------------------------------------------------------------");
        System.out.println("ingredientSearchList 결과: ");
        for (IngredientSearch ingredientSearch: ingredientSearchList) {
            System.out.println(ingredientSearch.toString());
        }
        return ResponseEntity.status(200).body(IngredientSearchRes.of(200, "Success", ingredientSearchList));
    }

    @GetMapping("/{cocktail_id}")
    public ResponseEntity<CocktailDetailRes> cocktailDetails(@PathVariable("cocktail_id") String id, @RequestHeader Map<String, String> data) {
        System.out.println("-------------------------------------");
        System.out.println("칵테일 상세보기 요청입니다");
        System.out.println("cocktail_id: " + id);
        System.out.println("cocktail_id: " + id);
        System.out.println("authorization: " + data.get("authorization"));
        System.out.println("authorization: " + data.get("authorization"));
        String accessToken = data.get("authorization"); // 엑세스 토큰 가져오기
        CocktailDetail cocktailDetail = cocktailDetailService.getCocktailDetail(id, accessToken); // 칵테일 상세 정보 가져오기
        System.out.println("칵테일 상세보기 데이저 가져오기 완료");
        System.out.println("칵테일 상세보기 데이저 가져오기 완료");
        System.out.println(cocktailDetail.toString());
        return ResponseEntity.status(200).body(CocktailDetailRes.of(200, "Success", cocktailDetail));
    }

    @GetMapping("/likes-top")
    public ResponseEntity<CocktailMainLikesRes> cocktailMainLikesTopTen() {
        ArrayList<CocktailMain> cocktailMains = cocktailSearchService.getCocktailMainList(); // 상위 10개 좋아요 칵테일 가져오기
         if (cocktailMains.size() > 0) { // 칵테일을 찾았다면
             return ResponseEntity.status(200).body(CocktailMainLikesRes.of(200, "Success", cocktailMains));
         }
        return ResponseEntity.status(404).body(CocktailMainLikesRes.of(404, "Fail", null));

    }

    @GetMapping("/random")
    public ResponseEntity<CocktailMainRandomRes> cocktailMainRandomOne() {
        CocktailMain cocktailMain = cocktailSearchService.getCocktailRandomOne(); // 칵테일 랜덤으로 1개 가져오기
        if (cocktailMain != null) { // 칵테일이 있다면
            return ResponseEntity.status(200).body(CocktailMainRandomRes.of(200, "Success", cocktailMain));
        }
        return ResponseEntity.status(404).body(CocktailMainRandomRes.of(404, "Fail", null));
    }

    @PostMapping("/likes")
    public ResponseEntity<?> cocktailLikes(@RequestHeader("Authorization") String accessToken, @RequestBody CocktailIDReq req) {
        cocktailDetailService.setCocktailLike(req.getCocktailId(), accessToken);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }

    @PostMapping("/bookmarks")
    @CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
    public ResponseEntity<?> cocktailBookmarks(@RequestHeader("Authorization") String accessToken, @RequestBody CocktailIDReq req) {
        cocktailDetailService.setCocktailBookMark(req.getCocktailId(), accessToken);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }

    @GetMapping("/recommend/ingredient/{cocktail_id}")
    public ResponseEntity<CocktailRecommendRes> cocktailRecommendIngerdient(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId) {
        ArrayList<CocktailRecommendDetail> recommends = cocktailRecommendService.getRecommendCocktails(0, cocktailId, accessToken);
        return ResponseEntity.status(200).body(CocktailRecommendRes.of(200, "Success", recommends));
    }

    @GetMapping("/recommend/color/{cocktail_id}")
    public ResponseEntity<CocktailRecommendRes> cocktailRecommendColor(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId) {
        ArrayList<CocktailRecommendDetail> recommends = cocktailRecommendService.getRecommendCocktails(1, cocktailId, accessToken);
        return ResponseEntity.status(200).body(CocktailRecommendRes.of(200, "Success", recommends));
    }
}
