package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.ssafy.cocktail.backend.cocktails.dto.CocktailSortedLikes;

import java.util.List;

public interface CocktailRepository extends JpaRepository<Cocktail, Long> {
    @Query(value = "select c.cocktail_id, c.cocktail_name_ko, c.cocktail_name_en, c.cocktail_img, c.cocktail_rating, count(c.cocktail_id) as 'cnt' from cocktails c\n" +
            "join likes l on c.cocktail_id = l.cocktail_id\n" +
            "group by cocktail_id\n" +
            "order by 'cnt' desc", nativeQuery = true)
    List<CocktailSortedLikes> findCocktailByLikes();
//    List<CocktailSortedLikes> findCocktailByLikes();
}
