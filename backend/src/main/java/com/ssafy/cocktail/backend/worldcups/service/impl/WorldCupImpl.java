package com.ssafy.cocktail.backend.worldcups.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.CocktailIngredient;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.repository.CocktailIngredientRepository;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.worldcups.dto.CocktailWorldCupDetail;
import com.ssafy.cocktail.backend.worldcups.dto.IngredientInfo;
import com.ssafy.cocktail.backend.worldcups.service.WorldCupService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@AllArgsConstructor
public class WorldCupImpl implements WorldCupService {
    private CocktailRepository cocktailRepository;
    private CocktailIngredientRepository cocktailIngredientRepository;
    private LikeRepository likeRepository;
    private CommentRepository commentRepository;
    @Override
    public ArrayList<CocktailWorldCupDetail> getWorldCupCocktails() {
        // 랜덤으로 16개 칵테일을 뽑아 리턴
        ArrayList<CocktailWorldCupDetail> cocktailWorldCupDetails = new ArrayList<>();
        List<Cocktail> cocktails = cocktailRepository.findAll(); // 모든 칵테일 가져오기
        Collections.shuffle(cocktails); // 랜덤으로 칵테일 정렬
        for (int i = 0; i < 16; i++) {
            Cocktail cocktail = cocktails.get(i);
            CocktailWorldCupDetail cand = new CocktailWorldCupDetail(); // 월드컵에 넣을 칵테일
            cand.setCocktailId(cocktail.getId()); // 칵테일 id 삽입
            cand.setCocktailNameKo(cocktail.getCocktailNameKo()); // 칵테일 한글 이름 삽입
            cand.setCocktailNameEn(cocktail.getCocktailNameEn()); // 칵테일 영어 이름 삽입
            cand.setCocktailImg(cocktail.getCocktailImg()); // 칵테일 이미지 삽입
            cand.setCocktailContent(cocktail.getCocktailContent()); // 칵테일 내용 삽입
            cand.setIngredient(new ArrayList<IngredientInfo>()); // 칵테일 재료를 저장하는 객체 삽입
            String cocktaildifficulty = (int)cocktail.getCocktailDifficulty() == 1 ? "하" :
                    cocktail.getCocktailDifficulty() == 2 ? "중" : "상"; // 칵테일 난이도
            cand.setCocktailDifficulty(cocktaildifficulty); // 칵테일 난이도 삽입
            cand.setCocktailRating(Math.round(cocktail.getCocktailRating() * 10.0) / 10.0); // 칵테일 평점 삽입
            List<Like> likes = likeRepository.findAllByCocktailAndLikeDeleted(cocktail, false); // 좋아요 가져오기
            cand.setCocktailLikes(likes.size()); // 좋아요 개수 삽입
            List<Comment> comments = commentRepository.findAllByCocktailAndCommentDeleted(cocktail, false); // 댓글 가져오기
            cand.setCocktailComments(comments.size()); // 댓글 개수 삽입
            List<CocktailIngredient> cocktailIngredients = cocktailIngredientRepository.findByCocktail(cocktail); // 칵테일 재료들
            for (CocktailIngredient cocktailIngredient: cocktailIngredients) { // 칵테일 재료
                IngredientInfo ingredientInfo = new IngredientInfo();
                ingredientInfo.setIngredientName(cocktailIngredient.getIngredientName()); // 재료 이름 삽입
                ingredientInfo.setIngredientAmount(cocktailIngredient.getIngredientAmount()); // 재료 양 삽입
                ingredientInfo.setIngredientUnit(cocktailIngredient.getIngredientUnit()); // 재료 단위 삽입
                cand.getIngredient().add(ingredientInfo); // 재료 삽입
            }
            cocktailWorldCupDetails.add(cand); // 월드컵 칵테일 추가
        }
        return cocktailWorldCupDetails;
    }
}
