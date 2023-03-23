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
    product_name: "",
    product_price: 0,
    product_url:
      "",
    product_img:
      "",
  },
  {
    product_name: "",
    product_price: 0,
    product_url:
      "",
    product_img:
      "",
  },
  {
    product_name: "",
    product_price: 0,
    product_url:
      "",
    product_img:
      "",
  },
  {
    product_name: "",
    product_price: 0,
    product_url:
      "",
    product_img:
      "",
  },
  {
    product_name: "",
    product_price: 0,
    product_url:
      "",
    product_img:
      "",
  },
  {
    product_name: "",
    product_price: 0,
    product_url:
      "",
    product_img:
      "",
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
                <Slider>
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
