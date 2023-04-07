package com.ssafy.cocktail.backend.oauth.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.oauth.dto.UserInfo;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;
import lombok.ToString;

@Setter
@ToString
public class UserInfoRes extends BaseResponseBody {
    @Schema(description = "사용자 정보", example = "이름, 이메일, 프로필, 성별, 연령대")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    UserInfo data;

    public static UserInfoRes of(Integer statusCode, String message, UserInfo data) {
        UserInfoRes res = new UserInfoRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(data);

        return res;
    }

}
