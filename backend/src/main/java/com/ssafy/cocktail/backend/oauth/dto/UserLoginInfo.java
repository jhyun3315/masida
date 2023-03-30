package com.ssafy.cocktail.backend.oauth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginInfo {
    String accessToken;
    String refreshToken;
    String userName;

}
