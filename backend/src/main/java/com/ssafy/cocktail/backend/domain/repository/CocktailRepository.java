package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.cocktails.dto.CocktailLikesInterface;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CocktailRepository extends JpaRepository<Cocktail, Long> {
    @Query(value = "select c.cocktail_id as cocktailId " +
            ", c.cocktail_name_ko as cocktailNameKo " +
            ", c.cocktail_name_en as cocktailNameEn " +
            ", c.cocktail_img as cocktailImg " +
            ", c.cocktail_rating as cocktailRating " +
            ", count(c.cocktail_id) as cnt " +
            "from cocktails c " +
            "join likes l on c.cocktail_id = l.cocktail_id " +
            "group by cocktailId " +
            "order by 'cnt' desc", nativeQuery = true)
    List<CocktailLikesInterface> findCocktailByLikes();

    @Query(value = "select cocktail_id as cocktailId " +
            ", cocktail_name_ko as cocktailNameKo " +
            ", cocktail_name_en as cocktailNameEn " +
            ", cocktail_img as cocktailImg " +
            ", cocktail_rating as cocktailRating " +
            "from cocktails " +
            "order by rand() limit 1", nativeQuery = true)
    CocktailLikesInterface getCocktailRandomOne();

}
