package com.ssafy.cocktail.backend.cocktails.service;

import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;

public interface CommentService {
    public boolean registerComment(String cocktailId, CommentReq req, String accessToken);
}
