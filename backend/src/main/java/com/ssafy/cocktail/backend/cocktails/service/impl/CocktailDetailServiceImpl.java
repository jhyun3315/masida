package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailDetail;
import com.ssafy.cocktail.backend.cocktails.dto.GarnishDetail;
import com.ssafy.cocktail.backend.cocktails.dto.IngredientDetail;
import com.ssafy.cocktail.backend.cocktails.dto.RecipeDetail;
import com.ssafy.cocktail.backend.cocktails.service.CocktailDetailService;
import com.ssafy.cocktail.backend.domain.entity.*;
import com.ssafy.cocktail.backend.domain.repository.*;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CocktailDetailServiceImpl implements CocktailDetailService {
    private CocktailIngredientRepository cocktailIngredientRepository;
    private CocktailRepository cocktailRepository;
    private CommentRepository commentRepository;
    private IngredientRepository ingredientRepository;
    private LikeRepository likeRepository;
    private BookmarkRepository bookmarkRepository;
    private OAuthService oAuthService;
    private RecipeRepository recipeRepository;

    @Override
    public CocktailDetail getCocktailDetail(String cocktailId, String accessToken) {
        // 칵테일 상세 정보를 리턴한다
        CocktailDetail cocktailDetail = new CocktailDetail(); // 칵테일 상세 정보 객체 생성
        Optional<Cocktail> cocktail = cocktailRepository.findById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        cocktailDetail.setCocktailId(Integer.parseInt(cocktailId)); // 칵테일 아이디 삽입
        cocktailDetail.setCocktailNameKo(cocktail.get().getCocktailNameKo()); // 칵테일 한글 이롬 삽입
        cocktailDetail.setCocktailNameEn(cocktail.get().getCocktailNameEn()); // 칵테일 영어 이름 삽입
        cocktailDetail.setCocktailImg(cocktail.get().getCocktailImg()); // 칵테일 이미지 삽입
        cocktailDetail.setCocktailContent(cocktail.get().getCocktailContent() == null ? "맛있는 칵테일":cocktail.get().getCocktailContent()); // 칵테일 내용 삽입
//        String rating = cocktail.get().getCocktailRating() == null ? "0.0" : String.format("%.1f", cocktail.get().getCocktailRating()); // 칵테일 평점 계산 (소수점 첫째자리 까지 표시)
        String rating = String.format("%.1f", cocktail.get().getCocktailRating()); // 칵테일 평점 계산 (소수점 첫째자리 까지 표시)
        cocktailDetail.setCocktailRating(rating); // 칵테일 평점 삽입
        switch ((int) cocktail.get().getCocktailDifficulty()) { // 칵테일 난이도
            case 1: // 난이도가 1 이면
                cocktailDetail.setCocktailDifficulty("하"); // '하' 난이도 삽입
                break;
            case 2: // 난이도가 2 이면
                cocktailDetail.setCocktailDifficulty("중"); // '중' 난이도 삽입
                break;
            default: // 난이도가 3 이면
                cocktailDetail.setCocktailDifficulty("상"); // '상' 난이도 삽입
                break;
        }
        List<Like> likes = likeRepository.findAllByCocktailAndLikeDeleted(cocktail.get(), false); // 칵테일 좋아요 가져오기
        cocktailDetail.setCocktailLikes(likes.size()); // 칵테일 좋아요 개수 삽입
        List<Comment> cocktails = commentRepository.findAllByCocktailAndCommentDeleted(cocktail.get(), false); // 칵테일 댓글 가져오기
        cocktailDetail.setCocktailComments(cocktails.size()); // 칵테일 댓글 개수 삽입
        if (accessToken != null) { // 로그인한 유저이면
            User user = oAuthService.getUser(accessToken); // 유저 가져오기
            Like like = likeRepository.findByUserAndCocktail(user, cocktail.get()); // 칵테일의 유저 좋아요 가져오기
            cocktailDetail.setLikesChecker(like != null && !like.isLikeDeleted()); // 유저가 좋아요 여부 삽입
            Bookmark bookmark = bookmarkRepository.findByUserAndCocktail(user, cocktail.get()); // 칵테일의 유저 북마크 가져오기
            cocktailDetail.setBookmarkCheckcker(bookmark != null && !bookmark.isBookmarkDeleted()); // 유저가 북마크 여부 삽입
        } else { // 로그인 하지 않은 유저이면
            cocktailDetail.setLikesChecker(false); // 좋아요 여부 false 삽입
            cocktailDetail.setBookmarkCheckcker(false); // 북마크 여부 false 삽입
        }
        cocktailDetail.setGlass(cocktail.get().getCocktailGlass() == null ? "글라스" : cocktail.get().getCocktailGlass()); // 칵테일의 글라스 삽입
        cocktailDetail.setBase(cocktail.get().getCocktailBase()); // 칵테일의 베이스 삽입
        List<CocktailIngredient> cocktailIngredients = cocktailIngredientRepository.findByCocktail(cocktail.get()); // 칵테일 재료 가져오기
        cocktailDetail.setGarnish(new ArrayList<>()); // 가니쉬 리스트 생성
        cocktailDetail.setIngredient(new ArrayList<>()); // 재료 리스트 생성
        cocktailDetail.setRecipe(new ArrayList<>()); // 레시피 리스트 생성
        for (CocktailIngredient ingredient: cocktailIngredients) { // 재료
            if (ingredient.getIngredientType().equals("가니쉬")) { // 재료가 가니쉬 이면
                cocktailDetail.getGarnish().add(new GarnishDetail(ingredient.getIngredientName())); // 가니쉬 추가
            } else { // 가니쉬가 아닌 재료이면
                cocktailDetail.getIngredient().add(new IngredientDetail(ingredient.getIngredientName(), ingredient.getIngredientAmount(), ingredient.getIngredientUnit())); // 가니쉬가 아닌 재료 추가
            }
        }
        List<Recipe> recipes = recipeRepository.findAllByCocktail(cocktail.get()); // 칵테일 제조법 가져오기
        if (recipes.size() == 0) cocktailDetail.getRecipe().add(new RecipeDetail(1, "모두 넣고 섞으세요")); // 예외처리: 제조법이 없을때
        for (Recipe recipe: recipes) { // 제조법
            cocktailDetail.getRecipe().add(new RecipeDetail(recipe.getRecipeNum(), recipe.getRecipeContent())); // 제조법 삽입
        }
        return cocktailDetail;
    }

    @Override
    public void setCocktailLike(Long cocktailId, String accessToken) {
        // 좋아요 체크 상태이면 true, 좋아요 해제 상태이면 false 리턴
        Cocktail cocktail = cocktailRepository.findCocktailById(cocktailId); // 칵테일 가져오기
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        Like like = likeRepository.findByUserAndCocktail(user, cocktail); // 칵테일의 사용자 좋아요 가져오기
        if (like == null) { // 사용자가 칵테일의 좋아요를 누른적이 없다면
            likeRepository.save(
                    Like.builder()
                            .likeDeleted(false)
                            .cocktail(cocktail)
                            .user(user)
                            .likeCreatedDate(LocalDateTime.now())
                            .likeUpdateDate(LocalDateTime.now()).build()
            ); // 좋아요 저장
            return;
        }
        like.setLikeDeleted(!like.isLikeDeleted()); // 좋아요 상태 변환
        like.setLikeUpdateDate(LocalDateTime.now()); // 업데이트 시간 수정
        likeRepository.save(like); // 좋아요 업데이트
    }

    @Override
    public void setCocktailBookMark(Long cocktailId, String accessToken) {
        Cocktail cocktail = cocktailRepository.findCocktailById(cocktailId); // 칵테일 가져오기
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        Bookmark bookmark = bookmarkRepository.findByUserAndCocktail(user, cocktail);
        if (bookmark == null) { // 사용자가 칵테일의 북마크를 누른적이 없다면
            bookmarkRepository.save(
                    Bookmark.builder()
                            .bookmarkDeleted(false)
                            .cocktail(cocktail)
                            .user(user)
                            .bookmarkCreatedDate(LocalDateTime.now())
                            .bookmarkUpdateDate(LocalDateTime.now())
                            .build()
            ); // 북마크 저장
            return;
        }
        bookmark.setBookmarkDeleted(!bookmark.isBookmarkDeleted()); // 북마크 상태 변환
        bookmark.setBookmarkUpdateDate(LocalDateTime.now()); // 업데이트 시간 수정
        bookmarkRepository.save(bookmark); // 북마크 업데이트
    }
}
