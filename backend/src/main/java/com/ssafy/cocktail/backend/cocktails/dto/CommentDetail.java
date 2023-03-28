package com.ssafy.cocktail.backend.cocktails.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;

public class CommentDetail {
    @Schema(description = "댓글 id", example = "0")
    @JsonProperty("comment_id")
    private Long commentId;

    @Schema(description = "댓글 내용", example = "칵테일 입니다")
    @JsonProperty("comment_content")
    private String commentContent;

    @Schema(description = "칵테일 평점", example = "4.2")
    @JsonProperty("comment_rating")
    private Double commentRating;

    @Schema(description = "생성일자", example = "2023-03-28")
    @JsonProperty("comment_create_date")
    private String commentCreateDate;

    @Schema(description = "칵테일 제조법 난이도", example = "중")
    @JsonProperty("comment_difficulty")
    private String commentDifficulty;

    @Schema(description = "작성자 이름", example = "이싸피")
    @JsonProperty("comment_name")
    private String commentName;

    @Schema(description = "작성자 프로필", example = "/img")
    @JsonProperty("comment_profile")
    private String commentProfile;

    @Schema(description = "작성자 확인", example = "false")
    @JsonProperty("comment_checker")
    private boolean commentChecker;
}
