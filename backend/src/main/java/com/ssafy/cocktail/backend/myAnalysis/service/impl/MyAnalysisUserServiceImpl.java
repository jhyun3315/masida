package com.ssafy.cocktail.backend.myAnalysis.service.impl;

import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.MyAnalysisRepository;
import com.ssafy.cocktail.backend.myAnalysis.dto.*;
import com.ssafy.cocktail.backend.myAnalysis.service.MyAnalysisUserService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
@RequiredArgsConstructor
public class MyAnalysisUserServiceImpl implements MyAnalysisUserService {
    private final MyAnalysisRepository myAnalysisRepository;
    private final OAuthService oAuthService;

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

            System.out.println(interfaceArrayList.size());

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
}
