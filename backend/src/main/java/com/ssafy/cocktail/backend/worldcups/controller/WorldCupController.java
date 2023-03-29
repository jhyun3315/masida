package com.ssafy.cocktail.backend.worldcups.controller;

import com.ssafy.cocktail.backend.worldcups.dto.CocktailWorldCupDetail;
import com.ssafy.cocktail.backend.worldcups.dto.response.CocktailWorldCupRes;
import com.ssafy.cocktail.backend.worldcups.service.WorldCupService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@Tag(name = "worldcup", description = "월드컵 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
@RequestMapping("/api/worldcups")
public class WorldCupController {
    private WorldCupService worldCupService;
    @GetMapping
    public ResponseEntity<CocktailWorldCupRes> getWordCupMembers() {
        ArrayList<CocktailWorldCupDetail> members = worldCupService.getWorldCupCocktails(); // 칵테일을 랜덤으로 16개 가져오기
        return ResponseEntity.status(200).body(CocktailWorldCupRes.of(200, "Success", members));
    }

}
