package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.myPage.service.MypageLikeService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class MypageLikeServiceImpl implements MypageLikeService {

	private LikeRepository likeRepository;

	/***
	 * 해당 유저가 좋아요한 칵테일 개수 구하기
	 * @param userId
	 * @return Long
	 */
	@Override
	public Long getLikeCocktailCnt(Long userId) {
		return likeRepository.findLikeCntByUserId(userId);
	}


	/***
	 * 해당 유저가 좋아요한 칵테일 리스트 구하기
	 * @param userId
	 * @return Page<Cocktail>
	 */
	@Override
	public Page<Cocktail> getLikeCocktailList(Long userId, Pageable pageable) {
		// 해당 유저가 좋아요한 칵테일 리스트 - Pageable 적용
		return likeRepository.findLikeCocktailByUserId(userId, pageable);
	}

}
