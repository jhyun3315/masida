import { useRouter } from 'next/router';
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
  const router = useRouter();
  const goBegginer = () =>  {
    router.push("/theme/begginer");
  }

  const goSpring = () => {
    router.push("/theme/spring");
  }

  const goSummer = () => {
    router.push("/theme/summer");
  }

  return (
    <div className='carousel'>
        <Slider {...settings}>
          <div className={style.mainBanner_black}>
            <Image src="/assets/image/mainbanner.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" />
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              <Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">로그인</Link>
            </div>
            <div className={style.mainTitle}>
              <h1>MASIDA,</h1>
              <h3>당신의 취향을 그대로 담은 칵테일을 <br/> 집에서도 손쉽게</h3>
            </div>
          </div>
          <div className={style.mainBanner_white}>
            <Image src="/assets/image/banner_begginer.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  onClick={goBegginer}
                  />
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              <Link href="">로그인</Link>
            </div>
            <div className={style.mainTitle} onClick={goBegginer}>
              <h1>입문자 이신가요?</h1>
              <h3>당신의 취향을 그대로 담은 칵테일을 <br/> 집에서도 손쉽게</h3>
            </div>
          </div>
          <div className={style.mainBanner_white}>
            <Image src="/assets/image/banner_spring.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  onClick={goSpring}/>
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              <Link href="">로그인</Link>
            </div>
            <div className={style.mainTitle} onClick={goSpring}>
              <h1>상큼한 봄</h1>
              <h3>봄에 맞는 칵테일 <br/> 궁금하지 않으신가요?</h3>
            </div>
          </div>
          <div className={style.mainBanner_white}>
            <Image src="/assets/image/banner_summer.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" 
                  onClick = {goSummer}/>
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              <Link href="">로그인</Link>
            </div>
            <div className={style.mainTitle} onClick = {goSummer}>
              <h1>무더운 여름</h1>
              <h3>시원하고 싶지 않으신가요?<br/>지금 바로 함께하시죠</h3>
            </div>
          </div>
        </Slider>
      </div>
  );
 };

export default Main_banner;

