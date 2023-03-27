package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class RecommendColor {
    @Id
    @GeneratedValue
    @Column(name = "recipe_id")
    private Long id;

    private Long recommend1;
    private Long recommend2;
    private Long recommend3;
    private Long recommend4;
    private Long recommend5;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
