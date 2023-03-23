package com.ssafy.cocktail.backend.oauth.service;

import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.oauth.dto.UserInfo;

import java.io.IOException;

public interface CustomOAuth2UserService {
	public UserInfo loginUser(String authorize_code) throws Exception;
	public String getKakaoAccessToken(String authorize_code);
	public void saveOrUpdate(String access_Token) throws IOException;
	// public boolean isVaildAccessToken(String accessToken, String id);

	public User getUser(String accessToken);

}