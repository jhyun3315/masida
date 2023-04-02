package com.ssafy.cocktail.backend.myAnalysis.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailRecommendDetail;
import com.ssafy.cocktail.backend.domain.entity.*;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.MyAnalysisRepository;
import com.ssafy.cocktail.backend.domain.repository.RecommendColorRepository;
import com.ssafy.cocktail.backend.domain.repository.RecommendIngredientRepository;
import com.ssafy.cocktail.backend.myAnalysis.dto.*;
import com.ssafy.cocktail.backend.myAnalysis.service.MyAnalysisUserService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
//@RequiredArgsConstructor
@AllArgsConstructor
public class MyAnalysisUserServiceImpl implements MyAnalysisUserService {
    private final MyAnalysisRepository myAnalysisRepository;
    private final OAuthService oAuthService;
    private CocktailRepository cocktailRepository; // 칵테일 추천 9개 테스트를 위해 삽입
    private RecommendIngredientRepository recommendIngredientRepository; // 칵테일 추천 9개 테스트를 위해 삽입

    @Override
    public ArrayList<MyAnalysisBase> getAnalysisByBase(String accessToken) {
        try{
            User user = oAuthService.getUser(accessToken);
            ArrayList<MyAnalysisBaseInterface> interfaceArrayList = myAnalysisRepository.getMyAnalysisBaseList(user.getId());
            ArrayList<MyAnalysisBase> myAnalysisBaseArrayList = new ArrayList<>();

            for(MyAnalysisBaseInterface ele : interfaceArrayList){
                myAnalysisBaseArrayList.add(new MyAnalysisBase(ele.getBaseName(), ele.getBaseCount(), ele.getBaseRatio()));
            }
            return myAnalysisBaseArrayList;
        }catch (Exception e){
            return new ArrayList<>();
        }
    }

    @Override
    public ArrayList<MyAnalysisColor> getAnalysisByColor(String accessToken) {
        try{
            User user =  oAuthService.getUser(accessToken);
            ArrayList<MyAnalysisColorInterface> interfaceArrayList = myAnalysisRepository.getMyAnalysisColorList(user.getId());
            ArrayList<MyAnalysisColor> myAnalysisColorArrayList = new ArrayList<>();

            for(MyAnalysisColorInterface ele : interfaceArrayList){
                ColorRGB rgb = ColorRGB.valueOf(ele.getColorName());
                myAnalysisColorArrayList.add(new MyAnalysisColor(ele.getColorName(),rgb.getValue(), ele.getColorCount(), ele.getColorRatio()));
            }
            return myAnalysisColorArrayList;
        }catch (Exception e){
            return new ArrayList<>();
        }
    }

    @Override
    public ArrayList<MyAnalysisIngredient> getAnalysisByIngredient(String accessToken) {
        try{
            User user =  oAuthService.getUser(accessToken);
            ArrayList<MyAnalysisIngredientInterface> interfaceArrayList = myAnalysisRepository.getMyAnalysisIngredientList(user.getId());
            ArrayList<MyAnalysisIngredient> myAnalysisIngredientArrayList = new ArrayList<>();

            for(MyAnalysisIngredientInterface ele : interfaceArrayList){
                myAnalysisIngredientArrayList.add(new MyAnalysisIngredient(ele.getIngredientName(), ele.getIngredientCount(), ele.getIngredientRatio()));
            }
            return myAnalysisIngredientArrayList;
        }catch (Exception e){
            return new ArrayList<>();
        }
    }

    @Override
    public ArrayList<MyAnalysisOthers> getAnalysisByOthers(String accessToken) {
        try{
            User user =  oAuthService.getUser(accessToken);

            ArrayList<MyAnalysisOthersInterface> interfaceArrayList = myAnalysisRepository.getMyAnalysisOthersList(user.getId(), user.getUserGender(),user.getUserAgeRange());
            ArrayList<MyAnalysisOthers> myAnalysisOthersArrayList = new ArrayList<>();

            for(MyAnalysisOthersInterface ele : interfaceArrayList){
                myAnalysisOthersArrayList.add(new MyAnalysisOthers(ele.getCocktailNameKo(), ele.getCocktailCount(), ele.getCocktailRatio()));
            }
            return myAnalysisOthersArrayList;
        }catch (Exception e){
            return new ArrayList<>();
        }
    }

    @Override
    public RatingBase getAnalysisByRatingBase(String accessToken) {
        RatingBase ratingBase = new RatingBase();
        // 별점 평균
        double rating_average = 0;
        // 전체 별점 점수
        int total_rating = 0;
        // 별점 전체 개수
        int rating_count =0;
        // 최대 별점
        int rating_max = Integer.MIN_VALUE;
        // 최대 별점 베이스
        String rating_max_base = "";

        try{
            User user =  oAuthService.getUser(accessToken);
            ArrayList<MyAnalysisRatingBaseInterface> interfaceArrayList = myAnalysisRepository.getMyAnalysisRatingBaseList(user.getId());
            ArrayList<HashMap<String, Integer>> myAnalysisRatingBaseArrayList = new ArrayList<>();
            HashMap<Integer, HashMap<String,Integer>> map = new HashMap<>();

            for (int i = 1; i <= 5; i++) map.put(i, new RatingBaseObj(i).getBMap());

            //데이터 정제 필요 ***
            for(MyAnalysisRatingBaseInterface ele : interfaceArrayList){
                int rating = ele.getRatingScore();
                int base_count = ele.getBaseCount();
                BaseEnum base = BaseEnum.valueOf(ele.getBaseName());
                String base_name = base.getValue();

                rating_count += base_count;
                total_rating +=rating;

                // 최대 별점이라면, 최대 별점 베이스 & 최대 별점 갱신
                if(rating > rating_max) {
                    rating_max_base = base_name;
                    rating_max = rating;
                }

                //기존 ArrayList에 RatingBase 객체 추가
                HashMap<String,Integer> bMap = map.get(rating);
                bMap.put(base_name, bMap.getOrDefault(base_name, 0)+ base_count);
                map.put(rating, bMap);
            }


            for(int key : map.keySet()){
                myAnalysisRatingBaseArrayList.add(map.get(key));
            }

            rating_average = (double) total_rating/rating_count;
            ratingBase = new RatingBase(rating_average, rating_count, rating_max, rating_max_base, myAnalysisRatingBaseArrayList);

            return ratingBase;

        }catch (Exception e){
            return ratingBase;
        }
    }

    @Override
    public RatingColor getAnalysisByRatingColor(String accessToken) {
        RatingColor ratingColor = new RatingColor();
        double rating_average = 0;
        int total_rating = 0;
        int rating_count =0;
        int rating_max = Integer.MIN_VALUE;
        String rating_max_color = "";

        try{
            User user =  oAuthService.getUser(accessToken);
            ArrayList<MyAnalysisRatingColorInterface> interfaceArrayList = myAnalysisRepository.getMyAnalysisRatingColorList(user.getId());
            ArrayList<HashMap<String, Integer>> myAnalysisRatingColorArrayList = new ArrayList<>();
            HashMap<Integer, HashMap<String,Integer>> map = new HashMap<>();

            //데이터 정제 필요 ***
            for(MyAnalysisRatingColorInterface ele : interfaceArrayList){
                int rating = ele.getRatingScore();
                int color_count = ele.getColorCount();

                ColorEnum color = ColorEnum.valueOf(ele.getColorName());
                String color_name =  color.getValue();

                rating_count += color_count;
                total_rating +=rating;

                // 최대 별점이라면, 최대 별점 베이스 & 최대 별점 갱신
                if(rating > rating_max) {
                    rating_max_color = color_name;
                    rating_max = rating;
                }

                // 해당 rating 이 존재하지 않으면, 새로운 base 정보 추가
                if(!map.containsKey(rating)){
                    HashMap<String, Integer> ColorMap = new HashMap<>();
                    ColorMap.put( "rating_score", rating);
                    ColorMap.put( "red", 0);
                    ColorMap.put( "orange", 0);
                    ColorMap.put( "pink", 0);
                    ColorMap.put( "yellow", 0);
                    ColorMap.put( "green", 0);
                    ColorMap.put( "blue", 0);
                    ColorMap.put( "violet", 0);
                    ColorMap.put( "purple", 0);
                    ColorMap.put( "brown", 0);

                    ColorMap.put(color_name, ColorMap.getOrDefault(color_name, 0) +color_count);
                    map.put(rating, ColorMap);

                }else{
                    // 해당 rating이 존재, 기존 ArrayList에 RatingBase 객체 추가
                    HashMap<String,Integer> bMap = map.get(rating);
                    bMap.put(color_name, bMap.getOrDefault(color_name, 0) +color_count);
                    map.put(rating, bMap);
                }
            }

            for(int key : map.keySet()){
                myAnalysisRatingColorArrayList.add(map.get(key));
            }

            rating_average = (double) total_rating/rating_count;
            ratingColor = new RatingColor(rating_average, rating_count, rating_max, rating_max_color, myAnalysisRatingColorArrayList);

            return ratingColor;

        }catch (Exception e){
            return ratingColor;
        }
    }

    @Override
    public ArrayList<TestRecommend> getRecommendTest(String accessToken) {
        // 추천 테스트로 임의 9개 리턴
        ArrayList<TestRecommend> results = new ArrayList<>(); // 칵테일 추천 상위 6개를 저장하는 객체
        Optional<Cocktail> cocktail = cocktailRepository.findById(1L); // 칵테일 가져오기
        ArrayList<Cocktail> recommends = new ArrayList<>(); // 추천 칵테일 9개 목록
        RecommendIngredient recommendIngredient = recommendIngredientRepository.findByCocktail(cocktail.get()); // 재료 기반 추천 상위 6개 가져오기
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient1())); // 추천 1번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient2())); // 추천 2번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient3())); // 추천 3번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient4())); // 추천 4번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient5())); // 추천 5번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient6())); // 추천 6번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient1())); // 추천 7번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient2())); // 추천 8번 삽입
        recommends.add(cocktailRepository.findCocktailById(recommendIngredient.getRecommendIngredient3())); // 추천 9번 삽입

        for (Cocktail recommend: recommends) { // 추천 칵테일
            TestRecommend testRecommend = new TestRecommend();
            testRecommend.setCocktailId(recommend.getId()); // 칵테일 id 삽입
            testRecommend.setCocktailNameKo(recommend.getCocktailNameKo()); // 칵테일 한글 이름 삽입
            testRecommend.setCocktailImg(recommend.getCocktailImg()); // 칵테일 이미지 삽입
            results.add(testRecommend); // 추천 칵테일 삽입
        }

        return results;
    }
}
