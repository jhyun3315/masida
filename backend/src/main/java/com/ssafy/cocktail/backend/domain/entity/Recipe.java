package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Recipe {
    @Id
    @GeneratedValue
    @Column(name = "recipe_id")
    private Long id;

    private int recipeNum;
    private String recipeContent;

    @ManyToOne
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;

}
