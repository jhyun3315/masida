import style from "./Header.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { logout_user } from "../../pages/api/auth/user_api";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let [checkToken, setCheckToken] = useState<boolean>(false);
  const accessToken = useSelector((state: RootState) => state.user.accessToken); //처음에 토큰을 받아와.

  //리덕스에 저장된 유저의 정보를 저장해줄 변수 userInfo
  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  //처음에 토큰의 길이가 만약 0이 아니라면?
  //즉 토큰이 존재한다면?
  useEffect(() => {
    if (accessToken.length !== 0) {
      setCheckToken(true); //header를 OO님 환영합니다로 표현.
    } else {
      setCheckToken(false); //로그인 버튼으로 구현.
    }
  }, []);

  const onLogoutHandler = () => {
     logout_user();
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.main_left}>
          <Link href="/">
            <img
              className={style.main_logo}
              src="/assets/image/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className={style.main_right}>
          <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
          <Link href="/search">칵테일 검색</Link>
          {checkToken ? (
            <>
              <Link href="/mypage">{userInfo?.user_name}님 환영합니다!!</Link>
              <div className={style.main_logout} onClick={onLogoutHandler}>
                로그아웃
              </div>
            </>
          ) : (
            <Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">
              로그인
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
