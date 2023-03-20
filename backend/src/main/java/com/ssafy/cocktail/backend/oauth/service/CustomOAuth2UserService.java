package com.ssafy.cocktail.backend.oauth.service;

import com.google.gson.JsonObject;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.UserRepository;
import com.ssafy.cocktail.backend.oauth.dto.UserInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

import javax.transaction.Transactional;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;


@Service
@Transactional
@RequiredArgsConstructor
public class CustomOAuth2UserService {

	private final UserRepository userRepository;
	private UserInfo userInfo;

	@Value("${spring.security.oauth2.client.registration.kakao.client-id}")
	private String clientId;
	@Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
	private String redirctURI;


	public UserInfo loginUser(String authorize_code) throws IOException {
		userInfo = new UserInfo();
		String accessToken = getKakaoAccessToken(authorize_code); // accessToken 가져오기
		userInfo.setAccessToken(accessToken);
		saveOrUpdate(accessToken);
		return userInfo;
	}

	private String getKakaoAccessToken(String authorize_code) {
		String access_Token = "";
		String refresh_Token = "";
		String reqURL = "https://kauth.kakao.com/oauth/token";

		try {
			URL url = new URL(reqURL); // URL 객체 만들기
			HttpURLConnection conn = (HttpURLConnection) url.openConnection(); // 연결 열기

			//    POST 요청을 위해 기본값이 false인 setDoOutput을 true로
			conn.setRequestMethod("POST"); // 요청 방법
			conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded; utf-8"); // 헤더 설정
			conn.setDoOutput(true);

			//    POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
			StringBuilder sb = new StringBuilder();
			sb.append("grant_type=authorization_code");
			sb.append("&client_id=").append(clientId);
			sb.append("&redirect_uri=").append(redirctURI);
			sb.append("&code=" + authorize_code);
			bw.write(sb.toString());
			bw.flush();

			//    결과 코드가 200이라면 성공
			int responseCode = conn.getResponseCode();
			System.out.println("responseCode : " + responseCode);

			//    요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line = "";
			String result = "";

			while ((line = br.readLine()) != null) {
				result += line;
			}
			System.out.println("response body : " + result);

			//    Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
			JsonParser parser = new JsonParser();
			JsonElement element = parser.parse(result);

			access_Token = element.getAsJsonObject().get("access_token").getAsString();
			refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

			System.out.println("access_token : " + access_Token);
			System.out.println("refresh_token : " + refresh_Token);

			br.close();
			bw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		userInfo.setAccessToken(access_Token);
		userInfo.setRefreshToken(refresh_Token);
		return access_Token;

	}

	private void saveOrUpdate(String access_Token) throws IOException {
		//    요청하는 클라이언트마다 가진 정보가 다를 수 있기에 HashMap타입으로 선언
//		HashMap<String, Object> userInfo = new HashMap<>();
		String reqURL = "https://kapi.kakao.com/v2/user/me";
		try {
			URL url = new URL(reqURL);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("POST");

			//    요청에 필요한 Header에 포함될 내용
			conn.setRequestProperty("Authorization", "Bearer " + access_Token);

			int responseCode = conn.getResponseCode();
			System.out.println("responseCode : " + responseCode);

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

			String line = "";
			String result = "";

			while ((line = br.readLine()) != null) {
				result += line;
			}
			System.out.println("response body : " + result);

			JsonParser parser = new JsonParser();
			JsonElement element = parser.parse(result);

			JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
			JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();

			String nickname = properties.getAsJsonObject().get("nickname").getAsString();
			String profile_image = properties.getAsJsonObject().get("profile_image").getAsString();
			String thumbnail_image = properties.getAsJsonObject().get("thumbnail_image").getAsString();
			String email = kakao_account.getAsJsonObject().get("email").getAsString();
			String age_range = kakao_account.getAsJsonObject().get("age_range").getAsString();
//			String birthday = kakao_account.getAsJsonObject().get("birthday").getAsString();
			String gender = kakao_account.getAsJsonObject().get("gender").getAsString();

			System.out.println("------------------------------------------------------");
			System.out.println("nickname: " + nickname);
			System.out.println("email: " + email);
			System.out.println("profile_image: " + profile_image);
			System.out.println("thumbnail_image: " + thumbnail_image);
			System.out.println("gender: " + gender);
			age_range = age_range.split("~")[0];
			System.out.println("age_range: " + age_range);
			User user = userRepository.findOneByUserEmail(email);
			if (userRepository.findOneByUserEmail(email) == null) {
				userRepository.save(User.builder()
						.userName(nickname)
						.userEmail(email)
						.userProfile(thumbnail_image)
						.userGender(gender)
						.userAgeRange(age_range)
						.userDeleted("false")
						.userCreatedDate(LocalDateTime.now())
						.userUpdateDate(LocalDateTime.now())
						.build());
			} else {
				user.setUserName(nickname);
				user.setUserProfile(thumbnail_image);
				user.setUserGender(gender);
				user.setUserAgeRange(age_range);
				user.setUserUpdateDate(LocalDateTime.now());
				userRepository.save(user);
			}
			userInfo.setUserName(nickname);


		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		userInfo.setUserName("null");
	}

}