package com.ssafy.cocktail.backend.cocktails.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Setter;

import java.util.ArrayList;

@Setter
public class CommentRes extends BaseResponseBody {
    @Schema(name="칵테일 댓글", example = "칵테일 댓글")
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    ArrayList<CommentDetail> data;

    public static CommentRes of(Integer statusCode, String message, ArrayList<CommentDetail> CommentDetails) {
        CommentRes res = new CommentRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setData(CommentDetails);

        return res;
    }
}
