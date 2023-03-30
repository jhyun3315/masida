package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.repository.BookmarkRepository;
import com.ssafy.cocktail.backend.myPage.service.MypageBookmarkService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class MypageBookmarkServiceImpl implements MypageBookmarkService {

	private BookmarkRepository bookmarkRepository;

	/***
	 * 해당 유저가 북마크한 칵테일 개수 구하기
	 * @param userId
	 * @return Long
	 */
	@Override
	public Long getBookmarkCocktailCnt(Long userId) {
		return bookmarkRepository.findBookmarkCntByUserId(userId);
	}
}
