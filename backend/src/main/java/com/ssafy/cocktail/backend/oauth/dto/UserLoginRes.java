package com.ssafy.cocktail.backend.oauth.dto;

import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Schema(defaultValue = "UserLoginResponse")
public class UserLoginRes extends BaseResponseBody {
    @Schema(name="JWT access 인증 토큰", example = "ekdif123SDKVIdf1231...")
    String accessToken;
    @Schema(name="유저 이름", example = "김싸피")
    String userName;
//    UserLoginInfo userLoginInfo;

    public static UserLoginRes of(Integer statusCode, String message, String accessToken, String userName) {
        UserLoginRes res = new UserLoginRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAccessToken(accessToken);
        res.setUserName(userName);

        return res;
    }
}
