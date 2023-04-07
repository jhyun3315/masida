package com.ssafy.cocktail.backend.cocktails.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
public class CommentReq {
    @Schema(defaultValue = "댓글 내용", example = "인생 칵테일")
    @JsonProperty("comment_content")
    private String commentContent;

    @Schema(defaultValue = "칵테일 평점", example = "4.2")
    @JsonProperty("comment_rating")
    private Double commentRating;

    @Schema(defaultValue = "칵테일 난이도", example = "중")
    @JsonProperty("comment_difficulty")
    private String commentDifficulty;
}
