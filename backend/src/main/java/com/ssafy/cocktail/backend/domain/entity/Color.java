package com.ssafy.cocktail.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Color {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "color_id", nullable = false)
    private Long id;

    @Column(name = "color_name", columnDefinition="VARCHAR(10)",nullable = false)
    private String colorName;

    @Column(name = "color_rgb", columnDefinition="VARCHAR(20)",nullable = false)
    private String colorRgb;
}
