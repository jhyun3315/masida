package com.ssafy.cocktail.backend.domain.repository;

import com.ssafy.cocktail.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findOneByUserEmail(String userEmail);
    User findOneByUserKey(String userKey);
}
