package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailDetail;
import com.ssafy.cocktail.backend.cocktails.service.CocktailDetailService;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.repository.*;
import com.ssafy.cocktail.backend.oauth.service.impl.CustomOAuth2UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CocktailDetailServiceImpl implements CocktailDetailService {
    private CocktailIngredientRepository cocktailIngredientRepository;
    private CocktailRepository cocktailRepository;
    private CommentRepository commentRepository;
    private IngredientRepository ingredientRepository;
    private LikeRepository likeRepository;
    private CustomOAuth2UserServiceImpl customOAuth2UserService;
    @Override
    public CocktailDetail getCocktailDetail(String cocktailId, String accessToken) {
        // 칵테일 상세 정보를 리턴한다
        CocktailDetail cocktailDetail = new CocktailDetail(); // 칵테일 상세 정보 객체 생성
        Optional<Cocktail> cocktail = cocktailRepository.findById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        cocktailDetail.setCocktailId(Integer.parseInt(cocktailId)); // 칵테일 아이디 삽입
        cocktailDetail.setCocktailNameKo(cocktail.get().getCocktailNameKo()); // 칵테일 한글 이롬 삽입
        cocktailDetail.setCocktailNameEn(cocktail.get().getCocktailNameEn()); // 칵테일 영어 이름 삽입
        cocktailDetail.setCocktailImg(cocktail.get().getCocktailImg()); // 칵테일 이미지 삽입
        cocktailDetail.setCocktailContent(cocktail.get().getCocktailContent()); // 칵테일 내용 삽입
        String rating = String.format("%.1f", cocktail.get().getCocktailRating()); // 칵테일 평점 계산 (소수점 첫째자리 까지 표시)
        cocktailDetail.setCocktailRating(rating); // 칵테일 평점 삽입
        switch (cocktail.get().getCocktailDifficulty().intValue()) { // 칵테일 난이도
            case 1: // 난이도가 1 이면
                cocktailDetail.setCocktailDifficulty("하"); // '하' 난이도 삽입
                break;
            case 2: // 난이도가 2 이면
                cocktailDetail.setCocktailDifficulty("중"); // '중' 난이도 삽입
                break;
            default: // 난이도가 3 이면
                cocktailDetail.setCocktailDifficulty("상"); // '상' 난이도 삽입
                break;
        }
        List<Like> likes = likeRepository.findAllByCocktail(cocktail.get());
        cocktailDetail.setCocktailLikes(likes.size());

        return null;
    }
}
