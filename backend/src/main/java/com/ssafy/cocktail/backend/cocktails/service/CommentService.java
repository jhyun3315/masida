package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;

import java.util.ArrayList;

public interface CommentService {
    public ArrayList<CommentDetail> getComments(String cocktailId, String accessToken);
    public boolean registerOrUpdateComment(String cocktailId, CommentReq req, String accessToken, boolean check);
}
