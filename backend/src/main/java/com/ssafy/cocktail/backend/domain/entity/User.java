package com.ssafy.cocktail.backend.domain.entity;

import lombok.*;
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
    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    private String userName;
    private String userKey;
    private String userEmail;
    private String userProfile;
    private String userGender;
    private String userAgeRange;
    private String userDeleted;

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private LocalDateTime userCreatedDate;
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime userUpdateDate;

    @Builder
    public User(Long id, String userName, String userKey, String userEmail, String userProfile, String userGender, String userAgeRange, String userDeleted, LocalDateTime userCreatedDate, LocalDateTime userUpdateDate) {
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
