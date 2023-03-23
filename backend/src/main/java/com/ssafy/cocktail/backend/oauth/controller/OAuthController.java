package com.ssafy.cocktail.backend.oauth.controller;

import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.oauth.dto.UserInfo;
import com.ssafy.cocktail.backend.oauth.dto.UserLoginRes;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
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
    private final OAuthService oAuthService;

    @GetMapping("kakao/login")
    public void kakaoLogin(HttpServletResponse response) throws IOException {
        String loginPageUri = oAuthService.loginPage(); // 로그인 페이지 가져오기
        response.sendRedirect(loginPageUri); // 로그인 페이지로 이동
    }

    @ResponseBody
    @GetMapping("/kakao/callback")
    public ResponseEntity<UserLoginRes> kakaoCallback(@RequestParam String code, HttpServletResponse response) throws Exception {
        // 카카오 로그인 콜백
        // 로그인 완료
        UserInfo userInfo = oAuthService.loginUser(code);
        Cookie cookie = new Cookie("refreshToken", userInfo.getRefreshToken());
        cookie.setMaxAge(JwtTokenUtil.refreshExpirationTime);
        cookie.setSecure(true); // 클라이언트가 HTTPS가 아닌 통신에서는 해당 쿠키를 전송하지 않도록 하는 설정
        cookie.setHttpOnly(true); // 브라우저에서 쿠키에 접근할 수 없도록 하는 설정 (XSS 공격 방지)
        cookie.setPath("/");
        oAuthService.getUser(userInfo.getAccessToken());
        return ResponseEntity.ok(UserLoginRes.of(200, "Success", userInfo.getAccessToken(), userInfo.getUserName()));
    }

    @GetMapping("/kakao/logout")
    public ResponseEntity<?> kakaoLogout(@RequestHeader("authorization") String accessToken) {
//        String accessToken = data.get("authorization");
        if (oAuthService.logoutUser(accessToken)) { // 로그아웃 요청
            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }
}
