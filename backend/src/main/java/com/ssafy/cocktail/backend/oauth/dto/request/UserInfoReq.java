package com.ssafy.cocktail.backend.oauth.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
public class UserInfoReq {
    @Schema(description = "사용자 성별", example = "female")
    @JsonProperty("user_gender")
    private String userGender;
    @Schema(description = "사용자 연령대", example = "20")
    @JsonProperty("user_age_range")
    private String userAgeRange;
}
