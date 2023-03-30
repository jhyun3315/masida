package com.ssafy.cocktail.backend.oauth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class UserInfo {
    @Schema(description = "사용자 이름", example = "이싸피")
    @JsonProperty("user_name")
    private String userName;
    @Schema(description = "사용자 이메일", example = "ssafy@ssafy.com")
    @JsonProperty("user_email")
    private String userEmail;
    @Schema(description = "사용자 프로필 사진", example = "/image")
    @JsonProperty("user_profile")
    private String userProfile;
    @Schema(description = "사용자 성별", example = "female")
    @JsonProperty("user_gender")
    private String userGender;
    @Schema(description = "사용자 연령대", example = "20")
    @JsonProperty("user_age_range")
    private String userAgeRange;
}
