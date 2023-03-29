package com.ssafy.cocktail.backend.domain.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@ToString
@NoArgsConstructor(access= AccessLevel.PUBLIC)
@Table(name="likes")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_id",nullable = false)
    private Long id;

    @ColumnDefault("false")
    @Column(name = "like_deleted",columnDefinition = "BOOLEAN", nullable = false)
    private boolean likeDeleted;

    @CreatedDate
    @Column(name="like_create_date",columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime likeCreatedDate;

    @LastModifiedDate
    @Column(name="like_update_date",columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime likeUpdateDate;

    @Builder
    public Like(boolean likeDeleted, LocalDateTime likeCreatedDate, LocalDateTime likeUpdateDate, User user, Cocktail cocktail) {
        this.likeDeleted = likeDeleted;
        this.likeCreatedDate = likeCreatedDate;
        this.likeUpdateDate = likeUpdateDate;
        this.user = user;
        this.cocktail = cocktail;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
