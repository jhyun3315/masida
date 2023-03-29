package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter @Setter
public class RecommendColor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recommend_color_id",nullable = false)
    private Long id;

    @Column(name = "recommend_color_1",nullable = false)
    private Long recommendColor1;

    @Column(name = "recommend_color_2", nullable = false)
    private Long recommendColor2;

    @Column(name = "recommend_color_3", nullable = false)
    private Long recommendColor3;

    @Column(name = "recommend_color_4", nullable = false)
    private Long recommendColor4;

    @Column(name = "recommend_color_5", nullable = false)
    private Long recommendColor5;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
