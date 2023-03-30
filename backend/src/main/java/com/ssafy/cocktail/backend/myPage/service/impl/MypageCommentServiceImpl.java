package com.ssafy.cocktail.backend.myPage.service.impl;

import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.myPage.dto.CommentCocktail;
import com.ssafy.cocktail.backend.myPage.service.MypageCommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
		return commentRepository.findCommentCocktailsByUserId(userId);
	}
}
