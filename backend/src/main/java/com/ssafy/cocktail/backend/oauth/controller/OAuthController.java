package com.ssafy.cocktail.backend.oauth.controller;

//import com.ssafy.cocktail.backend.oauth.service.CustomOAuth2UserService;
import com.ssafy.cocktail.backend.oauth.dto.UserInfo;
import com.ssafy.cocktail.backend.oauth.dto.UserLoginRes;
import com.ssafy.cocktail.backend.oauth.service.CustomOAuth2UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@AllArgsConstructor
@RequestMapping("/api/oauth")
public class OAuthController {
    private final CustomOAuth2UserService customOAuth2UserService;
    /**
     *  카카오 callback
     *  [GET] /v3/api-docs/auth/kakao/callback
     */
    @ResponseBody
    @GetMapping("/kakao/callback")
    public ResponseEntity<UserLoginRes> kakaoCallback(@RequestParam String code, HttpServletResponse response) throws IOException {
        // 카카오 로그인 콜백
        // 로그인 완료
        UserInfo userInfo = customOAuth2UserService.loginUser(code);
        Cookie cookie = new Cookie("refreshToken", userInfo.getRefreshToken());
//        cookie.se
//        cookie.setMaxAge();
        return ResponseEntity.ok(UserLoginRes.of(200, "Sucess", userInfo.getAccessToken(), userInfo.getUserName()));
    }
}
