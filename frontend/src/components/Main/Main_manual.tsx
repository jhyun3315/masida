import style from "./Main_manual.module.scss";
import YouTube from "react-youtube";
import Slider from "react-slick";

import Shop_item from "./Shop/Shop_item";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export type itemProps = {
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

const items: itemProps = {
  product_name: "수저",
  product_price: 2333,
  product_url: "https://www.naver.com/",
};

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
                  <div>
                    <Shop_item {...items} />
                  </div>
                  <div>2</div>
                  <div>3</div>
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
