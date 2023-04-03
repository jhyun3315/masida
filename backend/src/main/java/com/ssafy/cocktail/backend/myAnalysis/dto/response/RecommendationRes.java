package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecommendationRes {
	List<String> cocktailIdList;
}
