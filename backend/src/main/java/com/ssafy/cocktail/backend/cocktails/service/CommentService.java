package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;

import java.util.ArrayList;

public interface CommentService {
    public ArrayList<CommentDetail> getComments(String cocktailId, String accessToken);
    public int saveOrUpdateComment(String cocktailId,  String commentId, CommentReq req, String accessToken);
    public boolean removeComment(String cocktailId,  String commentId, String accessToken);
}
