package com.ssafy.cocktail.backend.myAnalysis.service.impl;

import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.MyAnalysisRepository;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBase;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBaseInterface;
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
            User user =  oAuthService.getUser(accessToken);
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
}
