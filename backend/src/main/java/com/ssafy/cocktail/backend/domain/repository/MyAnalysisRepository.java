package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBaseInterface;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisColorInterface;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisIngredientInterface;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisOthersInterface;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

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

    @Query(value="SELECT cocktails.cocktail_color1 As ColorName, " +
            "COUNT(cocktails.cocktail_color1) As ColorCount, " +
            "ROUND(COUNT(cocktails.cocktail_color1) / SUM(COUNT(cocktails.cocktail_color1)) over(), 2)*100 As ColorRatio " +
            "FROM likes As l " +
            "INNER JOIN cocktails ON cocktails.cocktail_id = l.cocktail_id " +
            "WHERE l.like_deleted = false AND l.user_id=:userId " +
            "GROUP BY cocktails.cocktail_color1 " +
            "ORDER BY ColorCount DESC LIMIT 5"
            ,nativeQuery = true)
    ArrayList<MyAnalysisColorInterface> getMyAnalysisColorList(@Param("userId") Long user_id);

    @Query(value="SELECT i.ingredient_name As IngredientName, " +
            "COUNT(i.ingredient_name) AS IngredientCount,\n" +
            "round(COUNT(i.ingredient_name) / SUM(COUNT(i.ingredient_name)) OVER(),2)* 100  AS IngredientRatio " +
            "FROM likes l " +
            "JOIN cocktails As c ON l.cocktail_id = c.cocktail_id " +
            "JOIN cocktail_ingredient As ci ON c.cocktail_id = ci.cocktail_id " +
            "Join ingredient As i ON ci.cocktail_ingredient_id = i.ingredient_id " +
            "WHERE l.like_deleted = false AND l.user_id=:userId " +
            "GROUP BY i.ingredient_name " +
            "ORDER BY IngredientCount DESC LIMIT 5"
            ,nativeQuery = true)
    ArrayList<MyAnalysisIngredientInterface> getMyAnalysisIngredientList(@Param("userId") Long user_id);

    @Query(value ="SELECT c.cocktail_name_ko As CocktailNameKo, " +
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
            "GROUP BY c.cocktail_name_ko " +
            "ORDER BY CocktailCount DESC LIMIT 5"
        , nativeQuery = true)

    ArrayList<MyAnalysisOthersInterface> getMyAnalysisOthersList(@Param("userId") Long user_id,@Param("gender") String user_gender, @Param("ageRange") String user_ageRange);
}
