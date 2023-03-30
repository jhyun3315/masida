package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailRecommendDetail;
import com.ssafy.cocktail.backend.cocktails.service.CocktailRecommendService;
import com.ssafy.cocktail.backend.domain.entity.*;
import com.ssafy.cocktail.backend.domain.repository.*;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CocktailRecommendServiceImpl implements CocktailRecommendService {
    private RecommendIngredientRepository recommendIngredientRepository;
    private RecommendColorRepository recommendColorRepository;
    private CocktailRepository cocktailRepository;
    private LikeRepository likeRepository;
    private BookmarkRepository bookmarkRepository;
    private OAuthService oAuthService;

    @Override
    public ArrayList<CocktailRecommendDetail> getRecommendCocktails(int op,  String cocktailId, String accessToken) {
        // 컨텐츠 기반 추천 상위 6개 리턴
        ArrayList<CocktailRecommendDetail> results = new ArrayList<>(); // 칵테일 추천 상위 6개를 저장하는 객체
        Optional<Cocktail> cocktail = cocktailRepository.findById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        ArrayList<Cocktail> recommends = new ArrayList<>();

        if (op == 0) { // 재료 기반 추천이면
            RecommendIngredient recommendIngredient = recommendIngredientRepository.findByCocktail(cocktail.get()); // 재료 기반 추천 상위 6개 가져오기
            recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient1())); // 추천 1번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient2())); // 추천 2번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient3())); // 추천 3번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient4())); // 추천 4번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient5())); // 추천 5번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient6())); // 추천 6번 삽입
        } else { // 색상 기반 추천이면
            RecommendColor recommendColor = recommendColorRepository.findByCocktail(cocktail.get()); // 색상 기반 추천 상위 6개 가져오기
            recommends.add(cocktailRepository.findCocktailById(recommendColor.getRecommendColor1())); // 추천 1번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendColor.getRecommendColor2())); // 추천 2번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendColor.getRecommendColor3())); // 추천 3번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendColor.getRecommendColor4())); // 추천 4번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendColor.getRecommendColor5())); // 추천 5번 삽입
            recommends.add(cocktailRepository.findCocktailById(recommendColor.getRecommendColor6())); // 추천 6번 삽입
        }

        User user = oAuthService.getUser(accessToken); // 유저 가져오기
        
        for (Cocktail recommend: recommends) { // 추천 칵테일
            List<Like> likes = likeRepository.findAllByCocktailAndLikeDeleted(recommend, false); // 좋아요 가져오기
            Bookmark bookmark = bookmarkRepository.findByUserAndCocktail(user, recommend); // 북마크 가져오기
            CocktailRecommendDetail detail = new CocktailRecommendDetail();
            detail.setCocktailId(recommend.getId()); // 칵테일 id 삽입
            detail.setCocktailNameKo(recommend.getCocktailNameKo()); // 칵테일 한글 이름 삽입
            detail.setCocktailImg(recommend.getCocktailImg()); // 칵테일 이미지 삽입
            detail.setCocktailLikes(likes.size()); // 칵테일 좋아요 개수 삽입
            detail.setCocktailRating(Math.round(recommend.getCocktailRating() * 10.0) / 10.0); // 칵테일 평점 삽입
            detail.setBookmarkCheckcker(bookmark != null && !bookmark.isBookmarkDeleted()); // 칵테일 북마크 체크 여부 삽입
            results.add(detail); // 추천 칵테일 삽입
        }

        return results;
    }
}
