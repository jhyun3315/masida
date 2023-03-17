import style from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className={style.main}>
        <div className={style.main_left}>
          <Link href="/">
            <img className={style.main_logo} src="/assets/image/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={style.main_right}>
          <Link href="/cocktail_worldcup">칵테일 월드컵</Link>
          <Link href="/search">칵테일 검색</Link>
          <Link href="/mypage">종효님 환영합니다!!</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
