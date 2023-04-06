package com.ssafy.cocktail.backend.cocktails.controller;

import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.dto.response.CommentRes;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@Tag(name = "comment", description = "댓글 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("/api/comments")
public class CommentController {
    private CommentService commentService;
    private static final String success = "Success";
    private static final String relogin = "Please relogin";

    @GetMapping("/{cocktail_id}")
    public ResponseEntity<CommentRes> getComments(@RequestHeader Map<String, String> data, @PathVariable("cocktail_id") String cocktailId) {
        // 댓글 조회
        String accessToken = data.get("authorization"); // 엑세스 토큰 가져오기
        ArrayList<CommentDetail> commentDetails = commentService.getComments(cocktailId, accessToken); // 칵테일의 댓글 가져오기
        if (commentDetails != null) { // 옳바르지 않은 사용자이면
            boolean isWrired = commentService.isWrited(cocktailId, accessToken); // 칵테일 작성 여부 확인
            return ResponseEntity.status(200).body(CommentRes.of(200, success, commentDetails, isWrired));
        }
        return ResponseEntity.status(404).body(CommentRes.of(404, relogin, commentDetails, false));
    }

    @PostMapping("/{cocktail_id}")
    public ResponseEntity<?> saveComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @RequestBody CommentReq req) {
        // 댓들 등록
        int state = commentService.saveOrUpdateComment(cocktailId, null, req, accessToken); // 댓글 저장 또는 업데이트
        if (state == 0) { // 요청 성공
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, success));
        } else if (state == 1) { // 옳바르지 않은 사용자이면
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, relogin));
        } else { // 중복 댓글 등록이면
            return ResponseEntity.status(405).body(BaseResponseBody.of(405, "Duplicate comments"));
        }
    }

    @PutMapping("/{cocktail_id}/{comment_id}")
    public ResponseEntity<?> updateComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @PathVariable("comment_id") String commentId, @RequestBody CommentReq req) {
        // 댓글 내용 수정
        if (commentService.saveOrUpdateComment(cocktailId, commentId, req, accessToken) == 0) { // 댓글 수정에 성공했으면
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, success));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, relogin));
    }

    @DeleteMapping("/{cocktail_id}/{comment_id}")
    public ResponseEntity<?> removeComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @PathVariable("comment_id") String commentId) {
        // 댓글 삭제
        if (commentService.removeComment(cocktailId, commentId, accessToken)) { // 댓글 삭제에 성공 했으면
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, success));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, relogin));
    }
}
