import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Main_banner.module.scss";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageLoaderProps } from "next/image";
import { imgLoader } from "../../utils/imgLoader";
import axios from "axios";
import { login, logout } from "../../../store/modules/user";
import { RootState } from "../../../store/store";
import { userType } from "../../type/userTypes";
import { get_user_info } from "../../pages/api/auth/user_api";

//좌표의 타입입니다.
type coordinate = {
  x : number,
  y : number,
}

const Main_banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const router = useRouter();
  const dispatch = useDispatch();
  
  //시작지점과 끝지점을 체크해줄 useState변수입니다.
  const [startPosition, setStartPosition] = useState<coordinate>({ x: 0, y: 0 });
  let [checkToken, setCheckToken] = useState<boolean>(false);
  let [userInfo, setUserInfo] = useState<userType>(null);
  const [tokenValue, setTokenValue] = useState<string>("");
  let [userName , setUserName] = useState<string>("");
  
  //마우스를 눌렀을때의 좌표입니다.
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setStartPosition({ x: e.clientX, y: e.clientY });
    //마우스를 눌렀을때 해당 좌표 저장해주고
  };

  //마우스를 떼어냈을때의 좌표입니다.
  const handleMouseUpBegginer = (e: React.MouseEvent<HTMLElement>) => {
    console.log(startPosition.x);
    console.log(startPosition.y);
    console.log(e.clientX);
    console.log(e.clientY);
    if(startPosition.y - 2 < e.clientY && startPosition.y + 2 >  e.clientY) {
      router.push("/theme/begginer");
    } 
  };

  const handleMouseUpSpring = (e: React.MouseEvent<HTMLElement>) => {
    if(startPosition.y - 2 < e.clientY && startPosition.y + 2 >  e.clientY) {
      router.push("/theme/spring");
    }
  };

  const handleMouseUpSummer = (e: React.MouseEvent<HTMLElement>) => {
    if(startPosition.y - 2 < e.clientY && startPosition.y + 2 >  e.clientY) {
      router.push("/theme/summer");
    } 
  };

  //마이페이지로 가는 함수입니다.
  const gotoMyPage = () => {
    router.push("/mypage");
  }

  // 1. 로그인 안한 상태
  // 2. 로그인한 직후
  // 3. 로그인한 후 페이지 이동하다 돌아온 경우

  let accessToken = "";
  
  const atkQuery =router.query.accessToken as string | null; 
  if (atkQuery) {
    if(atkQuery.length > 0){
      accessToken = router.query.accessToken as string;
    }
  } else {
    accessToken = useSelector((state: RootState) => state.user.accessToken);
  }

  useEffect(() => {
    dispatch(login(accessToken));
    setTokenValue(accessToken);
    // get_user_info().then((response) => { dispatch(setUserInfo(response)) });
    get_user_info().then((response) => {
      setUserInfo(response.value);
    });
    if (accessToken.length !== 0) {
      setCheckToken(true);
    } else {
      setCheckToken(false);
    }
  }, []);
  
  useEffect(() => {
    if(userInfo !== null) {
      setUserName(userInfo.user_name);
    }
  },[userInfo])


  const getAccessToken = useSelector(
    (state: RootState) => state.user.accessToken
  );

  const onLogoutHandler = () => {
    const logoutt: any = axios
      .get("https://j8b208.p.ssafy.io/api/oauth/kakao/logout", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then(function () {
        dispatch(logout());
        setTokenValue("");
      });
  };

  // console.log("앙 토큰띠", getAccessToken);

  return (
    <div className={style.mainBanner}>
      <Slider {...settings}>
        <div className={style.mainBanner_black}>
          <Image
            loader={({ src, width, quality }: ImageLoaderProps) =>
              imgLoader({ src, width, quality })
            }
            src="/assets/image/mainbanner.png"
            alt="image"
            
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className={style.mainHeader}>
            {tokenValue ? (
              <>
              <div className={style.logout} onClick={onLogoutHandler}>로그아웃</div>
              {checkToken ? <div className={style.logout} onClick={gotoMyPage}>
                {userName}님
              </div> : <></>}
              </>
            ) : (
              <Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">
                로그인
              </Link>
                )}
                <Link href="/search">칵테일 검색</Link>
                <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
          </div>
          <div className={style.mainTitle}>
            <h1>MASIDA,</h1>
            <h3>
              당신의 취향을 그대로 담은 칵테일을 <br /> 집에서도 손쉽게
            </h3>
          </div>
        </div>
        <div className={style.mainBanner_white}>
          <Image
            loader={({ src, width, quality }: ImageLoaderProps) =>
              imgLoader({ src, width, quality })
            }
            src="/assets/image/banner_begginer.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpBegginer}
          />
          <div className={style.mainHeader}>
            {tokenValue ? (
              <>
              <div className={style.logout} onClick={onLogoutHandler}>로그아웃</div>
              {checkToken ? <div className={style.logout} onClick={gotoMyPage}>
                {userName}님
              </div> : <></>}
              
              </>
            ) : (
              <Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">
                로그인
              </Link>
            )}
            <Link href="/search">칵테일 검색</Link>
            <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
          </div>
          <div className={style.mainTitle2} onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpBegginer}>
            <h1>
              <strong>맛과 향, </strong>모두 즐기는 칵테일의 <br />
              매력을 느껴보세요.
            </h1>
            <h3>칵테일 입문자를 위한 다양한 칵테일을 추천해드립니다.</h3>
          </div>
        </div>
        <div className={style.mainBanner_white}>
          <Image
            loader={({ src, width, quality }: ImageLoaderProps) =>
              imgLoader({ src, width, quality })
            }
            src="/assets/image/banner_spring.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpSpring}
          />
          <div className={style.mainHeader}>
            {tokenValue ? (
              <>
              <div className={style.logout} onClick={onLogoutHandler}>로그아웃</div>
              {checkToken ? <div className={style.logout} onClick={gotoMyPage}>
                {userName}님
              </div> : <></>}
              
              </>
            ) : (
              <Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">
                로그인
              </Link>
            )}
            <Link href="/search">칵테일 검색</Link>
                <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
          </div>
          <div className={style.mainTitle3} onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpSpring}>
            <h1>
              봄의 느낌을 담은 칵테일,
              <br /> 궁금하지 않으신가요?
            </h1>
            <h3>봄에 어울리는 칵테일을 추천해드립니다.</h3>
          </div>
        </div>
        <div className={style.mainBanner_white}>
          <Image
            loader={({ src, width, quality }: ImageLoaderProps) =>
              imgLoader({ src, width, quality })
            }
            src="/assets/image/banner_summer.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpSummer}
          />
          <div className={style.mainHeader}>
            {tokenValue ? (
              <>
              <div className={style.logout} onClick={onLogoutHandler}>로그아웃</div>
              {checkToken ? <div className={style.logout} onClick={gotoMyPage}>
                {userName}님
              </div> : <></>}
              
              </>
            ) : (
              <Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">
                로그인
              </Link>
            )}
            <Link href="/search">칵테일 검색</Link>
            <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
          </div>
          <div className={style.mainTitle4} onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpSummer}>
            <h1>여름 햇살 아래 즐기는 칵테일, 궁금하신가요?</h1>
            <h3>여름에 어울리는 다양한 칵테일을 추천해드립니다.</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Main_banner;
