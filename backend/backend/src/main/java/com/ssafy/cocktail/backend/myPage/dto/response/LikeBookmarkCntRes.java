package com.ssafy.cocktail.backend.myPage.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCnt;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;


@Setter
@Schema(defaultValue = "LikeBookmarkCntResponse")
public class LikeBookmarkCntRes extends BaseResponseBody {
	@Schema(name="좋아요와 북마크한 칵테일 개수", example = "좋아요와 북마크한 칵테일 개수")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	LikeBookmarkCnt data;

	public static LikeBookmarkCntRes of(Integer statusCode, String message, LikeBookmarkCnt result) {
		LikeBookmarkCntRes res = new LikeBookmarkCntRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setData(result);
		return res;
	}

}
