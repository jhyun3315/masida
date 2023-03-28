package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class RecommendIngredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recommend_ingredient_id",nullable = false)
    private Long id;

    @Column(name = "recommend_ingredient_1", nullable = false)
    private Long recommendIngredient1;

    @Column(name = "recommend_ingredient_2", nullable = false)
    private Long recommendIngredient2;

    @Column(name = "recommend_ingredient_3", nullable = false)
    private Long recommendIngredient3;

    @Column(name = "recommend_ingredient_4", nullable = false)
    private Long recommendIngredient4;

    @Column(name = "recommend_ingredient_5", nullable = false)
    private Long recommendIngredient5;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
