package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import com.ssafy.cocktail.backend.myPage.dto.PaginationDataSet;
import com.ssafy.cocktail.backend.myPage.service.MypageLikeService;
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
	public PaginationDataSet getLikeCocktailList(Long userId, Pageable pageable) {
		// 해당 유저가 좋아요한 칵테일 리스트 - Pageable 적용
		Page<Cocktail> cocktailPage = likeRepository.findLikeCocktailByUserId(userId, pageable);
		// Cocktail 엔티티 리스트로 가져오기
		List<Cocktail> cocktailList = cocktailPage.getContent();
		// 엔티티 칵테일을 DTO 객체로 바꿔서 해당 List에 담아주기
		List<LikeBookmarkCocktail> likeCocktailData = new ArrayList<>();

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
			// data 리스트에 담아주기
			likeCocktailData.add(likeCocktail);
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
				.data(likeCocktailData)
				.nextPage(nextPage)
				.isEnd(isEnd)
				.build();

		return pageListCocktail;
	}

}
