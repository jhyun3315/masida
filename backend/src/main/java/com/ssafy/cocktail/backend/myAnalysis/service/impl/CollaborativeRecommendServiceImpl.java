package com.ssafy.cocktail.backend.myAnalysis.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.repository.LikeRepository;
import com.ssafy.cocktail.backend.domain.repository.MyAnalysisRepository;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendationRequest;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.RecommendationResponse;
import com.ssafy.cocktail.backend.myAnalysis.service.CollaborativeRecommendService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class CollaborativeRecommendServiceImpl implements CollaborativeRecommendService {
	private final String PYTHON_API_URL = "http://localhost:8000";
	private MyAnalysisRepository myAnalysisRepository;
	private LikeRepository likeRepository;

	/**
	 * 사용자가 선호하는 베이스 top 5 리스트 조회
	 * 파이썬  FastAPI로 유사도 분석 자료 전송
	 * 파이썬 FastAPI로부터 유사도가 가장 높은 칵테일 9개 전달받기
	 * @param userId
	 * @return List<Object[]>
	 */
	@Override
	public List<String> recommendCocktailByBase(Long userId) {
		// 사용자가 선호하는 베이스 top 5 조회
		List<Object[]> top5Base = myAnalysisRepository.findTop5BaseByUserId(userId, PageRequest.of(0, 5));
		for (Object[] base : top5Base) {
			String name = (String) base[0];
			Long baseId = (Long) base[1];
			Long count = (Long) base[2];
			System.out.println(name+ "("+ baseId+ ")" + " : " + count);
		}

		return null;
	}

	/**
	 * 사용자가 선호하는 재료 top 5 리스트 조회
	 * 파이썬  FastAPI로 유사도 분석 자료 전송
	 * 파이썬 FastAPI로부터 유사도가 가장 높은 칵테일 9개 전달받기
	 * @param userId
	 * @return List<Object[]>
	 */
	@Override
	public List<String> recommendCocktailByIngredient(Long userId) throws UnirestException, JsonProcessingException{
		// 사용자가 선호하는 재료 top 5 조회
		List<String> userLikeIngredient = new ArrayList<>(); // 파이썬에 보낼 사용자 선호 재료 리스트
		List<Object[]> top5Ingredients = myAnalysisRepository.findTop5IngredientsByUserId(userId, PageRequest.of(0, 5));
		for (Object[] ingredient : top5Ingredients) {
			String name = (String) ingredient[0];
			String ingredientId = (String) ingredient[1];
			Long count = (Long) ingredient[2];
			System.out.println(name+ "("+ ingredientId+ ")" + " : " + count);
			userLikeIngredient.add(ingredientId);
			// top5Ingredients.get(0)[0] 재료 이름
			// top5Ingredients.get(0)[1] 재료 인덱스 (재료 테이블 근거)
			// top5Ingredients.get(0)[2]) 총 개수
		}

		// 사용자가 이전에 좋아요한 칵테일 리스트
		List<String> userLikeList = new ArrayList<>();
		for(Cocktail c : likeRepository.findLikeCocktailAllByUserId(userId)) {
			userLikeList.add(c.getId() + "");
		}

		// 파이썬 통신을 위한 DTO
		RecommendationRequest recommendationRequest = new RecommendationRequest(userLikeIngredient, userLikeList);

		// 파이썬 통신, 추천 칵테일 얻어오기
		List<String> reponse = dataToPython(recommendationRequest);

		return null;
	}


	/**
	 * 파이썬 통신
	 * @param recommendationRequest
	 * @return List<String> : 추천 칵테일 응답 리스트
	 * @throws UnirestException
	 * @throws JsonProcessingException
	 */
	@Override
	public List<String> dataToPython(RecommendationRequest recommendationRequest) throws UnirestException, JsonProcessingException {
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
		RecommendationResponse recommendationResponse = objectMapper.readValue(responseBody, RecommendationResponse.class);
		return recommendationResponse.getCocktailIdList();
	}



}
