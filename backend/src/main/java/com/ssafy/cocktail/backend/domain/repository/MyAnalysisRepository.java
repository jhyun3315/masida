package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBase;
import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBaseInterface;
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
            "WHERE l.user_id=:userId " +
            "GROUP BY cocktails.cocktail_base " +
            "ORDER BY BaseCount DESC LIMIT 5"
            ,nativeQuery = true)
    ArrayList<MyAnalysisBaseInterface> getMyAnalysisBaseList(@Param("userId") Long user_id);
}
