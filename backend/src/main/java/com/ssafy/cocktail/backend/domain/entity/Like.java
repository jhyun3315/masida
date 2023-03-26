package com.ssafy.cocktail.backend.domain.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor(access= AccessLevel.PUBLIC)
@Table(name="likes")
public class Like {
    @Id
    @GeneratedValue
    @Column(name = "like_id")
    private Long id;

    private String likeDeleted;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime likeCreatedDate;
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime likeUpdateDate;
    @Builder
    public Like(String likeDeleted, LocalDateTime likeCreatedDate, LocalDateTime likeUpdateDate, User user, Cocktail cocktail) {
        this.likeDeleted = likeDeleted;
        this.likeCreatedDate = likeCreatedDate;
        this.likeUpdateDate = likeUpdateDate;
        this.user = user;
        this.cocktail = cocktail;
    }

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
