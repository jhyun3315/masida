package com.ssafy.cocktail.backend.oauth.controller;

import com.ssafy.cocktail.backend.oauth.dto.UserInfo;
import com.ssafy.cocktail.backend.oauth.dto.UserLoginRes;
import com.ssafy.cocktail.backend.oauth.service.CustomOAuth2UserService;
import com.ssafy.cocktail.backend.oauth.util.JwtTokenUtil;
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
        cookie.setMaxAge(JwtTokenUtil.refreshExpirationTime);
        cookie.setSecure(true); // 클라이언트가 HTTPS가 아닌 통신에서는 해당 쿠키를 전송하지 않도록 하는 설정
        cookie.setHttpOnly(true); // 브라우저에서 쿠키에 접근할 수 없도록 하는 설정 (XSS 공격 방지)
        cookie.setPath("/");
        return ResponseEntity.ok(UserLoginRes.of(200, "Sucess", userInfo.getAccessToken(), userInfo.getUserName()));
    }
}
