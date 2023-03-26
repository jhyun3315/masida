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
@Table(name="bookmarks")
public class Bookmark {
    @Id
    @GeneratedValue
    @Column(name = "bookmark_id")
    private Long id;

    private String bookmarkDeleted;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime bookmarkCreatedDate;
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime bookmarkUpdateDate;
    @Builder
    public Bookmark(String bookmarkDeleted, LocalDateTime bookmarkCreatedDate, LocalDateTime bookmarkUpdateDate, User user, Cocktail cocktail) {
        this.bookmarkDeleted = bookmarkDeleted;
        this.bookmarkCreatedDate = bookmarkCreatedDate;
        this.bookmarkUpdateDate = bookmarkUpdateDate;
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
