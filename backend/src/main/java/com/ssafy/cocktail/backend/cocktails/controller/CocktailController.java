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
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("/api/cocktails")
public class CocktailController {
    private CocktailSearchService cocktailSearchService;
    private CocktailDetailService cocktailDetailService;
    private CocktailRecommendService cocktailRecommendService;
    private static final String success = "Success";

    @GetMapping("/search")
    public ResponseEntity<CocktailSearchRes> cocktailSearch(@RequestParam Map<String, Object> params) {
        // 칵테일 검색
        SearchInfo searchInfo = new SearchInfo(); // 검색어 정보
        if (params.get("page") != null) searchInfo.setPage((String) params.get("page")); // 검색어: 페이지 번호
        if (params.get("sort_num") != null) searchInfo.setSortNum((String) params.get("sort_num")); // 검색어: 정렬 기준
        if (params.get("cocktail_name") != null) searchInfo.setCocktailName((String) params.get("cocktail_name")); // 검색어: 칵테일 이름
        if (params.get("cocktail_base") != null) searchInfo.setCocktailBase((String) params.get("cocktail_base")); // 검색어: 칵테일 베이스
        if (params.get("cocktail_color") != null) searchInfo.setCocktailColor((String) params.get("cocktail_color")); // 검색어: 칵테일 색상
        if (params.get("cocktail_difficulty") != null) searchInfo.setCocktailDifficulty((String) params.get("cocktail_difficulty")); // 검색어: 칵테일 난이도
        if (params.get("cocktail_ingredient") != null) searchInfo.setCocktailIngredient((String) params.get("cocktail_ingredient")); // 검색어: 칵테일 재료

        ArrayList<CocktailSearchDetail> results = cocktailSearchService.getCocktailSearchList(searchInfo); // 칵테일 검색
        int nextPage = Integer.parseInt((String) params.get("page")) + 1; // 다음 페이지 번호
        boolean isEnd = results.size() != 15; // 마지막 페이지 여부
        int max = cocktailSearchService.getMax(); // 총 검색 결과 수 가져오기

        if (results.size() == 0) // 검색 결과가 없으면
            return ResponseEntity.status(404).body(CocktailSearchRes.of(404, "Cocktail Not Found", results, 0, true, 0));

        return ResponseEntity.status(200).body(CocktailSearchRes.of(200, success, results, nextPage, isEnd, max));
    }

    @GetMapping("/ingredients")
    public ResponseEntity<IngredientSearchRes> cocktailIngredients() {
        // 칵테일 재료 목록
        ArrayList<IngredientSearch> ingredientSearchList = cocktailSearchService.getIngredientSearchList();
        for (IngredientSearch ingredientSearch: ingredientSearchList) {
            System.out.println(ingredientSearch.toString());
        }
        return ResponseEntity.status(200).body(IngredientSearchRes.of(200, success, ingredientSearchList));
    }

    @GetMapping("/{cocktail_id}")
    public ResponseEntity<CocktailDetailRes> cocktailDetails(@PathVariable("cocktail_id") String id, @RequestHeader Map<String, String> data) {
        // 칵테일 상세 조회
        String accessToken = data.get("authorization"); // 엑세스 토큰 가져오기
        CocktailDetail cocktailDetail = cocktailDetailService.getCocktailDetail(id, accessToken); // 칵테일 상세 정보 가져오기

        return ResponseEntity.status(200).body(CocktailDetailRes.of(200, success, cocktailDetail));
    }

    @GetMapping("/likes-top")
    public ResponseEntity<CocktailMainLikesRes> cocktailMainLikesTopTen() {
        // 칵테일 좋아요 상위 10개
        ArrayList<CocktailMain> cocktailMains = cocktailSearchService.getCocktailMainList(); // 상위 10개 좋아요 칵테일 가져오기
         if (cocktailMains.size() > 0) { // 칵테일을 찾았다면
             return ResponseEntity.status(200).body(CocktailMainLikesRes.of(200, success, cocktailMains));
         }
        return ResponseEntity.status(404).body(CocktailMainLikesRes.of(404, "Fail", null));

    }

    @GetMapping("/random")
    public ResponseEntity<CocktailMainRandomRes> cocktailMainRandomOne() {
        // 칵테일 랜덤 1개
        CocktailMain cocktailMain = cocktailSearchService.getCocktailRandomOne(); // 칵테일 랜덤으로 1개 가져오기
        if (cocktailMain != null) { // 칵테일이 있다면
            return ResponseEntity.status(200).body(CocktailMainRandomRes.of(200, success, cocktailMain));
        }
        return ResponseEntity.status(404).body(CocktailMainRandomRes.of(404, "Fail", null));
    }

    @PostMapping("/likes")
    public ResponseEntity<BaseResponseBody> cocktailLikes(@RequestHeader("Authorization") String accessToken, @RequestBody CocktailIDReq req) {
        // 칵테일 좋아요 요청
        cocktailDetailService.setCocktailLike(req.getCocktailId(), accessToken); // 칵테일 좋아요 체크 혹은 해제

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, success));
    }

    @PostMapping("/bookmarks")
    @CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
    public ResponseEntity<BaseResponseBody> cocktailBookmarks(@RequestHeader("Authorization") String accessToken, @RequestBody CocktailIDReq req) {
        // 칵테일 북마크 요청
        cocktailDetailService.setCocktailBookMark(req.getCocktailId(), accessToken); // 칵테일 북마크 체크 혹은 해제

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, success));
    }

    @GetMapping("/recommend/ingredient/{cocktail_id}")
    public ResponseEntity<CocktailRecommendRes> cocktailRecommendIngerdient(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId) {
        // 재료 기반 컨텐츠 베이스 알고리즘을 활용한 비슷한 칵테일 상위 6개
        ArrayList<CocktailRecommendDetail> recommends = cocktailRecommendService.getRecommendCocktails(0, cocktailId, accessToken); // 유사한 칵테일 6개 가져오기

        return ResponseEntity.status(200).body(CocktailRecommendRes.of(200, success, recommends));
    }

    @GetMapping("/recommend/color/{cocktail_id}")
    public ResponseEntity<CocktailRecommendRes> cocktailRecommendColor(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId) {
        // 색상 기반 컨텐츠 베이스 알고리즘을 활용한 비슷한 칵테일 상위 6개
        ArrayList<CocktailRecommendDetail> recommends = cocktailRecommendService.getRecommendCocktails(1, cocktailId, accessToken); // 유사한 칵테일 6개 가져오기

        return ResponseEntity.status(200).body(CocktailRecommendRes.of(200, success, recommends));
    }
}
