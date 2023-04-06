
![Footer__1_](./images/masida_logo.png)

------------------------------------------

# 1. MASIDA 소개

  
  ### **당신의 취향을 그대로 담은 칵테일을 집에서도 손쉽게🍸**
    
  🌵 Naming : 마시다와 맛있다의 중의적인 표현
  
   | 늘어나는 혼술족과 칵테일을 다양하게 시도해보고 싶은 사용자를 위한 서비스, 
  
   | 칵테일 레시피를 찾고, 자신의 취향에 맞는 칵테일을 추천, 분석해주는 서비스.
  


------------------------------------------------------
  
# 2. 🔍 개발 환경
  
## 2-1. 환경 설정
    
  ### **👨‍💻 Front-end**
    
    - React 18.2.0

    - Node 18.12.1

    - npm 8.19.2

    - Next 13.2.3

  ### **👨‍💻 Back-end**
    
    - Python 3.9
      
    - Pycharm, Google Colab

    - Fast API

    - MySQL

    ※ [설치 파일](./back/pythonProject/requirements.txt/)
    
  ### **👩‍💻 CI/CD**  
    
    - AWS EC2
      
    - Jenkins
      
    - Docker 20.10.18
      
    - Docker-compose
      
  

## 2-2. 서비스 아키텍처
  
![PT_35](./images/README/PT_35.png)
  
------------------------------------------------------
  

# 3. 📘 실행 방법
  
## docker를 활용한 실행 가이드
  
1. **git clone**
  
  ```bash
  git clone 
  ```
    
2. **[도커 설치](https://docs.docker.com/get-docker/) 및 도커 [컴포즈 설치](https://docs.docker.com/compose/install/)**
  
3. **Dockerfile 및 docker-compose.yml작성**
  
   - nginx Dockerfile
     ~~~docker
      FROM node:16.17.0 as builder
      # 작업 폴더로 소스 파일 복사
      COPY {git 폴더}/front/sharkshark /home/react
      WORKDIR /home/react
      # node 패키지 설치 후 빌드
      RUN npm install
      RUN npm run build
      FROM nginx
      # nginx 설정 복사
      COPY {nginx.conf 위치} /etc/nginx
      # 빌드 파일 복사
      COPY --from=builder /home/react/build /home/build
      # 포트 개방
      EXPOSE 80
      CMD ["nginx", "-g", "daemon off;"]
     ~~~

   - fastapi dockerfile
     ~~~docker
      FROM python:3.9
      # 작업 폴더로 실행 폴더 복사
      WORKDIR /code
      COPY {git 폴더}/back/pythonProject /code
      # 파이썬 패키지 설치 후 실행
      RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
      CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
     ~~~

   - nginx.conf 파일
     ~~~bash
      user nginx;
      worker_processes auto;
      events {
        worker_connections 1024;
      }
      http{
        include mime.types;
        access_log /var/log/nginx/access.log;
        error_log /var/log/nginx/error.log;
        
        server {
          // 포트 지정
          listen 80;
          listen [::]:80;
          
          // 프론트 빌드파일 경로설정
          location / {
            root	/home/build;
            index	index.html index.htm;
            try_files 	$uri $uri/ /index.html;
          }
          // 백엔드 api 요청 포워딩
          location /api/{
            proxy_pass http://172.17.0.1:8000/;
          }
        }
      }
     ~~~

   - docker-compose.yml

     ~~~yml
      version: '3'
      services:
        nginx:
          build:
            context: .
            dockerfile: {nginx dockerfile 이름}
          ports:
            - 80:80
        api:
          build:
            context: .
            dockerfile: {fastapi dockerfile 이름}
          ports:
            - 8000:8000
          extra_hosts:
            - "localhost:host-gateway"
     ~~~

4. **도커 컨테이너 실행**
   - mysql 이미지 실행하기

     ~~~bash
      # mysql 이미지 가져오기
      docker pull mysql
      # 컨테이너 실행
      docker run --name mysql -e MYSQL_ROOT_PASSWORD={password} -d -p 3306:3306 mysql
     ~~~
  
   - 3306포트로 mySQL 접속하여 b205 스키마 생성

   - docker-compose 실행

     ~~~bash
     docker compose up -d --build
     # 혹은
     docker-compose up -d --build
     ~~~


5. **작동 확인**

  - 실행 중인 컨테이너 조회

     ~~~bash
     docker ps
     ~~~
    
  - mySQL 접속하여 DB [덤프 파일](/exec/sharkshark_dp_dump.zip) 실행

--------------------------

  
  

# 4. 🦈 주요 기능
------------------------------------------------------
  ![메인 배너](./images/image_8.PNG)
  1. 메인 배너

    -  메인 페이지의 배너를 통해 입문자, 봄, 여름, 칵테일의 재밌는 정보를 볼수 있습니다.

  2. 칵테일 검색

![검색 페이지](./images/searchpage.PNG)

    - 검색 페이지에서 이름, 베이스, 색상, 난이도, 재료별로 검색이 가능하며 그 결과에 따라 처음엔 이름순으로 보여주며 좋아요, 별점순으로 나열이 가능합니다.
 
  3. 칵테일 상세 페이지

![상세 페이지](./images/detail.PNG)

    - 상세페이지에서는 이 칵테일의 정보들에 대해서 볼수 있으며 정보는 별점과 좋아요, 댓글의 개수, 난이도, 재료, 레시피, 소개 정보 등이 왼쪽에 보여지며 오른쪽에는 상세페이지의 칵테일과 비슷한 재료로 만든, 색인 칵테일을 보여줍니다.
    - 로그인시 오른쪽의 버튼을 클릭하면 댓글 창을 띄워서 보여줍니다. 

  3-1. 댓글 모달

![댓글 모달](./images/detailcomment.PNG)

    - 다른 사람이 해당 칵테일에 대한 댓글을 볼 수 있으며 내가 단 댓글은 수정 및 삭제가 가능합니다. 해당 별점, 난이도를 매김에 따라 칵테일의 별점, 난이도가 변하며 댓글은 인당 1개씩만 작성 가능합니다.

![상세 페이지]

  4. 모의 코딩 테스트

    - 문제 : 추천 문제 리스트 중에서 추천

    - 코딩 테스트 시간 선정 기준 : 추천된 문제들의 level의 평균(문제 난이도)을 고려

    - 문제 제출 : BOJ에서 문제 제출 여부 확인

    - 테스트 종료 후, 제출한 문제들에 대한 실력 분석 제공

  ![모의테스트_시작](./images/README/모의테스트_시작.gif)
  ![모의테스트_제출확인](./images/README/모의테스트_제출확인.gif)
  ![모의테스트_결과](./images/README/모의테스트_결과.gif)
  

  5. 블로깅 자동화

    - 블로그 계정 설정 : Github 계정과 연결, 업로드할 Github repository 선택

    - Github 블로그 포스팅
  ![블로그계정설정](./images/README/블로그계정설정.gif)
  ![블로그_포스팅](./images/README/블로그_포스팅.gif)
  ![블로그_포스팅2](./images/README/블로그_포스팅2.gif)

  6. 실력 분석

    - 알고리즘 실력 분석

    - 티어 로드맵

    - 유사 사용자 분석

  ![알고리즘실력분석](./images/README/알고리즘실력분석.gif)
  ![티어로드맵](./images/README/티어로드맵.gif)
  ![유사사용자분석](./images/README/유사사용자분석.gif)


--------------------------



# 5. 🔍 추천 알고리즘
------------------------------------------------------
  - 라이벌 추천
    - KNN 알고리즘으로 라이벌 추천

  ![라이벌_추천_알고리즘](./images/README/라이벌_추천_알고리즘.jpg)

  - 문제 추천
    - Matrix Factorization - ALS(Alternating Least Square) 알고리즘으로 라이벌 기반 문제 추천

  ![문제추천_알고리즘](./images/README/문제추천_알고리즘.jpg)
--------------------------



# 6. 🛡 배포
------------------------------------------------------
  - https
    - certbot 컨테이너를 함께 실행
    - letsencrypt ssl 인증서 발급
    - EC2 제공 도메인 'http://j7b205.p.ssafy.io/' 사용하여 인증
  - 자동 배포
    - Gitlab에서 web hook 설정을 통해 jenkins 빌드 유발
    - jenkins의 shell script 실행 기능을 이용하여 git pull, docker compose up 커맨드 실행
  
  
--------------------------
  
  

# 7. 📁 설계 문서
------------------------------------------------------
    
  ## 6-1. ERD

  ![ERD](./images/README/ERD.png)


  ## 6-2. Design System

  ![DesignSystem](./images/README/DesignSystem.png)

  ![DESIGN_COMPONENT](./images/README/DESIGN_COMPONENT.png)


  ## 6-3. Design

  ![DesignConcept](./images/README/concept.png)

    - 브랜딩 컨셉
      - 전체적인 컨셉은 방대한 문제를 형상화한 바다, 그리고 그 속 주인공 상어
      - 서비스 명인 'SharkShark🦈🦈'에 맞추어 상어의 모습를 연상 시킬 수 있는 지느러미와 백준 과의 연동을 상기 시키기 위한 코드 블럭 형상화

    
  

--------------------------



# 8. 🖊 Cooperation&Promises
------------------------------------------------------
  
  ## 7-1. Tools

    - Git

    - Jira

    - Notion

    - Mattermost

    - Webex
      
      
  ![PT_17](./images/README/PT_17.png)
    
--------------------------



# 8. 👨‍👩‍👧‍👦 ![logo_dark](./images/README/logo_dark.png) 팀원 소개
------------------------------------------------------
  
  ![PT_37](./images/README/PT_37.png)

![Footer](./images/README/Footer.png)