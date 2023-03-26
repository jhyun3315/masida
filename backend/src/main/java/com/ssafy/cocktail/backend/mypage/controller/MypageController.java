package com.ssafy.cocktail.backend.mypage.controller;

import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.mypage.dto.LikeBookmarkCocktail;
import com.ssafy.cocktail.backend.mypage.dto.response.LikeCocktailsRes;
import com.ssafy.cocktail.backend.mypage.service.MypageBookmarkService;
import com.ssafy.cocktail.backend.mypage.service.MypageCommentService;
import com.ssafy.cocktail.backend.mypage.service.MypageLikeService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Tag(name = "mypage", description = "마이페이지 API")
@RestController
@AllArgsConstructor
@RequestMapping("api/mypage")
public class MypageController {

	private final OAuthService oAuthService;
	private final MypageLikeService mypageLikeService;
	private final MypageBookmarkService mypageBookmarkService;
	private final MypageCommentService mypageCommentService;

	@GetMapping("/")
	public ResponseEntity<?> getLikeBookmarkCnt(@RequestHeader("Authorization") String accessToken) {

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	@GetMapping("/likes")
	public ResponseEntity<?> getLikeCocktailList(@RequestHeader("Authorization") String accessToken) {
		// access token 유효한지는 검사 안해도 되나?

		// 해당 사용자 가져오기
		User user = oAuthService.getUser(accessToken);

		// 해당 유저가 좋아요한 칵테일 리스트
		List<Cocktail> likeCocktailList =  mypageLikeService.getLikeCocktailList(user);

		List<LikeBookmarkCocktail> result = likeCocktailList.stream()
				.map(c -> new LikeBookmarkCocktail(c))
				.collect(Collectors.toList());

		return ResponseEntity.status(200).body(LikeCocktailsRes.of(200, "Success", result));
	}

	@GetMapping("/bookmarks")
	public ResponseEntity<?> getBookmarkCocktailList(@RequestHeader("Authorization") String accessToken) {

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}


}
