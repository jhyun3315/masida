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

    @Column(name = "cocktail_name_ko", columnDefinition="VARCHAR(50)",nullable = false)
    String cocktailNameKo;

    @Column(name = "cocktail_name_en", columnDefinition="VARCHAR(80)",nullable = false)
    String cocktailNameEn;

    @Column(name = "cocktail_img", columnDefinition="VARCHAR(255)",nullable = false)
    String cocktailImg;

    @Column(name = "cocktail_content", columnDefinition="VARCHAR(300)")
    String cocktailContent;

    @Column(name = "cocktail_color1", columnDefinition="VARCHAR(10)")
    String cocktailColor1;

    @Column(name = "cocktail_color2", columnDefinition="VARCHAR(10)")
    String cocktailColor2;

    @Column(name = "cocktail_base", columnDefinition="VARCHAR(10)",nullable = false)
    String cocktailBase;

    @Column(name = "cocktail_glass", columnDefinition="VARCHAR(20)")
    String cocktailGlass;

    @Column(name = "cocktail_rating", columnDefinition="DOUBLE",nullable = false)
    double cocktailRating;

    @Column(name = "cocktail_difficulty", columnDefinition="DOUBLE",nullable = false)
    double cocktailDifficulty;

    @LastModifiedBy
    @Column(name="cocktail_update_by")
    private Long roomUpdateBy;

    @LastModifiedDate
    @Column(name="cocktail_update_date",columnDefinition = "DATETIME")
    private LocalDateTime commentUpdateDate;
}
