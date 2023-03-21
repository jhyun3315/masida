package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class Ingredient {
    @Id
    @GeneratedValue
    @Column(name = "ingredient_id")
    private Long id;

    private String ingredientName;
    private String ingredientType;
}
