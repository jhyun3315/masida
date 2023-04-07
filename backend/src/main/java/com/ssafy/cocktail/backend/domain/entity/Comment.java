package com.ssafy.cocktail.backend.domain.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor(access= AccessLevel.PUBLIC)
@Table(name="comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id",nullable = false)
    private Long id;

    @Column(name = "comment_content", columnDefinition="VARCHAR(300)",nullable = false)
    String commentContent;

    @Column(name = "comment_rating", columnDefinition="DOUBLE",nullable = false)
    double commentRating;

    @Column(name = "comment_difficulty", columnDefinition="DOUBLE",nullable = false)
    double commentDifficulty;

    @ColumnDefault("false")
    @Column(name = "comment_deleted", columnDefinition="BOOLEAN",nullable = false)
    boolean commentDeleted;

    @CreatedDate
    @Column(name="comment_create_date",columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime commentCreatedDate;

    @LastModifiedDate
    @Column(name="comment_update_date",columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime commentUpdateDate;

    @Builder
    public Comment(String commentContent, Double commentRating, Double commentDifficulty, boolean commentDeleted, LocalDateTime commentCreatedDate, LocalDateTime commentUpdateDate, User user, Cocktail cocktail) {
        this.commentContent = commentContent;
        this.commentRating = commentRating;
        this.commentDifficulty = commentDifficulty;
        this.commentDeleted = commentDeleted;
        this.commentCreatedDate = commentCreatedDate;
        this.commentUpdateDate = commentUpdateDate;
        this.user = user;
        this.cocktail = cocktail;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    Cocktail cocktail;

}
