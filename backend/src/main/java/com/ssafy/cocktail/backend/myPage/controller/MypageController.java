package com.ssafy.cocktail.backend.myPage.controller;

import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.myPage.dto.*;
import com.ssafy.cocktail.backend.myPage.dto.response.*;
import com.ssafy.cocktail.backend.myPage.service.MypageBookmarkService;
import com.ssafy.cocktail.backend.myPage.service.MypageCommentService;
import com.ssafy.cocktail.backend.myPage.service.MypageLikeService;
import com.ssafy.cocktail.backend.myPage.service.MypageSummaryService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Tag(name = "mypage", description = "마이페이지 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("api/mypage")
public class MypageController {

	private final OAuthService oAuthService;
	private final MypageLikeService mypageLikeService;
	private final MypageBookmarkService mypageBookmarkService;
	private final MypageCommentService mypageCommentService;
	private final MypageSummaryService mypageSummaryService;

	@GetMapping("/cnt")
	public ResponseEntity<?> getLikeBookmarkCnt(@RequestHeader Map<String, String> data) {
		String accessToken = data.get("authorization");
		// 토큰이 없는 경우,
		if(accessToken == null) {
			return ResponseEntity.status(400).body(LikeBookmarkCntRes.of(400, "토큰이 비어있습니다", null));
		}

		// 토큰이 유효한 경우,
		try {
			// 해당 사용자 가져오기
			User user = oAuthService.getUser(accessToken);
			// 해당 사용자가 좋아요한 칵테일 개수
			long likesCnt = mypageLikeService.getLikeCocktailCnt(user.getId());
			// 해당 사용자가 북마크한 칵테일 개수
			long bookmarkCnt = mypageBookmarkService.getBookmarkCocktailCnt(user.getId());
			LikeBookmarkCnt likeBookmarkCnt = LikeBookmarkCnt.builder()
					.likesCnt(likesCnt)
					.bookmarkCnt(bookmarkCnt)
					.build();
			return ResponseEntity.status(200).body(LikeBookmarkCntRes.of(200, "Success", likeBookmarkCnt));
		}
		// 토큰이 유효하지 않은 경우
		catch (Exception e) {
			return ResponseEntity.status(400).body(LikeBookmarkCntRes.of(400, "존재하지 않는 사용자입니다.", null));
		}
	}


	@GetMapping("/likes")
	public ResponseEntity<?> getLikeCocktailList(@RequestHeader Map<String, String> data, @RequestParam(value = "page", defaultValue = "0") Integer page) {
		String accessToken = data.get("authorization");

		// 토큰이 없는 경우,
		if(accessToken == null) {
			return ResponseEntity.status(400).body(PageableRes.of(400, "토큰이 비어있습니다", new ArrayList<>(), -1, true));
		}

		// 토큰이 유효한 경우,
		try {
			// 해당 사용자 가져오기
			User user = oAuthService.getUser(accessToken);
			// pagination 위해 Pageable 생성
			Pageable pageable = PageRequest.of(page, 4, Sort.by("id").descending());

			// 해당 유저가 좋아요한 칵테일 리스트
			PaginationDataSet pageLikeCocktails = mypageLikeService.getLikeCocktailList(user.getId(), pageable);
			return ResponseEntity.status(200).body(PageableRes.of(200, "Success", pageLikeCocktails.getData(), pageLikeCocktails.getNextPage(), pageLikeCocktails.isEnd()));
		} 
		// 토큰이 유효하지 않은 경우
		catch (Exception e) {
			return ResponseEntity.status(400).body(PageableRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>(), -1, true));
		}
	}


	@GetMapping("/bookmarks")
	public ResponseEntity<?> getBookmarkCocktailList(@RequestHeader Map<String, String> data, @RequestParam(value = "page", defaultValue = "0") Integer page) {
		String accessToken = data.get("authorization");

		// 토큰이 없는 경우,
		if(accessToken == null) {
			return ResponseEntity.status(400).body(PageableRes.of(400, "토큰이 비어있습니다", new ArrayList<>(), -1, true));
		}

		// 토큰이 유효한 경우,
		try {
			// 해당 사용자 가져오기
			User user = oAuthService.getUser(accessToken);
			// pagination 위해 Pageable 생성
			Pageable pageable = PageRequest.of(page, 4, Sort.by("id").descending());

			// 해당 유저가 북마크한 칵테일 리스트
			PaginationDataSet pageBookmarkCocktails = mypageBookmarkService.getBookmarkCocktailList(user.getId(), pageable);
			return ResponseEntity.status(200).body(PageableRes.of(200, "Success", pageBookmarkCocktails.getData(), pageBookmarkCocktails.getNextPage(), pageBookmarkCocktails.isEnd()));
		}
		// 토큰이 유효하지 않은 경우
		catch (Exception e) {
			return ResponseEntity.status(400).body(PageableRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>(), -1, true));
		}
	}

	@GetMapping("/comment")
	public ResponseEntity<?> getCommentCocktailList(@RequestHeader Map<String, String> data, @RequestParam(value = "page", defaultValue = "0") Integer page) {
		String accessToken = data.get("authorization");

		// 토큰이 없는 경우,
		if (accessToken == null) {
			return ResponseEntity.status(400).body(PageableRes.of(400, "토큰이 비어있습니다", new ArrayList<>(), -1, true));
		}

		// 토큰이 유효한 경우,
		try {
			// 해당 사용자 가져오기
			User user = oAuthService.getUser(accessToken);
			// pagination 위해 Pageable 생성
			Pageable pageable = PageRequest.of(page, 4, Sort.by("id").descending());

			// 해당 유저가 댓글 및 평점 등록한 칵테일 리스트
			PaginationDataSet pageCommentCocktails = mypageCommentService.getCommentCocktailList(user.getId(), pageable);
			return ResponseEntity.status(200).body(PageableRes.of(200, "Success", pageCommentCocktails.getData(), pageCommentCocktails.getNextPage(), pageCommentCocktails.isEnd()));
		}
		// 토큰이 유효하지 않은 경우
		catch (Exception e) {
			return ResponseEntity.status(400).body(PageableRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>(), -1, true));
		}
	}

	@GetMapping("/cocktail_summary")
	public ResponseEntity<?> getCocktailSummary (@RequestHeader Map<String, String> data) {
		String accessToken = data.get("authorization");

		// 토큰이 없는 경우,
		if (accessToken == null) {
			return ResponseEntity.status(400).body(CocktailSummaryRes.of(400, "토큰이 비어있습니다", new ArrayList<>()));
		}

		// 토큰이 유효한 경우,
		try {
			// 해당 사용자 가져오기
			User user = oAuthService.getUser(accessToken);

			// 해당 유저가 댓글 및 평점 등록한 칵테일 리스트
			List<CocktailSummary> cocktailSummaryList = mypageSummaryService.getCocktailSummaryList(user.getId());
			return ResponseEntity.status(200).body(CocktailSummaryRes.of(200, "Success", cocktailSummaryList));
		}
		// 토큰이 유효하지 않은 경우
		catch (Exception e) {
			return ResponseEntity.status(400).body(CocktailSummaryRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
		}
	}

}
