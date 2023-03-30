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
@Table(name="bookmarks")
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookmark_id",nullable = false)
    private Long id;

    @ColumnDefault("false")
    @Column(name = "bookmark_deleted",columnDefinition = "BOOLEAN", nullable = false)
    private boolean bookmarkDeleted;

    @CreatedDate
    @Column(name="bookmark_create_date",columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime bookmarkCreatedDate;

    @LastModifiedDate
    @Column(name="bookmark_update_date",columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime bookmarkUpdateDate;

    @Builder
    public Bookmark(boolean bookmarkDeleted, LocalDateTime bookmarkCreatedDate, LocalDateTime bookmarkUpdateDate, User user, Cocktail cocktail) {
        this.bookmarkDeleted = bookmarkDeleted;
        this.bookmarkCreatedDate = bookmarkCreatedDate;
        this.bookmarkUpdateDate = bookmarkUpdateDate;
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
