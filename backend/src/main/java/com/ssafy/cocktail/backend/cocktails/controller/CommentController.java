package com.ssafy.cocktail.backend.cocktails.controller;

import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "comment", description = "댓글 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("api/comments")
public class CommentController {
    private CommentService commentService;

    @PostMapping("/{cocktail_id}")
    public ResponseEntity<?> register(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String id, @RequestBody CommentReq req) {
        if (commentService.registerComment(id, req, accessToken)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }
}
