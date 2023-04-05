package com.ssafy.cocktail.backend.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class CocktailIngredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cocktail_ingredient_id", nullable = false)
    private Long id;

    @Column(name = "ingredient_amont", columnDefinition="VARCHAR(10)")
    private String ingredientAmount;

    @Column(name = "ingredient_unit", columnDefinition="VARCHAR(10)")
    private String ingredientUnit;

    @Column(name = "ingredient_name", columnDefinition="VARCHAR(80)",nullable = false)
    private String ingredientName;

    @Column(name = "ingredient_type", columnDefinition="VARCHAR(10)",nullable = false)
    private String ingredientType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ingredient_id")
    private Ingredient ingredient;
}
