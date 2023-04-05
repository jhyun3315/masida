package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "word_cloud")
public class WordCloud {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wc_id",nullable = false)
    private Long id;

    private String wcType;
    private String wcIngredientNameKo;
    private Integer wcIngredientId;
    private Integer wcCnt;
}
