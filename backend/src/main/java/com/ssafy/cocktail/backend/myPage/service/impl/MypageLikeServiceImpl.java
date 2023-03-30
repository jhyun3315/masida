package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import com.ssafy.cocktail.backend.myPage.service.MypageLikeService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class MypageLikeServiceImpl implements MypageLikeService {

	private LikeRepository likeRepository;

	@Override
	public List<LikeBookmarkCocktail> getLikeCocktailList(Long userId) {
		// 해당 유저가 좋아요한 칵테일 리스트
		List<Cocktail> cocktailList = likeRepository.findByUserId(userId);
		// 칵테일 리스트를 DTO 전용으로 바꿔서 해당 List에 담아주기
		List<LikeBookmarkCocktail> result = new ArrayList<>();

		for(Cocktail cocktail : cocktailList) {
			// 해당 칵테일의 좋아요 개수
			int likeCnt = likeRepository.findLikeCntByCocktailId(cocktail.getId());
			// DTO에 담아주기
			LikeBookmarkCocktail likeCocktail = LikeBookmarkCocktail.builder()
					.cocktailId(cocktail.getId())
					.cocktailNameKo(cocktail.getCocktailNameKo())
					.cocktailImg(cocktail.getCocktailImg())
					.likeCnt(likeCnt)
					.cocktailRating(cocktail.getCocktailRating())
					.cocktailDifficulty(cocktail.getCocktailDifficulty())
					.build();
			// result 리스트에 담아주기
			result.add(likeCocktail);
		}
		return result;
	}


}
