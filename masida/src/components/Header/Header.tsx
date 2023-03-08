import style from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.main_left}>
          <Image src="/logo.png" width={214} height={74} alt="logo" />
        </div>
        <div className={style.main_right}>
          <span>칵테일 추천</span>
          <span>주변 바 추천</span>
          <span>종효님 환영합니다!</span>
        </div>
      </div>
    </>
  );
};

export default Header;
