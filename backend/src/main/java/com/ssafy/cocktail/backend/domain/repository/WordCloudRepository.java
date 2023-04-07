package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.WordCloud;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WordCloudRepository extends JpaRepository<WordCloud, Long> {
    public List<WordCloud> findAllByOrderByWcCntDesc();
}
