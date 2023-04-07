package com.ssafy.cocktail.backend.myPage.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Setter
@Getter
public class CommentCocktail {
	@Schema(description = "칵테일 id", example = "0")
	@JsonProperty("cocktail_id")
	private long cocktailId;

	@Schema(description = "칵테일 한글 이름", example = "칵테일")
	@JsonProperty("cocktail_name_ko")
	private String cocktailNameKo;

	@Schema(description = "칵테일 이미지 url", example = ".jpg")
	@JsonProperty("cocktail_img")
	private String cocktailImg;

	@Schema(description = "사용자가 평가한 난이도", example = "중")
	@JsonProperty("cocktail_difficulty_user")
	private String commentDifficulty;

	@Schema(description = "사용자가 등록한 댓글", example = "칵테일입니다.")
	@JsonProperty("comment_content")
	private String commentContent;

	@Schema(description = "사용자가 등록한 평점", example = "4.5")
	@JsonProperty("comment_rating")
	private double commentRating;

	@Schema(description = "사용자 댓글 생성 일자", example = "2023-01-01")
	@JsonProperty("comment_date")
	private LocalDate commentCreatedDate;

	@Builder
	public CommentCocktail (long cocktailId, String cocktailNameKo, String cocktailImg, double commentDifficulty, String commentContent, double commentRating, LocalDateTime commentCreatedDate) {
		this.cocktailId = cocktailId;
		this.cocktailNameKo = cocktailNameKo;
		this.cocktailImg = cocktailImg;
		this.commentDifficulty = ((commentDifficulty == 1 ) ? "하" : (commentDifficulty == 2) ? "중" : "상" );
		this.commentContent = commentContent;
		this.commentRating = commentRating;
		this.commentCreatedDate = commentCreatedDate.toLocalDate();
	}
}
