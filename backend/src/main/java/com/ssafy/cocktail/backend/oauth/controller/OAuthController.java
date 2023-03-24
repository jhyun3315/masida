package com.ssafy.cocktail.backend.oauth.controller;

import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.oauth.dto.UserInfo;
import com.ssafy.cocktail.backend.oauth.dto.UserLoginInfo;
import com.ssafy.cocktail.backend.oauth.dto.request.UserInfoReq;
import com.ssafy.cocktail.backend.oauth.dto.response.UserInfoRes;
import com.ssafy.cocktail.backend.oauth.dto.response.UserLoginRes;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import com.ssafy.cocktail.backend.oauth.util.JwtTokenUtil;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Tag(name = "oauth", description = "사용자 API")
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
        UserLoginInfo userLoginInfo = oAuthService.loginUser(code);
        Cookie cookie = new Cookie("refreshToken", userLoginInfo.getRefreshToken());
        cookie.setMaxAge(JwtTokenUtil.refreshExpirationTime);
        cookie.setSecure(true); // 클라이언트가 HTTPS가 아닌 통신에서는 해당 쿠키를 전송하지 않도록 하는 설정
        cookie.setHttpOnly(true); // 브라우저에서 쿠키에 접근할 수 없도록 하는 설정 (XSS 공격 방지)
        cookie.setPath("/");
        String mainPageUri = "/"; // 매인 페이지 가져오기
        response.sendRedirect(mainPageUri); // 메인 페이지로 이동
        return ResponseEntity.ok(UserLoginRes.of(200, "Success", userLoginInfo.getAccessToken(), userLoginInfo.getUserName()));
    }

    @GetMapping("/kakao/logout")
    public ResponseEntity<?> kakaoLogout(@RequestHeader("authorization") String accessToken) {
//        String accessToken = data.get("authorization");
        if (oAuthService.logoutUser(accessToken, false)) { // 로그아웃 요청
            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

    @DeleteMapping("/kakao/delete")
    public ResponseEntity<?> kakaoDelete(@RequestHeader("authorization") String accessToken) {
//        String accessToken = data.get("authorization");
        if (oAuthService.logoutUser(accessToken, true)) { // 회원 탈퇴 요청
            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

    @GetMapping("users")
    public ResponseEntity<UserInfoRes> mypageUserinfo(@RequestHeader("authorization") String accessToken) {
        User user = oAuthService.getUser(accessToken);
        UserInfo userInfo = new UserInfo(user.getUserName(), user.getUserEmail(), user.getUserProfile(), user.getUserGender(), user.getUserAgeRange());
        return ResponseEntity.ok(UserInfoRes.of(200, "Success", userInfo));
    }

    @PutMapping("users")
    public ResponseEntity<UserInfoRes> mypageEditUserInfo(@RequestHeader("authorization") String accessToken, UserInfoReq req) {
        UserInfo userInfo = oAuthService.updateUser(accessToken, req.getUserGender(), req.getUserAgeRange()); // 사용자 정보 업데이트 후 사용자 정보 가져오기
        if(userInfo != null) { // 사용자 정보 수정에 성공했으면
            return ResponseEntity.status(200).body(UserInfoRes.of(200, "Success", userInfo));
        }
        return ResponseEntity.status(200).body(UserInfoRes.of(200, "Fail", null));
    }
}
