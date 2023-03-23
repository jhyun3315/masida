package com.ssafy.cocktail.backend.oauth.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Schema(defaultValue = "UserLoginResponse")
public class UserLoginRes extends BaseResponseBody {
    @Schema(name="JWT access 인증 토큰", example = "ekdif123SDKVIdf1231...")
    @JsonProperty(value = "access_token", access = JsonProperty.Access.READ_WRITE)
    String accessToken;
    @JsonProperty(value = "user_name", access = JsonProperty.Access.READ_WRITE)
    @Schema(name="유저 이름", example = "김싸피")
    String userName;

    public static UserLoginRes of(Integer statusCode, String message, String accessToken, String userName) {
        UserLoginRes res = new UserLoginRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAccessToken(accessToken);
        res.setUserName(userName);

        return res;
    }
}
