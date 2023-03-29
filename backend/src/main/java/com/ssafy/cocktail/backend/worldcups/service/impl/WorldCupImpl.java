package com.ssafy.cocktail.backend.worldcups.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.CocktailIngredient;
import com.ssafy.cocktail.backend.domain.repository.CocktailIngredientRepository;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.worldcups.dto.CocktailWorldCupDetail;
import com.ssafy.cocktail.backend.worldcups.dto.IngredientName;
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
            cand.setIngredient(new ArrayList<IngredientName>()); // 칵테일 재료를 저장하는 객체 삽입
            List<CocktailIngredient> cocktailIngredients = cocktailIngredientRepository.findByCocktail(cocktail); // 칵테일 재료들
            for (CocktailIngredient cocktailIngredient: cocktailIngredients) { // 칵테일 재료
                cand.getIngredient().add(new IngredientName(cocktailIngredient.getIngredientName())); // 재료 이름 삽입
            }
            cocktailWorldCupDetails.add(cand); // 월드컵 칵테일 추가
        }
        return cocktailWorldCupDetails;
    }
}
