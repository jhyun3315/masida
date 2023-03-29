package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import com.ssafy.cocktail.backend.myPage.service.MypageLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MypageLikeServiceImpl implements MypageLikeService {

	private LikeRepository likeRepository;

	@Override
	public List<LikeBookmarkCocktail> getLikeCocktailList(User user) {
		// 해당 유저가 좋아요한 칵테일 리스트
		List<Cocktail> cocktailList = likeRepository.findByUser(user);
		// 칵테일 리스트를 DTO 전용으로 바꿔서 해당 List에 담아주기
		List<LikeBookmarkCocktail> result = new ArrayList<>();

		for(Cocktail cocktail : cocktailList) {
			// 해당 칵테일의 좋아요 개수
			int likeCnt = likeRepository.findLikeCntByCocktail(cocktail);
			// DTO에 담아주기
			LikeBookmarkCocktail likeCocktail = LikeBookmarkCocktail.builder()
					.cocktail(cocktail)
					.likeCnt(likeCnt)
					.build();
			// result 리스트에 담아주기
			result.add(likeCocktail);
		}
		return result;
	}


}
