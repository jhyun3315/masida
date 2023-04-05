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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Tag(name = "oauth", description = "사용자 API")
@RestController
@AllArgsConstructor
@RequestMapping("/api/oauth")
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
public class OAuthController {
    private OAuthService oAuthService;

    @GetMapping("/kakao/login")
    public void kakaoLogin(HttpServletResponse response) throws IOException {
        // 로그인 요청
        String loginPageUri = oAuthService.loginPage(); // 로그인 페이지 가져오기
        response.sendRedirect(loginPageUri); // 로그인 페이지로 리다이렉트
    }

    @ResponseBody
    @GetMapping("/kakao/callback")
    public RedirectView kakaoCallback(@RequestParam String code, RedirectAttributes attributes, HttpServletResponse response) throws Exception {
        // 카카오 로그인 콜백
        // 로그인 완료
        UserLoginInfo userLoginInfo = oAuthService.loginUser(code); // 회원 정보 저장 및 가져오기
        attributes.addAttribute("accessToken", userLoginInfo.getAccessToken()); // 파라미터에 엑세스토큰 삽입
        attributes.addAttribute("userName", userLoginInfo.getUserName()); // 파라미터에 사용자 이름 삽입

        return new RedirectView("http://localhost:3000"); // 메인 페이지로 리다이렉트
//        return new RedirectView("/"); // 메인 페이지로 리다이렉트
    }

    @GetMapping("/kakao/logout")
    public ResponseEntity<?> kakaoLogout(@RequestHeader("Authorization") String accessToken) {
        if (oAuthService.logoutUser(accessToken, false)) { // 로그아웃 요청
            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

    @DeleteMapping("/kakao/delete")
    public ResponseEntity<?> kakaoDelete(@RequestHeader("Authorization") String accessToken) {
        if (oAuthService.logoutUser(accessToken, true)) { // 회원 탈퇴 요청
            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

    @GetMapping("/users")
    public ResponseEntity<UserInfoRes> mypageUserinfo(@RequestHeader("Authorization") String accessToken) {
        // 사용자 정보 조회
        User user = oAuthService.getUser(accessToken); // 조회할 사용자 가져오기
        if (user != null) {
            UserInfo userInfo = new UserInfo(user.getUserName(), user.getUserEmail(), user.getUserProfile(), user.getUserGender(), user.getUserAgeRange()); // 사용자 정보 삽입
            return ResponseEntity.ok(UserInfoRes.of(200, "Success", userInfo));
        }
        return ResponseEntity.status(404).body(UserInfoRes.of(404, "Invalid User", null));
    }

    @PutMapping("/users")
    public ResponseEntity<UserInfoRes> mypageEditUserInfo(@RequestHeader("Authorization") String accessToken, UserInfoReq req) {
        // 사용자 정보 수정
        UserInfo userInfo = oAuthService.updateUser(accessToken, req.getUserGender(), req.getUserAgeRange()); // 사용자 정보 업데이트 후 사용자 정보 가져오기
        if(userInfo != null) { // 사용자 정보 수정에 성공했으면
            return ResponseEntity.status(200).body(UserInfoRes.of(200, "Success", userInfo));
        }
        return ResponseEntity.status(200).body(UserInfoRes.of(404, "Fail", null));
    }
}
