package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class CocktailIngredient {
    @Id
    @GeneratedValue
    @Column(name = "cocktail_ingredient_id")
    private Long id;

    private String ingredientAmount;
    private String ingredientUnit;
    private String ingredientName;
    private String ingredientType;

    @ManyToOne
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;

//    @ManyToOne
//    @JoinColumn(name="ingredient_id")
//    private Ingredient ingredient;
}
