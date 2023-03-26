package com.ssafy.cocktail.backend.mypage.controller;

import com.ssafy.cocktail.backend.cocktails.dto.request.CocktailIDReq;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.mypage.service.MypageBookmarkService;
import com.ssafy.cocktail.backend.mypage.service.MypageCommentService;
import com.ssafy.cocktail.backend.mypage.service.MypageLikeService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "mypage", description = "마이페이지 API")
@RestController
@AllArgsConstructor
@RequestMapping("api/mypage")
public class MypageController {

	private final MypageLikeService mypageLikeService;
	private final MypageBookmarkService mypageBookmarkService;
	private final MypageCommentService mypageCommentService;

	@GetMapping("/")
	public ResponseEntity<?> getLikeBookmarkCnt(@RequestHeader("Authorization") String accessToken) {

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	@GetMapping("/likes")
	public ResponseEntity<?> getLikeCocktailList(@RequestHeader("Authorization") String accessToken) {

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	@GetMapping("/bookmarks")
	public ResponseEntity<?> getBookmarkCocktailList(@RequestHeader("Authorization") String accessToken) {

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}


}
