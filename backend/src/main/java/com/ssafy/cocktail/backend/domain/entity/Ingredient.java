package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_id",nullable = false)
    private Long id;

    @Column(name = "ingredient_name", columnDefinition="VARCHAR(20)",nullable = false)
    private String ingredientName;

    @Column(name = "ingredient_type", columnDefinition="VARCHAR(20)",nullable = false)
    private String ingredientType;
}
