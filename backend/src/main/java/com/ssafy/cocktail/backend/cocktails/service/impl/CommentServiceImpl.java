package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;

public class CommentServiceImpl implements CommentService {
    private CommentRepository commentRepository;
    @Override
    public boolean registerComment(CommentReq req) {
        
        return true;
    }
}
