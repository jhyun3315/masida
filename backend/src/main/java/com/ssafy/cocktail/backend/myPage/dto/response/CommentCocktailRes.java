package com.ssafy.cocktail.backend.myPage.dto.response;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.myPage.dto.CommentCocktail;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.List;

@Setter
@Schema(defaultValue = "CommentCocktailResponse")
public class CommentCocktailRes extends BaseResponseBody {
	@Schema(name="댓글과 평점 등록한 칵테일 리스트", example = "댓글과 평점 등록한 칵테일 리스트")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	List<CommentCocktail> data;

	public static CommentCocktailRes of(Integer statusCode, String message, List<CommentCocktail> result) {
		CommentCocktailRes res = new CommentCocktailRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setData(result);
		return res;
	}
}
