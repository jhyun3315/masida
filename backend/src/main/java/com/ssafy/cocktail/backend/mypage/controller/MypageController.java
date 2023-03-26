package com.ssafy.cocktail.backend.mypage.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "mypage", description = "마이페이지 API")
@RestController
@AllArgsConstructor
@RequestMapping("api/mypage")
public class MypageController {


//	@GetMapping
//	public ResponseEntity<> getUserLikeBookmark() {
//		return ResponseEntity.status(200).body());
//	}

}
