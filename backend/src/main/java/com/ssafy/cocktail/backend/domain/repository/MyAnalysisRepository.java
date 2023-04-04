package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.myAnalysis.dto.*;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface MyAnalysisRepository  extends CrudRepository<Cocktail, Long> {
    @Query(value="SELECT cocktails.cocktail_base as BaseName, " +
            "count(cocktails.cocktail_base) as BaseCount, " +
            "round( count(cocktails.cocktail_base) / sum(count(cocktails.cocktail_base)) over(),2)*100 as BaseRatio " +
            "FROM likes As l " +
            "INNER JOIN cocktails ON cocktails.cocktail_id = l.cocktail_id " +
            "WHERE l.like_deleted = false AND l.user_id=:userId " +
            "GROUP BY cocktails.cocktail_base " +
            "ORDER BY BaseCount DESC LIMIT 5"
            ,nativeQuery = true)
    ArrayList<MyAnalysisBaseInterface> getMyAnalysisBaseList(@Param("userId") Long user_id);

    @Query(value="SELECT ColorName, " +
            "COUNT(ColorName) AS ColorCount, " +
            "ROUND(COUNT(ColorName) / SUM(COUNT(ColorName)) OVER(), 2) * 100 AS ColorRatio " +
            "FROM (" +
                "SELECT cocktails.cocktail_color1 AS ColorName FROM cocktails " +
                "INNER JOIN likes AS l ON cocktails.cocktail_id = l.cocktail_id " +
                "WHERE l.like_deleted = false AND l.user_id=:userId " +
                "UNION ALL " +
                "SELECT cocktails.cocktail_color2 AS ColorName " +
                "FROM cocktails " +
                "INNER JOIN likes AS l ON cocktails.cocktail_id = l.cocktail_id " +
                "WHERE l.like_deleted = false AND l.user_id =:userId " +
            ") AS ColorTable " +
            "GROUP BY ColorName " +
            "ORDER BY ColorCount DESC " +
            "LIMIT 5"
            ,nativeQuery = true)
    ArrayList<MyAnalysisColorInterface> getMyAnalysisColorList(@Param("userId") Long user_id);

    @Query(value="SELECT ci.ingredient_name As IngredientName, " +
            "COUNT(ci.ingredient_name) AS IngredientCount, " +
            "round(COUNT(ci.ingredient_name) / SUM(COUNT(ci.ingredient_name)) OVER(),2)* 100  AS IngredientRatio " +
            "FROM likes l " +
            "INNER JOIN cocktails As c ON l.cocktail_id = c.cocktail_id " +
            "INNER JOIN cocktail_ingredient As ci ON c.cocktail_id = ci.cocktail_id " +
            "INNER JOIN ingredient AS i ON ci.ingredient_id = i.ingredient_id "+
            "WHERE l.like_deleted = false " +
            "AND (i.ingredient_type = 'Garnish' OR i.ingredient_type = 'General') " +
            "AND l.user_id=:userId " +
            "GROUP BY ci.ingredient_name " +
            "ORDER BY IngredientCount DESC LIMIT 5"
            ,nativeQuery = true)
    ArrayList<MyAnalysisIngredientInterface> getMyAnalysisIngredientList(@Param("userId") Long user_id);

    @Query(value ="SELECT c.cocktail_name_ko As CocktailNameKo, " +
            "c.cocktail_name_en As CocktailNameEn, "+
            "COUNT(c.cocktail_name_ko) As CocktailCount, " +
            "round(COUNT(c.cocktail_name_ko)/ SUM(COUNT(c.cocktail_name_ko)) OVER(),2)*100 AS CocktailRatio " +
            "FROM likes As l " +
            "INNER JOIN cocktails As c ON l.cocktail_id = c.cocktail_id " +
            "INNER JOIN users As u ON l.user_id = u.user_id " +
            "WHERE u.user_deleted=false " +
            "AND u.user_id !=:userId " +
            "AND u.user_gender =:gender " +
            "AND u.user_age_range =:ageRange " +
            "AND l.like_deleted = false " +
            "GROUP BY c.cocktail_name_ko, c.cocktail_name_en " +
            "ORDER BY CocktailCount DESC LIMIT 5"
        , nativeQuery = true)

    ArrayList<MyAnalysisOthersInterface> getMyAnalysisOthersList(@Param("userId") Long user_id,@Param("gender") String user_gender, @Param("ageRange") String user_ageRange);

    @Query(value="SELECT m.comment_rating As RatingScore, " +
            "c.cocktail_base As BaseName, " +
            "count(c.cocktail_base) BaseCount " +
            "FROM comments As m " +
            "INNER JOIN cocktails c ON c.cocktail_id = m.cocktail_id " +
            "WHERE m.comment_deleted = false AND m.user_id=:userId " +
            "GROUP BY m.comment_rating, c.cocktail_base " +
            "ORDER BY RatingScore DESC "
            ,nativeQuery = true)
    ArrayList<MyAnalysisRatingBaseInterface> getMyAnalysisRatingBaseList(@Param("userId") Long user_id);

@Query(value="SELECT ColorTable.RatingScore, " +
        "ColorTable.ColorName, " +
        "COUNT(ColorTable.ColorName) AS ColorCount " +
        "FROM (" +
            "SELECT cocktails.cocktail_color1 AS ColorName, " +
            "comments.comment_rating AS RatingScore " +
            "FROM cocktails " +
            "INNER JOIN comments ON cocktails.cocktail_id = comments.cocktail_id " +
            "WHERE comments.comment_deleted = false AND comments.user_id=:userId " +
            "UNION ALL " +
            "SELECT cocktails.cocktail_color2 AS ColorName, comments.comment_rating AS RatingScore " +
            "FROM cocktails " +
            "INNER JOIN comments ON cocktails.cocktail_id = comments.cocktail_id " +
            "WHERE comments.comment_deleted = false AND comments.user_id=:userId " +
        ") AS ColorTable " +
        "GROUP BY ColorTable.ColorName, ColorTable.RatingScore " +
        "ORDER BY ColorTable.RatingScore DESC", nativeQuery = true)
    ArrayList<MyAnalysisRatingColorInterface> getMyAnalysisRatingColorList(@Param("userId") Long user_id);

    @Query(value="SELECT m.comment_rating As RatingScore, " +
            "ci.ingredient_name As IngredientName, " +
            "count(ci.ingredient_name) IngredientCount " +
            "FROM comments As m " +
            "INNER JOIN cocktails c ON c.cocktail_id = m.cocktail_id " +
            "INNER JOIN cocktail_ingredient ci ON ci.cocktail_id = m.cocktail_id " +
            "WHERE m.comment_deleted = false AND m.user_id=:userId " +
            "GROUP BY m.comment_rating, ci.ingredient_name " +
            "ORDER BY RatingScore DESC "
            ,nativeQuery = true)
    ArrayList<MyAnalysisRatingIngredientInterface> getMyAnalysisRatingIngredientList(@Param("userId") Long user_id);


    // 추천 알고리즘용 분석 - 사용자의 베이스 취향에 따른 칵테일 추천
    @Query("SELECT ci.ingredientName, ci.ingredient.id, COUNT(ci) as cnt " +
            "FROM CocktailIngredient ci " +
            "WHERE ci.cocktail.id IN (SELECT l.cocktail.id " +
                                    "FROM Like l " +
                                    "WHERE l.user.id = :userId " +
                                    "AND l.likeDeleted = false )" +
            "AND ci.ingredient.ingredientType NOT IN ('General', 'Garnish') " +
            "GROUP BY ci.ingredientName, ci.ingredient.id " +
            "ORDER BY cnt DESC")
    List<Object[]> findTop5BaseByUserId(@Param("userId") Long userId, Pageable pageable);


    // 추천 알고리즘용 분석 - 사용자의 재료 취향에 따른 칵테일 추천
    @Query("SELECT ci.ingredientName, ci.ingredient.id, COUNT(ci) as cnt " +
            "FROM CocktailIngredient ci " +
            "WHERE ci.cocktail.id IN (SELECT l.cocktail.id " +
                                    "FROM Like l " +
                                    "WHERE l.user.id = :userId " +
                                    "AND l.likeDeleted = false )" +
            "AND ci.ingredient.ingredientType IN ('General', 'Garnish') " +
            "GROUP BY ci.ingredientName, ci.ingredient.id " +
            "ORDER BY cnt DESC")
    List<Object[]> findTop5IngredientsByUserId(@Param("userId") Long userId, Pageable pageable);

}
