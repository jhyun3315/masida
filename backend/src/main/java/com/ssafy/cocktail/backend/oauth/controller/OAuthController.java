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

@Tag(name = "oauth", description = "사용자 API")
@RestController
@AllArgsConstructor
@RequestMapping("/api/oauth")
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
public class OAuthController {
    private final OAuthService oAuthService;

    @GetMapping("/kakao/login")
    public void kakaoLogin(HttpServletResponse response) throws IOException {
        String loginPageUri = oAuthService.loginPage(); // 로그인 페이지 가져오기
        response.sendRedirect(loginPageUri); // 로그인 페이지로 이동
    }

//    @ResponseBody
//    @GetMapping("/kakao/callback")
//    public ResponseEntity<UserLoginRes> kakaoCallback(@RequestParam String code, HttpServletResponse response) throws Exception {
//        // 카카오 로그인 콜백
//        // 로그인 완료
//        UserLoginInfo userLoginInfo = oAuthService.loginUser(code); // 회원 정보 저장
//        Cookie cookie = new Cookie("refreshToken", userLoginInfo.getRefreshToken()); // 쿠키에 refreshToeken 저장
//        cookie.setMaxAge(JwtTokenUtil.refreshExpirationTime); // JWT 만료 시간 설정
////        cookie.setSecure(true); // 클라이언트가 HTTPS가 아닌 통신에서는 해당 쿠키를 전송하지 않도록 하는 설정
////        cookie.setHttpOnly(true); // 브라우저에서 쿠키에 접근할 수 없도록 하는 설정 (XSS 공격 방지)
//        cookie.setPath("/"); // 프론트 메인 페이지 설정
//        Cookie cookie2 = new Cookie("accessToken", userLoginInfo.getAccessToken());
////        cookie2.setSecure(true); // 클라이언트가 HTTPS가 아닌 통신에서는 해당 쿠키를 전송하지 않도록 하는 설정
//        cookie2.setPath("/"); // 프론트 메인 페이지 설정
//
////        response.setHeader("accessToken", userLoginInfo.getAccessToken());
////        String mainPageUri = "http://localhost:8080/"; // 매인 페이지 가져오기
//        String mainPageUri = "/";
////        response.sendRedirect(mainPageUri); // 메인 페이지로 이동
//        return ResponseEntity.ok(UserLoginRes.of(200, "Success", userLoginInfo.getAccessToken(), userLoginInfo.getUserName()));
//    }

    @ResponseBody
    @GetMapping("/kakao/callback")
    public RedirectView kakaoCallback(@RequestParam String code, RedirectAttributes attributes, HttpServletResponse response) throws Exception {
        // 카카오 로그인 콜백
        // 로그인 완료
        UserLoginInfo userLoginInfo = oAuthService.loginUser(code); // 회원 정보 저장 및 가져오기
        System.out.println("--------------------------------");
        System.out.println("로그인 완료");
        System.out.println("refreshToken: "+ userLoginInfo.getRefreshToken());
        System.out.println("accessToken: "+  userLoginInfo.getAccessToken());
//        attributes.addFlashAttribute("refreshToken", userLoginInfo.getRefreshToken());
//        attributes.addFlashAttribute("accessToken", userLoginInfo.getAccessToken());
        attributes.addAttribute("accessToken", userLoginInfo.getAccessToken());
        attributes.addAttribute("userName", userLoginInfo.getUserName());
//        response.setHeader("accessToken", userLoginInfo.getAccessToken());
//        Cookie cookie = new Cookie("accessTokenCookie", userLoginInfo.getAccessToken());
//        cookie.setHttpOnly(true);
//        response.addCookie(cookie);
//        return new RedirectView("");
        return new RedirectView("http://localhost:3000");
    }

//    @GetMapping("/kakao/logout")
//    public ResponseEntity<?> kakaoLogout(@RequestHeader("authorization") String accessToken) {
////        String accessToken = data.get("authorization");
//        if (oAuthService.logoutUser(accessToken, false)) { // 로그아웃 요청
//            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
//        }
//        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
//    }

    @GetMapping("/kakao/logout")
    public ResponseEntity<?> kakaoLogout(@RequestHeader("Authorization") String accessToken) {
//        String accessToken = data.get("authorization");
        System.out.println("------------------------------------");
        System.out.println("로그아웃 요청입니다");
        System.out.println("로그아웃 요청입니다");
        System.out.println("엑세스 토큰: " + accessToken);
        System.out.println("엑세스 토큰: " + accessToken);

        if (oAuthService.logoutUser(accessToken, false)) { // 로그아웃 요청
            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

    @DeleteMapping("/kakao/delete")
    public ResponseEntity<?> kakaoDelete(@RequestHeader("Authorization") String accessToken) {
//        String accessToken = data.get("authorization");
        System.out.println("---------------------------------");
        System.out.println("회원탈퇴요청입니다");
        System.out.println("회원탈퇴요청입니다");
        System.out.println("회원탈퇴요청입니다");
        System.out.println("accessToken: " + accessToken);
        System.out.println("accessToken: " + accessToken);
        if (oAuthService.logoutUser(accessToken, true)) { // 회원 탈퇴 요청
            System.out.println("회원탈퇴 완료");
            System.out.println("회원탈퇴 완료");
            return ResponseEntity.ok(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

    @GetMapping("/users")
    public ResponseEntity<UserInfoRes> mypageUserinfo(@RequestHeader("Authorization") String accessToken) {
        System.out.println("---------------------------------");
        System.out.println("사용자 정보 조회 요청입니다");
        System.out.println("사용자 정보 조회 요청입니다");
        System.out.println("사용자 정보 조회 요청입니다");
        System.out.println("accessToken: " + accessToken);
        System.out.println("accessToken: " + accessToken);
        User user = oAuthService.getUser(accessToken);
        UserInfo userInfo = new UserInfo(user.getUserName(), user.getUserEmail(), user.getUserProfile(), user.getUserGender(), user.getUserAgeRange());
        System.out.println("사용자 정보 조회 완료");
        System.out.println(userInfo.toString());
        return ResponseEntity.ok(UserInfoRes.of(200, "Success", userInfo));
    }

    @PutMapping("/users")
    public ResponseEntity<UserInfoRes> mypageEditUserInfo(@RequestHeader("Authorization") String accessToken, UserInfoReq req) {
        System.out.println("---------------------------------");
        System.out.println("사용자 정보 수정 요청입니다");
        System.out.println("사용자 정보 수정 요청입니다");
        System.out.println("사용자 정보 수정 요청입니다");
        System.out.println("accessToken: " + accessToken);
        System.out.println("accessToken: " + accessToken);
        UserInfo userInfo = oAuthService.updateUser(accessToken, req.getUserGender(), req.getUserAgeRange()); // 사용자 정보 업데이트 후 사용자 정보 가져오기
        if(userInfo != null) { // 사용자 정보 수정에 성공했으면
            System.out.println("사용자 정보 수정 완료");
            System.out.println(userInfo.toString());
            return ResponseEntity.status(200).body(UserInfoRes.of(200, "Success", userInfo));
        }
        return ResponseEntity.status(200).body(UserInfoRes.of(200, "Fail", null));
    }
}
