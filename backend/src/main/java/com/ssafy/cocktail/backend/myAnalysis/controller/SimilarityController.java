//package com.ssafy.cocktail.backend.myAnalysis.controller;
//
//import com.ssafy.cocktail.backend.myAnalysis.service.impl.SimilarityServiceImpl;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import reactor.core.publisher.Mono;
//
//import java.util.Map;
//
//@RequiredArgsConstructor
//@RestController
//public class SimilarityController {
//	private final SimilarityServiceImpl similarityService;
//
//
//	@PostMapping("/similarity")
//	public Mono<Map<String, Double>> getSimilarity(@RequestBody Map<String, Object> userPreference) {
//		System.out.println(userPreference.get("칵테일1"));
//		System.out.println(userPreference.get("칵테일2"));
//		System.out.println(userPreference.get("칵테일3"));
//		return similarityService.getSimilarity(userPreference);
//	}
//}
