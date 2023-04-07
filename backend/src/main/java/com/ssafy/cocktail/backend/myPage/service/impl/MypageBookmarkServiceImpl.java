package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.repository.BookmarkRepository;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import com.ssafy.cocktail.backend.myPage.dto.PaginationDataSet;
import com.ssafy.cocktail.backend.myPage.service.MypageBookmarkService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class MypageBookmarkServiceImpl implements MypageBookmarkService {

	private BookmarkRepository bookmarkRepository;
	private LikeRepository likeRepository;

	/***
	 * 해당 유저가 북마크한 칵테일 개수 구하기
	 * @param userId
	 * @return Long
	 */
	@Override
	public Long getBookmarkCocktailCnt(Long userId) {
		return bookmarkRepository.findBookmarkCntByUserId(userId);
	}

	/***
	 * 해당 유저가 북마크한 칵테일 리스트
	 * @param userId
	 * @return List<LikeBookmarkCocktail>
	 */
	@Override
	public PaginationDataSet getBookmarkCocktailList(Long userId, Pageable pageable) {
		// 해당 유저가 북마크한 칵테일 리스트 - Pagination 적용
		Page<Cocktail> cocktailPage = bookmarkRepository.findBookmarkCocktailByUserId(userId, pageable);
		// Cocktail 엔티티 리스트로 가져오기
		List<Cocktail> cocktailList = cocktailPage.getContent();
		// 엔티티 칵테일을 DTO 객체로 바꿔서 해당 List에 담아주기
		List<LikeBookmarkCocktail> bookmarkCocktailData = new ArrayList<>();
		
		// 엔티티 칵테일을 DTO 객체로 바꿔주기
		for(Cocktail cocktail : cocktailList) {
			// 해당 칵테일의 좋아요 개수
			long likeCnt = likeRepository.findLikeCntByCocktailId(cocktail.getId());
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
			bookmarkCocktailData.add(likeCocktail);
		}

		// 현재 페이지
		int curPage = pageable.getPageNumber();
		// 총 페이지 개수
		int totalPages = cocktailPage.getTotalPages();
		// 다음 페이지
		int nextPage = curPage + 1;
		// 마지막 페이지 여부
		boolean isEnd = false;
		if(curPage + 1 >= totalPages) {
			isEnd = true;
		}

		// PaginationDataSet 객체에 data들 담아주기
		PaginationDataSet pageListCocktail = PaginationDataSet.builder()
				.data(bookmarkCocktailData)
				.nextPage(nextPage)
				.isEnd(isEnd)
				.build();

		return pageListCocktail;
	}
}
