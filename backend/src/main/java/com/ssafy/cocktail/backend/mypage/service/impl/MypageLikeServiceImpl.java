package com.ssafy.cocktail.backend.mypage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.mypage.service.MypageLikeService;

import java.util.List;

public class MypageLikeServiceImpl implements MypageLikeService {

	private LikeRepository likeRepository;

	@Override
	public List<Cocktail> getLikeCocktailList(User user) {
		return likeRepository.findByUser(user);
	}


}
