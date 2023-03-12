import style from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const gotoMain = () => {
    router.push("/");
  };
  return (
    <>
      <div className={style.main}>
        <div className={style.main_left}>
          <Image src="/assets/image/logo.png" width={214} height={74} alt="logo" />
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
