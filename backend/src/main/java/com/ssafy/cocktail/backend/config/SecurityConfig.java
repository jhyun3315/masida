package com.ssafy.cocktail.backend.config;

import com.ssafy.cocktail.backend.oauth.service.CustomOAuth2UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.user.OAuth2User;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final CustomOAuth2UserService customOAuth2UserService;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable() // csrf 토큰 비활성화
                .authorizeRequests() // 요청이오면
                .antMatchers("/swagger-ui/**", "/api/**", "/swagger-resources/**") // 해당 경로들은
                .permitAll() // 접근 허용
                .anyRequest() // 다른 요청들은
                .authenticated() // 인증이 되어야 접속할 수 있다
                .and()
                    .oauth2Login();
//                .and()
//                    .logout()
//                        .logoutSuccessUrl("/");
    }
}
