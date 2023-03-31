package com.ssafy.cocktail.backend.myPage.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;


@Setter
@Schema(defaultValue = "PageableResponse")
public class PageableRes extends BaseResponseBody {
	@Schema(name="페이지네이션 적용한 칵테일 리스트", example = "페이지네이션 적용한 칵테일 리스트")
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	Object data;


	Integer nextPage;
	Boolean isEnd;

	public static PageableRes of(Integer statusCode, String message, Object data, Integer nextPage, Boolean isEnd) {
		PageableRes res = new PageableRes();
		res.setStatusCode(statusCode);
		res.setMessage(message);
		res.setData(data);
		res.setNextPage(nextPage);
		res.setIsEnd(isEnd);
		return res;
	}
}
