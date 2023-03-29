package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


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
        if (user == null) return null;
        Cocktail cocktail = cocktailRepository.findCocktailById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        List<Comment> comments = commentRepository.findAllByCocktailAndCommentDeleted(cocktail, false); // 칵테일 댓글 가져오기
        ArrayList<CommentDetail> commentDetails = new ArrayList<CommentDetail>(); // 댓글을 저장할 객체
        for (Comment comment: comments) {
            User commetUser = comment.getUser(); // 댓글을 작성한 유저 가져오기
            CommentDetail commentDetail = new CommentDetail(); // 댓글 생성
            String commentCreateDate = comment.getCommentCreatedDate().toLocalDate().toString(); // 날짜를 년-월-일 형식으로 변환
            String commentDifficulty =
                    (int) comment.getCommentDifficulty() == 1 ? "하" :
                            (int) comment.getCommentDifficulty() == 2 ? "중" : "상"; // 난이도를 하, 상, 중 으로 변환
            boolean writerChecker = commetUser.equals(user); // 작성자 확인
            commentDetail.setCommentId(comment.getId()); // id 삽입
            commentDetail.setCommentContent(comment.getCommentContent()); // 내용 삽입
            commentDetail.setCommentRating(comment.getCommentRating()); // 평점 삽입
            commentDetail.setCommentCreateDate(commentCreateDate); // 생성일자 삽입
            commentDetail.setCommentDifficulty(commentDifficulty); // 난이도 삽입
            commentDetail.setUserName(commetUser.getUserName()); // 작성자 이름 삽입
            commentDetail.setUserProfile(commetUser.getUserProfile()); // 작성자 프로필 삽입
            commentDetail.setWriterChecker(writerChecker); // 작성자 확인 삽입
            commentDetails.add(commentDetail); // 댓글 삽입
        }

        return commentDetails;
    }

    @Override
    public boolean saveOrUpdateComment(String cocktailId, String commentId, CommentReq commentInfo, String accessToken) {
        // 댓글 등록 또는 수정
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        if (user == null) return false;
        Cocktail cocktail = cocktailRepository.findCocktailById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        List<Comment> commets = commentRepository.findAllByCocktailAndCommentDeleted(cocktail, false); // 칵테일 댓글 가져오기
        int commentSize = commets.size(); // 칵테일의 댓글 전체 개수
        double curCocktailDiffculty =
                commentInfo.getCommentDifficulty().equals("하") ? 1.0 :
                        commentInfo.getCommentDifficulty().equals("중") ? 2.5 : 4.0; // 댓글 난이도
        double curCocktailRating = commentInfo.getCommentRating(); // 댓글 평점
        double difficultySum = cocktail.getCocktailDifficulty() * commentSize; // 난이도의 총점
        double ratingSum = cocktail.getCocktailRating() * commentSize; // 평점의 총점

        if (commentId == null) { // 댓글 등록 이면
            commentRepository.save( // 댓글 저장
                    Comment.builder()
                            .commentContent(commentInfo.getCommentContent()) // 내용 삽입
                            .commentRating(curCocktailRating) // 평점 삽입
                            .commentDifficulty(curCocktailDiffculty) // 난이도 삽입
                            .commentDeleted(false) // 삭제 여부 삽입
                            .commentCreatedDate(LocalDateTime.now()) // 생성일 삽입
                            .commentUpdateDate(LocalDateTime.now()) // 수정일 삽입
                            .user(user) // 사용자 삽입
                            .cocktail(cocktail) // 칵테일 삽입
                            .build()
            );
            commentSize++; // 댓글 개수 증가
            difficultySum += curCocktailDiffculty; // 난이도의 총점 증가
            ratingSum += curCocktailRating; // 평점의 총점 증가
        } else { // 댓글 수정 이면
            Optional<Comment> comment = commentRepository.findById(Long.valueOf(commentId)); // 댓글 가져오기
            difficultySum -= comment.get().getCommentDifficulty(); // 이전 난이도 제거
            ratingSum -= comment.get().getCommentRating(); // 이전 평점 제거
            comment.get().setCommentContent(commentInfo.getCommentContent()); // 내용 업데이트
            comment.get().setCommentRating(curCocktailRating); // 평점 업데이트
            comment.get().setCommentDifficulty(curCocktailDiffculty); // 난이도 업데이트
            commentRepository.save(comment.get()); // 댓글 업데이트
            difficultySum += comment.get().getCommentDifficulty(); // 새로운 난이도 총점
            ratingSum += comment.get().getCommentRating(); // 새로운 평점 총점
        }

        double newCocktailDiffculty = difficultySum / commentSize; // 새로운 난이도 계산
        cocktail.setCocktailDifficulty(newCocktailDiffculty); // 새로운 칵테일 난이도 삽입
        double newCocktailRating = ratingSum / commentSize; // 새로운 평점 계산
        cocktail.setCocktailRating(newCocktailRating); // 새로운 칵테일 평점 삽입
        cocktail.setRoomUpdateBy(user.getId()); // 수정자 삽입
        cocktail.setCommentUpdateDate(LocalDateTime.now()); // 수정일 삽입
        cocktailRepository.save(cocktail); // 칵테일 난이도, 평점 업데이트

        return true;
    }

    @Override
    public boolean removeComment(String cocktailId, String commentId, String accessToken) {
        // 댓글 삭제
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        if (user == null) return false;
        Cocktail cocktail = cocktailRepository.findCocktailById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        List<Comment> commets = commentRepository.findAllByCocktailAndCommentDeleted(cocktail, false); // 칵테일 댓글들 가져오기
        Optional<Comment> removeComment = commentRepository.findById(Long.valueOf(commentId)); // 제거할 댓글 가져오기
        int commentSize = commets.size(); // 칵테일의 댓글 전체 개수
        double curCocktailDiffculty = removeComment.get().getCommentDifficulty(); // 제거할 댓글의 난이도
        double curCocktailRating = removeComment.get().getCommentRating(); // 제거할 댓글의 평점
        double difficultySum = cocktail.getCocktailDifficulty() * commentSize; // 난이도의 총점
        double ratingSum = cocktail.getCocktailRating() * commentSize; // 평점의 총점

        removeComment.get().setCommentDeleted(true); // 댓글 삭제 체크
        commentRepository.save(removeComment.get()); // 댓글 업데이트
        difficultySum -= curCocktailDiffculty; // 새로운 난이도 총점
        ratingSum -= curCocktailRating; // 새로운 평점 총점
        commentSize--; // 댓글 개수 감소

        double newCocktailDiffculty = difficultySum / commentSize; // 새로운 난이도 계산
        cocktail.setCocktailDifficulty(newCocktailDiffculty); // 새로운 칵테일 난이도 삽입
        double newCocktailRating = ratingSum / commentSize; // 새로운 평점 계산
        cocktail.setCocktailRating(newCocktailRating); // 새로운 칵테일 평점 삽입
        cocktail.setRoomUpdateBy(user.getId()); // 수정자 삽입
        cocktail.setCommentUpdateDate(LocalDateTime.now()); // 수정일 삽입
        cocktailRepository.save(cocktail); // 칵테일 난이도, 평점 업데이트

        return true;
    }
}
