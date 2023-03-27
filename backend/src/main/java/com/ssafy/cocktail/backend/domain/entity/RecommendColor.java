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

    private Long recommendColor1;
    private Long recommendColor2;
    private Long recommendColor3;
    private Long recommendColor4;
    private Long recommendColor5;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
