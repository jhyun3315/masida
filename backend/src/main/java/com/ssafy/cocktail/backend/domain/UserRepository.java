package com.ssafy.cocktail.backend.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findOneByUserEmail(String userEmail);//Null을 반환할때 Optional을 많이쓴다
}
