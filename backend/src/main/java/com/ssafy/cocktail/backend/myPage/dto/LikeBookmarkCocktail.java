package com.ssafy.cocktail.backend.myPage.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LikeBookmarkCocktail {

	@Schema(description = "칵테일 id", example = "0")
	@JsonProperty("cocktail_id")
	private long cocktailId;

	@Schema(description = "칵테일 한글 이름", example = "칵테일")
	@JsonProperty("cocktail_name_ko")
	private String cocktailNameKo;

	@Schema(description = "칵테일 이미지 url", example = ".jpg")
	@JsonProperty("cocktail_img")
	private String cocktailImg;

	@Schema(description = "칵테일 좋아요 수", example = "1")
	@JsonProperty("cocktail_likes")
	private Long cocktailLikes;

	@Schema(description = "칵테일 평점", example = "4.9")
	@JsonProperty("cocktail_rating")
	private Double cocktailRating;

	@Schema(description = "칵테일 난이도", example = "중")
	@JsonProperty("cocktail_difficulty")
	private String cocktailDifficulty;

	@Builder
	public LikeBookmarkCocktail (long cocktailId, String cocktailNameKo, String cocktailImg, long likeCnt, double cocktailRating, double cocktailDifficulty) {
		this.cocktailId = cocktailId;
		this.cocktailNameKo = cocktailNameKo;
		this.cocktailImg = cocktailImg;
		this.cocktailLikes = likeCnt;
		this.cocktailRating = cocktailRating;
		this.cocktailDifficulty = ((cocktailDifficulty < 2 ) ? "하" : (cocktailDifficulty < 3) ? "중" : "상" );	// double형 난이도를 String형으로 바꿔주기
	}

}
