import style from "./Main_manual.module.scss";
import YouTube from "react-youtube";
import Slider from "react-slick";

import Shop_item from "./Shop/Shop_item";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export type itemProps = {
  product_img: string;
  product_name: string;
  product_price: number;
  product_url: string;
};

const videoId: string = "qYlzca11Tbc";

const settings = {
  // dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
};

const items: itemProps[] = [
  {
    product_name: "칵테일 쉐이커",
    product_price: 8500,
    product_url:
      "https://search.shopping.naver.com/catalog/33357849843?query=%EC%B9%B5%ED%85%8C%EC%9D%BC%20%EC%89%90%EC%9D%B4%EC%BB%A4&NaPm=ct%3Dlfkkora8%7Cci%3Db700a0d6f98a93498882155ded6003f6150a454a%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Ddec0854da7c47e3df1d49e266fdb14c87b94eb64",
    product_img:
      "https://shopping-phinf.pstatic.net/main_3335784/33357849843.20221102044951.jpg?type=f640",
  },
  {
    product_name: "칵테일 머들러",
    product_price: 4250,
    product_url:
      "https://search.shopping.naver.com/catalog/32517363269?query=%EB%A8%B8%EB%93%A4%EB%9F%AC&NaPm=ct%3Dlfklu2xs%7Cci%3D5c07d9f5cd2625dcf93a0b771b8987d391e6f2cd%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dd353607e414363e23e34ed90b26e4f47844e3d22",
    product_img:
      "https://shopping-phinf.pstatic.net/main_3251736/32517363269.20220818072908.jpg?type=f640",
  },
  {
    product_name: "스테인리스 미니집게",
    product_price: 4900,
    product_url:
      "https://search.shopping.naver.com/catalog/37356819386?query=%EC%96%BC%EC%9D%8C%EC%A7%91%EA%B2%8C&NaPm=ct%3Dlfkroau8%7Cci%3D9b1d34a83ed038f05760fb217bf83fc889aa4b95%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8890348cfa3b532d9fd78feb327647014d557d63",
    product_img:
      "https://shopping-phinf.pstatic.net/main_3735681/37356819386.20230308104436.jpg?type=f640",
  },
  {
    product_name: "스텐 칵테일 바 스푼",
    product_price: 4600,
    product_url:
      "https://search.shopping.naver.com/catalog/33212711128?query=%EB%B0%94%20%EC%8A%A4%ED%91%BC&NaPm=ct%3Dlfkrmde8%7Cci%3D7b7999af49b684bbb0298682d67989ba60a260aa%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D90e45f75d5f09224d5ab2681370625d1793f454c",
    product_img:
      "https://shopping-phinf.pstatic.net/main_3321271/33212711128.20220825110519.jpg?type=f640",
  },
  {
    product_name: "스텐 지거 15 30",
    product_price: 7000,
    product_url:
      "https://search.shopping.naver.com/catalog/35854065870?query=%EC%A7%80%EA%B1%B0&NaPm=ct%3Dlfkrpac0%7Cci%3Dce294acff7eb67e8d0b2f4f4424a7ac81af6baa0%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De38f8729f0d00a343bd97604c1a85f4bc73251a3",
    product_img:
      "https://shopping-phinf.pstatic.net/main_3585406/35854065870.20221116141741.jpg?type=f640",
  },
  {
    product_name: "내열유리 계량컵",
    product_price: 4400,
    product_url:
      "https://search.shopping.naver.com/catalog/25695609251?query=%EC%9C%A0%EB%A6%AC%20%EA%B3%84%EB%9F%89%EC%BB%B5&NaPm=ct%3Dlfkrsmpc%7Cci%3D5efb5e158222ed10a041cb330a64b95c6fe77ea6%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D7572a6663ac47b1b2208bb9befe197e6c0afb96a",
    product_img:
      "https://shopping-phinf.pstatic.net/main_2569560/25695609251.20221110164934.jpg?type=f640",
  },
  {
    product_name: "스텐 푸어러",
    product_price: 3720,
    product_url:
      "https://search.shopping.naver.com/catalog/24061016710?query=%ED%91%B8%EC%96%B4%EB%9F%AC&NaPm=ct%3Dlfkrr2dk%7Cci%3D988e6387587775793d02864dbd1fbfd68af9717b%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D301a8cbee587fa3b50c923c9aa60045d0949147a",
    product_img:
      "https://shopping-phinf.pstatic.net/main_2406101/24061016710.20230202011245.jpg?type=f640",
  },
];

const Main_manual = () => {
  return (
    <>
      <div className={style.manual}>
        <div className={style.manual_title}>
          <div className={style.manual_title_main}>
            How to make cocktails for beginners
          </div>
          <div className={style.manual_title_sub}>
            입문자를 위한 다양한 칵테일 정보를 제공합니다.
          </div>
        </div>
        <div className={style.manual_content}>
          <div className={style.manual_content_youtube}>
            <div className={style.manual_content_youtube_tag}>
              #칵테일 #입문자 #강력추천
            </div>
            <div className={style.manual_content_youtube_title}>
              살면서 알아두면 좋을 74가지 칵테일 입문서
            </div>
            <div className={style.manual_content_youtube_video}>
              <YouTube videoId={videoId} />
              <div className={style.manual_content_youtube_video_legend}>
                출처 : 술덕후
              </div>
            </div>
          </div>
          <div className={style.manual_content_shop}>
            <div className={style.manual_content_shop_layout}>
              <div className={style.manual_content_shop_title}>
                칵테일 용품 리스트
              </div>
              <div className={style.manual_content_shop_sub}>
                집에서 나만의 칵테일을 만들어보세요!
              </div>
              <div className={style.manual_content_shop_carousel}>
                <Slider {...settings}>
                  {items.map((key) => (
                    <Shop_item {...key} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_manual;
