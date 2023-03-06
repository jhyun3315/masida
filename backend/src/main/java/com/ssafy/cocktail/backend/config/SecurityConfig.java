package com.ssafy.cocktail.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable() // csrf 토큰 비활성화
                .authorizeRequests() // 요청이오면
                .antMatchers("/swagger-ui/**", "/v3/api-docs/**", "/swagger-resources/**") // 해당 경로들은
                .permitAll() // 접근 허용
                .anyRequest() // 다른 요청들은
                .authenticated(); // 인증이 되어야 접속할 수 있다
    }
}
