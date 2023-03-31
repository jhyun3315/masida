package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.myPage.dto.CommentCocktail;
import com.ssafy.cocktail.backend.myPage.dto.PaginationDataSet;
import com.ssafy.cocktail.backend.myPage.service.MypageCommentService;
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
public class MypageCommentServiceImpl implements MypageCommentService {

	private CommentRepository commentRepository;

	/***
	 * 해당 유저가 댓글 및 평점 등록한 칵테일 리스트
	 * @param userId
	 * @return List<CommentCocktail>
	 */
	@Override
	public PaginationDataSet getCommentCocktailList(Long userId, Pageable pageable) {
		// 해당 유저가 등록한 Comment 객체 리스트 - Pagination 적용
		Page<Comment> commentPage = commentRepository.findCommentCocktailsByUserId(userId, pageable);
		// Comment 엔티티 리스트로 가져오기
		List<Comment> commentList = commentPage.getContent();
		// 엔티티 Comment를 DTO 객체로 바꿔서 해당 List에 담아주기
		List<CommentCocktail> commentCocktailData = new ArrayList<>();

		// 엔티티 칵테일을 DTO 객체로 바꿔주기
		for(Comment comment : commentList) {
			// CommentCocktail DTO에 담아주기
			CommentCocktail commentCocktail = CommentCocktail.builder()
					.cocktailId(comment.getCocktail().getId())
					.cocktailNameKo(comment.getCocktail().getCocktailNameKo())
					.cocktailImg(comment.getCocktail().getCocktailImg())
					.commentDifficulty(comment.getCommentDifficulty())
					.commentContent(comment.getCommentContent())
					.commentRating(comment.getCommentRating())
					.commentCreatedDate(comment.getCommentCreatedDate())
					.build();
			commentCocktailData.add(commentCocktail);
		}

		// 현재 페이지
		int curPage = pageable.getPageNumber();
		// 총 페이지 개수
		int totalPages = commentPage.getTotalPages();
		// 다음 페이지
		int nextPage = curPage + 1;
		// 마지막 페이지 여부
		boolean isEnd = false;
		if(curPage + 1 >= totalPages) {
			isEnd = true;
			nextPage = -1;
		}

		// PaginationDataSet 객체에 data들 담아주기
		PaginationDataSet pageListCocktail = PaginationDataSet.builder()
				.data(commentCocktailData)
				.nextPage(nextPage)
				.isEnd(isEnd)
				.build();

		return pageListCocktail;
	}
}
