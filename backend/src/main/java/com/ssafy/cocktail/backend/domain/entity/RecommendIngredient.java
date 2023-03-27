package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class RecommendIngredient {
    @Id
    @GeneratedValue
    @Column(name = "recipe_id")
    private Long id;

    private Long recommend1;
    private Long recommend2;
    private Long recommend3;
    private Long recommend4;
    private Long recommend5;
}
