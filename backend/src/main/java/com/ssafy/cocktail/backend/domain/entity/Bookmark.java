package com.ssafy.cocktail.backend.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor(access= AccessLevel.PUBLIC)
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

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="cocktail_id")
    private Cocktail cocktail;
}
