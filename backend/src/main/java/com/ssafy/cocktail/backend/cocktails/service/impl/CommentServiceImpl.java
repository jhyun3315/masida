package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    private CommentRepository commentRepository;
    private OAuthService oAuthService;
    private CocktailRepository cocktailRepository;

    @Override
    public ArrayList<CommentDetail> getComments(String cocktailId, String accessToken) {
        // 칵테일 댓글을 리턴
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        Cocktail cocktail = cocktailRepository.findCocktailById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        List<Comment> comments = commentRepository.findAllByCocktailAndCommentDeleted(cocktail, false); // 칵테일 댓글 가져오기
        ArrayList<CommentDetail> commentDetails = new ArrayList<CommentDetail>(); // 댓글을 저장할 객체
        for (Comment comment: comments) {
            CommentDetail commentDetail = new CommentDetail(); // 댓글 생성
            String commentCreateDate = comment.getCommentCreatedDate().toLocalDate().toString(); // 날짜를 년-월-일 형식으로 변환
            String commentDifficulty =
                    (int) comment.getCommentDifficulty() == 1 ? "하" :
                            (int) comment.getCommentDifficulty() == 2 ? "중" : "상"; // 난이도를 하, 상, 중 으로 변환
            boolean writerChecker = comment.getUser().equals(user); // 작성자 확인
            commentDetail.setCommentId(comment.getId()); // id 삽입
            commentDetail.setCommentContent(comment.getCommentContent()); // 내용 삽입
            commentDetail.setCommentRating(comment.getCommentRating()); // 평점 삽입
            commentDetail.setCommentCreateDate(commentCreateDate); // 생성일자 삽입
            commentDetail.setCommentDifficulty(commentDifficulty); // 난이도 삽입
            commentDetail.setUserName(user.getUserName()); // 작성자 이름 삽입
            commentDetail.setUserProfile(user.getUserProfile()); // 작성자 프로필 삽입
            commentDetail.setWriterChecker(writerChecker); // 작성자 확인 삽입
            commentDetails.add(commentDetail); // 댓글 삽입
        }

        return commentDetails;
    }

    @Override
    public boolean registerComment(String cocktailId, CommentReq commentInfo, String accessToken) {
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        Cocktail cocktail = cocktailRepository.findCocktailById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        double curCocktailDiffculty =
                commentInfo.getCommentDifficulty().equals("하") ? 1.0 :
                commentInfo.getCommentDifficulty().equals("중") ? 2.0 : 3.0;
        Double curCocktailRating = commentInfo.getCommentRating();
        commentRepository.save( // 댓글 저장
                Comment.builder()
                        .commentContent(commentInfo.getCommentContent())
                        .commentRating(curCocktailRating)
                        .commentDifficulty(curCocktailDiffculty)
                        .commentDeleted(false)
                        .commentCreatedDate(LocalDateTime.now())
                        .commentUpdateDate(LocalDateTime.now())
                        .user(user)
                        .cocktail(cocktail)
                        .build()
        );
        List<Comment> commets = commentRepository.findAllByCocktailAndCommentDeleted(cocktail, false); // 칵테일 댓글 가져오기
        int commentSize = commets.size() - 1; // 칵테일 댓글 개수
        double prevCocktailDiffculty = cocktail.getCocktailDifficulty(); // 저장된 칵테일 난이도 가져오기
        double newCocktailDiffculty = ((prevCocktailDiffculty * commentSize) + curCocktailDiffculty) / (commentSize + 1); // 새로운 난이도 계산
        cocktail.setCocktailDifficulty(newCocktailDiffculty); // 새로운 난이도 삽입
        double prevCocktailRating = cocktail.getCocktailRating() == null
                ? 0.0 : cocktail.getCocktailRating(); // 저장된 칵테일 평점 가져오기
        double newCocktailRating = ((prevCocktailRating * commentSize) + curCocktailRating) / (commentSize + 1); // 새로운 평점 계산
        cocktail.setCocktailRating(newCocktailRating); // 새로운 칵테일 평점 삽입
        cocktail.setRoomUpdateBy(cocktail.getId()); // 수정자 삽입
        cocktail.setCommentUpdateDate(LocalDateTime.now()); // 수정일 삽입
        cocktailRepository.save(cocktail); // 칵테일 난이도, 평점 업데이트

        return true;
    }
}
