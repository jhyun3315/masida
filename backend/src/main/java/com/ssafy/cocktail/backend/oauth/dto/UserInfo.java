package com.ssafy.cocktail.backend.oauth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfo {
    String accessToken;
    String refreshToken;
    String userName;

}
