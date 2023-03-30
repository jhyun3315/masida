package com.ssafy.cocktail.backend.myPage.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LikeBookmarkCnt {
	@Schema(description = "유저가 좋아요한 칵테일 개수", example = "23")
	@JsonProperty("likes_count")
	private Long likesCnt;

	@Schema(description = "유저가 북마크한 칵테일 개수", example = "34")
	@JsonProperty("bookmark_count")
	private Long bookmarkCnt;

	@Builder
	public LikeBookmarkCnt(long likesCnt, long bookmarkCnt) {
		this.likesCnt = likesCnt;
		this.bookmarkCnt = bookmarkCnt;
	}

}
