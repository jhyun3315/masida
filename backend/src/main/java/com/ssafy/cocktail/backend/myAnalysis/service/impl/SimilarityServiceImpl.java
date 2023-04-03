//package com.ssafy.cocktail.backend.myAnalysis.service.impl;
//
//import org.springframework.core.ParameterizedTypeReference;
//import org.springframework.stereotype.Service;
//import org.springframework.web.reactive.function.client.WebClient;
//import reactor.core.publisher.Mono;
//
//import java.util.Map;
//
//@Service
//public class SimilarityServiceImpl {
//	private final String apiUrl = "http://localhost:8000/similarity";
//	private final WebClient webClient;
//
//	public SimilarityServiceImpl() {
//		this.webClient = WebClient.create(apiUrl);
//	}
//
//	public Mono<Map<String, Double>> getSimilarity(Map<String, Object> userPreference) {
//		return webClient.post()
//				.uri("/similarity")
//				.bodyValue(userPreference)
//				.retrieve()
//				.bodyToMono(new ParameterizedTypeReference<Map<String, Double>>() {});
//	}
//}
