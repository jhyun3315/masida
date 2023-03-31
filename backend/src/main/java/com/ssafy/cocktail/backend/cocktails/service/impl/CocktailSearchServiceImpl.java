package com.ssafy.cocktail.backend.cocktails.service.impl;


import com.ssafy.cocktail.backend.cocktails.dto.*;
import com.ssafy.cocktail.backend.cocktails.service.CocktailSearchService;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.CocktailIngredient;
import com.ssafy.cocktail.backend.domain.entity.Ingredient;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.repository.CocktailIngredientRepository;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.IngredientRepository;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
@AllArgsConstructor
public class CocktailSearchServiceImpl implements CocktailSearchService {

    private IngredientRepository ingredientRepository;
    private CocktailRepository cocktailRepository;
    private CocktailIngredientRepository cocktailIngredientRepository;
    private LikeRepository likeRepository;

    static int max; // 칵테일 총 검색 결과 총 개수

    @Override
    public ArrayList<CocktailSearchDetail> getCocktailSearchList(SearchInfo info) {
        // 칵테일 검색 결과 리턴
        max = 0; // // 칵테일 검색 결과 총 개수 초기화
        ArrayList<CocktailSearchDetail> searchList = new ArrayList<>(); // 검색 결과 칵테일
        searchList = getCocktails(info); // 칵테일 검색 결과 가져오기
        max = searchList.size(); // 칵테일 검색 결과 총 개수
        if (info.getSortNum().equals("0"))searchList.sort(Comparator.comparing(CocktailSearchDetail::getCocktailNameKo)); // 이름 오름차순 정렬
        if (info.getSortNum().equals("1"))searchList.sort(Comparator.comparing(CocktailSearchDetail::getCocktailLikes, Comparator.reverseOrder())); // 좋아요 내림차순 정렬
        if (info.getSortNum().equals("2"))searchList.sort(Comparator.comparing(CocktailSearchDetail::getCocktailRating, Comparator.reverseOrder())); // 평점 내림차순 정렬
        searchList = getPage(searchList, info.getPage()); // 페이지의 칵테일 가져오기
        return searchList;
    }

    @Override
    public int getMax() {
        return max;
    }

    private ArrayList<CocktailSearchDetail> getPage(ArrayList<CocktailSearchDetail> searchList, int page) {
        // 페이지의 칵테일들을 리턴
        ArrayList<CocktailSearchDetail> result = new ArrayList<>();
        int startNum = page * 15;
        for (int i = startNum, k = 0; k < 15; i++, k++) {
            if (i >= searchList.size()) break; // 검색 개수를 초과하면
            result.add(searchList.get(i));
        }
        return result;
    }

    private ArrayList<CocktailSearchDetail> getCocktails(SearchInfo info) {
        // 검색어에 맞는 칵테일 리턴
        ArrayList<CocktailSearchDetail> cocktailSearchDetails = new ArrayList<>(); // 검색 결과 칵테일

        List<Cocktail> cocktails = cocktailRepository.findAll(); // 모든 칵테일 가져오기
        for (Cocktail cocktail: cocktails) { // 칵테일
            // 칵테일 정보 가져오기
            String cocktailKo = cocktail.getCocktailNameKo(); // 칵테일 한글 이름
            String cocktailEn = cocktail.getCocktailNameEn(); // 칵테일 영어 이름
            String cocktailEnUpper = cocktail.getCocktailNameEn().toUpperCase(); // 칵테일 대문자 영어 이름
            String cocktailBase = cocktail.getCocktailBase(); // 칵테일 베이스
            String cocktailColor1 = cocktail.getCocktailColor1(); // 칵테일 색상1
            String cocktailColor2 = cocktail.getCocktailColor2(); // 칵테일 색상2
            String cocktaildifficulty = (int)cocktail.getCocktailDifficulty() == 1 ? "하" :
                    cocktail.getCocktailDifficulty() == 2 ? "중" : "상"; // 칵테일 난이도
            ArrayList<String> cocktailIngredients = new ArrayList<String>(); // 칵테일 재료 이름
            List<CocktailIngredient> ingredients = cocktailIngredientRepository.findByCocktail(cocktail); // 칵테일 재료들
            for (CocktailIngredient ingredient: ingredients) { // 칵테일 재료
                cocktailIngredients.add(ingredient.getIngredientName()); // 칵테일 재료 삽입
            }

            // 칵테일 검색
            if (info.getCocktailName() != null) { // 조건 1: 이름 검색이 있으면
                if (!cocktailKo.contains(info.getCocktailName()) // 조건 1-1: 검색어가 한글 이름에 포함되는가
                        && !cocktailEnUpper.contains(info.getCocktailName().toUpperCase())) // 조건 1-2: 검색어가 영어 이름에 포함되는가
                    continue; // 검색한 이름이 한글 이름 또는 영어 이름에 포함되지 않으면 (x)
            }
            if (info.getCocktailBase() != null) { // 조건 2: 베이스 검색이 있으면
                if (!cocktailBase.equals(info.getCocktailBase())) // 조건 2-1: 검색어와 베이스가 일치하는가
                    continue; // 일치한 베이스가 없으면 (x)
            }
            if (info.getCocktailColor() != null && info.getCocktailColor().size() > 0) { // 조건 3: 색상 검색이 있으면
                boolean found = false; // 동일한 색상이 없으면 false
                for (String color: info.getCocktailColor()) { // 검색 색상 (최대 2개)
                    if (cocktailColor1.equals(color) || cocktailColor2.equals(color)) { // 조건 3-1: 색상 1또는 색상 2가 동일한 색상인가
                        found = true; // 동일한 색상 발견 true
                        break;
                    }
                }
                if (!found) continue; // 동일한 색상이 없으면 (x)
            }
            if (info.getCocktailDifficulty() != null && info.getCocktailDifficulty().size() > 0) { // 조건 4: 난이도 검색이 있으면
                boolean found = false; // 동일한 난이도가 없으면 false
                for (String difficulty: info.getCocktailDifficulty()) { // 검색 난이도 (최대 3개)
                    if (cocktaildifficulty.equals(difficulty)) { // 난이도가 동일하면
                        found = true; // 동알한 난이도 발견 true
                        break;
                    }
                }
                if (!found) continue; // 동일한 난이도가 없으면 (x)
            }
            if (info.getCocktailIngredient() != null && info.getCocktailIngredient().size() > 0) { // 조건 5: 재료 검색이 있으면
                boolean found = false; // 조건 5-1: 하나라도 일치한 재료가 없으면 false
                for (Long ingredientId: info.getCocktailIngredient()) { // 검색 재료 (최대 n개)
                    String searchIngredient = ingredientRepository.findById(ingredientId).get().getIngredientName(); // 검색어의 이름
                    found = false; // 일치한 재료 탐색 초기화
                    for (String cocktailIngredient: cocktailIngredients) { // 칵테일 재료 (최대 n개)
                        if (cocktailIngredient.contains(searchIngredient)) { // 검색 재료를 포함하면
                            found = true; // 재료 일치 체크
                            break;
                        }
                    }
                    if (!found) break; // 일치한 재료가 없으면
                }
                if (!found) continue; // 일치한 재료가 없으면
            }

            CocktailSearchDetail cand = new CocktailSearchDetail();
            cand.setCocktailId(cocktail.getId()); // 칵테일 id 삽입
            cand.setCocktailNameKo(cocktailKo); // 칵테일 한글 이름 삽입
            cand.setCocktailNameEn(cocktailEn); // 칵테일 영어 이름 삽입
            cand.setCocktailImg(cocktail.getCocktailImg()); // 칵테일 이미지 삽입
            cand.setCocktailRating(Math.round(cocktail.getCocktailRating()*10)/10.0); // 칵테일 평점 삽입
            List<Like> likes = likeRepository.findAllByCocktailAndLikeDeleted(cocktail, false); // 칵테일 좋아요 가져오기
            cand.setCocktailLikes(likes.size()); // 칵테일 좋아요 개수 삽입
            cand.setCocktailDifficulty(cocktaildifficulty); // 칵테일 난이도 삽입
            cocktailSearchDetails.add(cand); // 검색 결과 칵테일 추가
        }

        return cocktailSearchDetails;
    }

    @Override
    public ArrayList<IngredientSearch> getIngredientSearchList() {
        // 재료 검색에 필요한 모든 재료 리스트 반환
        List<Ingredient> ingredients = ingredientRepository.findAll(); // 모든 재료 목록 가져오기
        ArrayList<IngredientSearch> ingredientSearchList  = new ArrayList<>(); // 모든 재료 리스트
        for (Ingredient ingredient: ingredients) { // 재료
            ingredientSearchList.add(new IngredientSearch(ingredient.getId(), ingredient.getIngredientName())); // 칵테일 재료 리스트에 추가
        }
        return ingredientSearchList;
    }

    @Override
    public ArrayList<CocktailMain> getCocktailMainList() {
        // 칵테일을 좋아요 개수 최대 상위 10개 리턴
        ArrayList<CocktailMain> cocktailMains = new ArrayList<>(); // 좋아요 칵테일 정보
        List<CocktailLikesInterface> cocktailLikesInterfaces = cocktailRepository.findCocktailByLikes(); // 좋아요 개수로 내림차순 정렬하여 칵테일 가져오기
        for (CocktailLikesInterface cocktail: cocktailLikesInterfaces) { // 칵테일
            if (cocktailMains.size() == 10) break; // 10개의 칵테일을 찾았으면
            if (cocktail.getCocktailRating() == null) {
                CocktailMain cocktailMain = new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), 0.0); // 좋아요 칵테일 추가
                cocktailMains.add(cocktailMain);
                continue;
            }
            cocktailMains.add(new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), Math.round(cocktail.getCocktailRating()*10)/10.0)); // 좋아요 칵테일 추가
        }
        return cocktailMains;
    }

    @Override
    public CocktailMain getCocktailRandomOne() {
        // 칵테일을 랜덤으로 1개 뽑아서 리턴
        CocktailLikesInterface cocktail = cocktailRepository.getCocktailRandomOne(); // 칵테일 랜덤으로 1개 가져오기
        if (cocktail.getCocktailRating() == null) {
            return new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), 0.0); // 랜덤 칵테일 1개 추가
        }
        return new CocktailMain(cocktail.getCocktailId(), cocktail.getCocktailNameKo(), cocktail.getCocktailNameEn(), cocktail.getCocktailImg(), Math.round(cocktail.getCocktailRating()*10)/10.0); // 랜덤 칵테일 1개 추가
    }
}
