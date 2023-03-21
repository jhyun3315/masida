package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
public class Color {
    @Id
    @GeneratedValue
    @Column(name = "color_id")
    private Long id;

    private String colorName;
    private String colorRgb;
}
