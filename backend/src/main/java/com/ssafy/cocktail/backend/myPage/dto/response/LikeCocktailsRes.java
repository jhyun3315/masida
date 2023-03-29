package com.ssafy.cocktail.backend.myPage.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.List;

@Setter
@Schema(defaultValue = "LikeCocktailsResponse")
public class LikeCocktailsRes extends BaseResponseBody {
	@Schema(name="좋아요한 칵테일 리스트", example = "좋아요한 칵테일 리스트")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	List<LikeBookmarkCocktail> data;

	public static LikeCocktailsRes of(Integer statusCode, String message, List<LikeBookmarkCocktail> result) {
		LikeCocktailsRes res = new LikeCocktailsRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setData(result);
		return res;
	}
}