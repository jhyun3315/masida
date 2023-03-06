package com.ssafy.cocktail.backend.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class User {
    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    private String userName;
    private String userKey;
    private String userEmail;
    private String userProfile;
    private String userGender;
    private String userDeleted;
    private UserType userType;

    @CreatedBy
    @Column(updatable = false)
    private LocalDateTime userCreatedDate;
}
