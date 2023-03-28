package com.ssafy.cocktail.backend.domain.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor(access= AccessLevel.PUBLIC)
@ToString
@Table(name="Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id",nullable = false)
    private Long id;

    @Column(name = "user_name", columnDefinition="VARCHAR(20)",nullable = false)
    private String userName;

    @Column(name = "user_key", columnDefinition="VARCHAR(50)",nullable = false)
    private String userKey;

    @Column(name = "user_email", columnDefinition="VARCHAR(30)",nullable = false)
    private String userEmail;

    @Column(name = "user_profile", columnDefinition="VARCHAR(150)",nullable = false)
    private String userProfile;

    @Column(name = "user_gender", columnDefinition="VARCHAR(10)",nullable = false)
    private String userGender;

    @Column(name = "user_age_range", columnDefinition="VARCHAR(10)",nullable = false)
    private String userAgeRange;

    @ColumnDefault("false")
    @Column(name = "user_deleted", columnDefinition="BOOLEAN",nullable = false)
    private boolean userDeleted;

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private LocalDateTime userCreatedDate;
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime userUpdateDate;

    @Builder
    public User(Long id, String userName, String userKey, String userEmail, String userProfile, String userGender, String userAgeRange, boolean userDeleted, LocalDateTime userCreatedDate, LocalDateTime userUpdateDate) {
        this.id = id;
        this.userName = userName;
        this.userKey = userKey;
        this.userEmail = userEmail;
        this.userProfile = userProfile;
        this.userGender = userGender;
        this.userAgeRange = userAgeRange;
        this.userDeleted = userDeleted;
        this.userCreatedDate = userCreatedDate;
        this.userUpdateDate = userUpdateDate;
    }
}
