package com.ssafy.cocktail.backend.domain.entity;

import lombok.*;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@Table(name="cocktails")
public class Cocktail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cocktail_id",nullable = false)
    private Long id;

    @Column(name = "cocktail_name_ko", columnDefinition="VARCHAR(20)",nullable = false)
    String cocktailNameKo;

    @Column(name = "cocktail_name_en", columnDefinition="VARCHAR(30)",nullable = false)
    String cocktailNameEn;

    @Column(name = "cocktail_img", columnDefinition="VARCHAR(150)",nullable = false)
    String cocktailImg;

    @Column(name = "cocktail_content", columnDefinition="VARCHAR(100)")
    String cocktailContent;

    @Column(name = "cocktail_color1", columnDefinition="VARCHAR(10)",nullable = false)
    String cocktailColor1;

    @Column(name = "cocktail_color2", columnDefinition="VARCHAR(10)",nullable = false)
    String cocktailColor2;

    @Column(name = "cocktail_base", columnDefinition="VARCHAR(10)",nullable = false)
    String cocktailBase;

    @Column(name = "cocktail_glass", columnDefinition="VARCHAR(20)")
    String cocktailGlass;

    @Column(name = "cocktail_rating", columnDefinition="DOUBLE")
    Double cocktailRating;

    @Column(name = "cocktail_difficulty", columnDefinition="DOUBLE",nullable = false)
    double cocktailDifficulty;

    @LastModifiedBy
    @Column(name="cocktail_update_by",columnDefinition = "VARCHAR(20)", nullable = false)
    private String roomUpdateBy;

    @LastModifiedDate
    @Column(name="cocktail_update_date",columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime commentUpdateDate;
}
