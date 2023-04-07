package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_id",nullable = false)
    private Long id;

    @Column(name = "recipe_num",columnDefinition = "INT", nullable = false)
    private int recipeNum;

    @Column(name = "recipe_content",columnDefinition = "VARCHAR(150)", nullable = false)
    private String recipeContent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;

}
