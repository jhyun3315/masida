package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.myPage.dto.CommentCocktail;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import com.ssafy.cocktail.backend.myPage.service.MypageCommentService;
import lombok.AllArgsConstructor;
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
	public List<CommentCocktail> getCommentCocktailList(Long userId) {
		// 해당 유저가 등록한 Comment 객체 리스트
		List<Comment> commentCocktailList = commentRepository.findCommentCocktailsByUserId(userId);
		// CommentCocktail DTO 담을 List
		List<CommentCocktail> result = new ArrayList<>();

		for(Comment comment : commentCocktailList) {
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
			result.add(commentCocktail);
		}
		return result;
	}
}
