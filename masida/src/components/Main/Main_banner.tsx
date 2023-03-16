import style from './Main_banner.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main_banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 3000
  }
  return (
    <div className='carousel'>
        <Slider {...settings}>
          <div className={style.mainBanner}>
            <Image src="/assets/image/mainbanner.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" />
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              <Link href="">로그인</Link>
            </div>
            <div className={style.mainTitle}>
              <h1>MASIDA,</h1>
              <h3>당신의 취향을 그대로 담은 칵테일을 <br/> 집에서도 손쉽게</h3>
            </div>
          </div>
          <div><h1>테마페이지 1</h1></div>
          <div><h1>테마페이지 2</h1></div>
          <div><h1>테마페이지 3</h1></div>
        </Slider>
      </div>
  );
 };

export default Main_banner;

