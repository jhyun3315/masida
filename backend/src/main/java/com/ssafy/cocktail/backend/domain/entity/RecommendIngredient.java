package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class RecommendIngredient {
    @Id
    @GeneratedValue
    @Column(name = "recipe_id")
    private Long id;

    private Long recommendIngredient1;
    private Long recommendIngredient2;
    private Long recommendIngredient3;
    private Long recommendIngredient4;
    private Long recommendIngredient5;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
