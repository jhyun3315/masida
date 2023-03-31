package com.ssafy.cocktail.backend.myPage.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class PaginationDataSet {

	Object data;
	int nextPage;
	boolean isEnd;

	@Builder
	public PaginationDataSet(Object data, int nextPage, boolean isEnd) {
		this.data = data;
		this.nextPage = nextPage;
		this.isEnd = isEnd;
	}
}
