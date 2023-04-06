package com.ssafy.cocktail.backend.myAnalysis.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.repository.*;
import com.ssafy.cocktail.backend.myAnalysis.dto.CocktailIngredientInterface;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendCocktail;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendationRequestToPy;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendationResponseFromPy;
import com.ssafy.cocktail.backend.myAnalysis.service.CollaborativeRecommendService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
@AllArgsConstructor
public class CollaborativeRecommendServiceImpl implements CollaborativeRecommendService {
	private final String PYTHON_API_URL = "http://localhost:8000";
	private MyAnalysisRepository myAnalysisRepository;
	private LikeRepository likeRepository;
	private CocktailRepository cocktailRepository;
	private IngredientRepository ingredientRepository;
	private CocktailIngredientRepository cocktailIngredientRepository;

	/**
	 * 파이썬  FastAPI로 유사도 분석 자료 전송
	 * 파이썬 FastAPI로부터 유사도가 가장 높은 칵테일 9개 전달받기
	 * @param userId
	 * @return List<RecommendCocktail>
	 */
	@Override
	public List<RecommendCocktail> recommendCocktailByBase(Long userId)  throws UnirestException, JsonProcessingException{
		// 사용자가 선호하는 베이스 top 5 조회
		List<String> userLikeBase = new ArrayList<>(); // 파이썬에 보낼 사용자 선호 재료 리스트
		List<Object[]> top5Base = myAnalysisRepository.findTop5BaseByUserId(userId, PageRequest.of(0, 5));
		for (Object[] base : top5Base) {
			String name = (String) base[0];		 // 베이스 이름
			Long ingredientId = (Long) base[1];  // 베이스 인덱스 (재료 테이블 근거)
			Long count = (Long) base[2];		 // 총 개수
			userLikeBase.add(ingredientId + "");
		}

		// 사용자가 이전에 좋아요한 칵테일 리스트
		List<String> userLikeList = new ArrayList<>();
		for(Cocktail c : likeRepository.findLikeCocktailAllByUserId(userId)) {
			userLikeList.add(c.getId() + "");
		}
		Collections.sort(userLikeList);

		// 재료 테이블에서 조회한 베이스 인덱스 리스트
		List<Long> tmp = ingredientRepository.findBaseId();
		List<String> allBase = new ArrayList<>();
		for(Long t : tmp) {
			allBase.add(t+"");
		}

		// 파이썬 통신을 위한 DTO
		RecommendationRequestToPy recommendationRequest = new RecommendationRequestToPy("base", userLikeBase, userLikeList, allBase);

		// 파이썬 통신, 추천 칵테일 얻어오기
		List<Long> response = dataToPython(recommendationRequest);

		// 추천 받은 칵테일 인덱스로 칵테일 객체 조회
		ArrayList<RecommendCocktail> recommendationList = new ArrayList<>();
		for(Long res : response) {
			Cocktail cocktail = cocktailRepository.findCocktailById(res);
			RecommendCocktail recommendCocktail = RecommendCocktail.builder()
					.cocktailId(cocktail.getId())
					.cocktailNameKo(cocktail.getCocktailNameKo())
					.cocktailImg(cocktail.getCocktailImg())
					.build();
			recommendationList.add(recommendCocktail);
		}
		return recommendationList;
	}

	/**
	 * 파이썬  FastAPI로 유사도 분석 자료 전송
	 * 파이썬 FastAPI로부터 유사도가 가장 높은 칵테일 9개 전달받기
	 * @param userId
	 * @return List<RecommendCocktail>
	 */
	@Override
	public List<RecommendCocktail> recommendCocktailByIngredient(Long userId) throws UnirestException, JsonProcessingException{
		// 사용자가 선호하는 재료 top 5 조회
		List<String> userLikeIngredient = new ArrayList<>(); // 파이썬에 보낼 사용자 선호 재료 리스트
		List<Object[]> top5Ingredients = myAnalysisRepository.findTop5IngredientsByUserId(userId, PageRequest.of(0, 5));

		for (Object[] ingredient : top5Ingredients) {
			String name = (String) ingredient[0];		// 재료 이름
			Long ingredientId = (Long) ingredient[1];   // 재료 인덱스 (재료 테이블 근거)
			Long count = (Long) ingredient[2];			// 총 개수
			userLikeIngredient.add(ingredientId + "");
		}

		// 사용자가 이전에 좋아요한 칵테일 리스트
		List<String> userLikeList = new ArrayList<>();
		for(Cocktail c : likeRepository.findLikeCocktailAllByUserId(userId)) {
			userLikeList.add(c.getId() + "");
		}
		Collections.sort(userLikeList);

		// 재료 테이블에서 조회한 재료 인덱스 리스트 (General, Garnish)
		List<Long> tmp = ingredientRepository.findIngredientsId();
		List<String> allIngredient = new ArrayList<>();
		for(Long t : tmp) {
			allIngredient.add(t+"");
		}

		// 파이썬 통신을 위한 DTO
		RecommendationRequestToPy recommendationRequest = new RecommendationRequestToPy("ingredient",userLikeIngredient, userLikeList, allIngredient);

		// 파이썬 통신, 추천 칵테일 얻어오기
		List<Long> response = dataToPython(recommendationRequest);

		// 추천 받은 칵테일 인덱스로 칵테일 객체 조회
		ArrayList<RecommendCocktail> recommendationList = new ArrayList<>();
		for(Long res : response) {
			Cocktail cocktail = cocktailRepository.findCocktailById(res);
			RecommendCocktail recommendCocktail = RecommendCocktail.builder()
					.cocktailId(cocktail.getId())
					.cocktailNameKo(cocktail.getCocktailNameKo())
					.cocktailImg(cocktail.getCocktailImg())
					.build();
			recommendationList.add(recommendCocktail);
		}
		return recommendationList;
	}


	/**
	 * 파이썬 통신
	 * @param recommendationRequest
	 * @return List<Long> : 추천 칵테일 id 응답 리스트
	 * @throws UnirestException
	 * @throws JsonProcessingException
	 */
	@Override
	public List<Long> dataToPython(RecommendationRequestToPy recommendationRequest) throws UnirestException, JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper()
				.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
				.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
				.findAndRegisterModules();
		String requestBody = objectMapper.writeValueAsString(recommendationRequest);

		HttpResponse<String> response = Unirest.post(PYTHON_API_URL + "/recommend")
				.header("Content-Type", "application/json")
				.body(requestBody)
				.asString();

		String responseBody = response.getBody();
		if (responseBody != null && !responseBody.isEmpty()) {
			RecommendationResponseFromPy recommendationResponse = objectMapper.readValue(responseBody, RecommendationResponseFromPy.class);
			return recommendationResponse.getCocktailIdList();
		} else {
			// responseBody가 null이거나 비어있는 경우, 빈 배열 보내기
			return new ArrayList<>();
		}
	}
}
