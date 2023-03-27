package com.ssafy.cocktail.backend.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="cocktails")
public class Cocktail {
    @Id
    @GeneratedValue
    @Column(name = "cocktail_id")
    private Long id;

    String cocktailNameKo;
    String cocktailNameEn;
    String cocktailImg;
    String cocktailContent;
    String cocktailColor1;
    String cocktailColor2;
    String cocktailBase;
    String cocktailGlass;
    Double cocktailRating;
    Double cocktailDifficulty;
}
