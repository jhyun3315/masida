package com.ssafy.cocktail.backend.cocktails.controller;

import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.dto.response.CommentRes;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@Tag(name = "comment", description = "댓글 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
@RequestMapping("/api/comments")
public class CommentController {
    private CommentService commentService;
    private OAuthService oAuthService;

    @GetMapping("/{cocktail_id}")
    public ResponseEntity<CommentRes> getComments(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, HttpServletResponse response) throws IOException {
        ArrayList<CommentDetail> commentDetails = commentService.getComments(cocktailId, accessToken);
        if (commentDetails != null) {
            return ResponseEntity.status(200).body(CommentRes.of(200, "Success", commentDetails));
        }
        String loginPageUri = oAuthService.loginPage(); // 로그인 페이지 가져오기
        response.sendRedirect(loginPageUri); // 로그인 페이지로 이동
        return ResponseEntity.status(404).body(CommentRes.of(404, "user not found", commentDetails));
    }

    @PostMapping("/{cocktail_id}")
    public ResponseEntity<?> saveComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @RequestBody CommentReq req, HttpServletResponse response) throws IOException {
        if (commentService.saveOrUpdateComment(cocktailId, null, req, accessToken)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        String loginPageUri = oAuthService.loginPage(); // 로그인 페이지 가져오기
        response.sendRedirect(loginPageUri); // 로그인 페이지로 이동
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "user not found"));
    }

    @PutMapping("/{cocktail_id}/{comment_id}")
    public ResponseEntity<?> updateComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @PathVariable("comment_id") String commentId, @RequestBody CommentReq req, HttpServletResponse response) throws IOException {
        if (commentService.saveOrUpdateComment(cocktailId, commentId, req, accessToken)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        String loginPageUri = oAuthService.loginPage(); // 로그인 페이지 가져오기
        response.sendRedirect(loginPageUri); // 로그인 페이지로 이동
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "user not found"));
    }

    @DeleteMapping("/{cocktail_id}/{comment_id}")
    public ResponseEntity<?> removeComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @PathVariable("comment_id") String commentId, HttpServletResponse response) throws IOException {
        if (commentService.removeComment(cocktailId, commentId, accessToken)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        String loginPageUri = oAuthService.loginPage(); // 로그인 페이지 가져오기
        response.sendRedirect(loginPageUri); // 로그인 페이지로 이동
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }
}
