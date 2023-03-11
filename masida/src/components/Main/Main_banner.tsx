import style from './Main_banner.module.scss';
import Image from 'next/image';

const Main_banner = () => {
  return (
    <>
      <div className={style.mainBanner}>
        <Image src="/assets/image/mainbanner.png"
          alt="image"
          layout="fill"
          objectFit="cover"
          objectPosition="center" />
          <div className={style.mainHeader}>
            <span>칵테일 월드컵</span>
            <span>칵테일 검색</span>
            <span>로그인</span>
          </div>
          <div className={ style.mainTitle}>
            <h1>MASIDA,</h1>
            <h3>당신의 취향을 그대로 담은 칵테일을 <br/> 집에서도 손쉽게</h3>
          </div>
      </div>
    </>
  );
 };

export default Main_banner;

