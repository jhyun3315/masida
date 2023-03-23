import style from "./Main_manual.module.scss";

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
            <div className={style.manual_content_youtube_video}>유튜브</div>
          </div>
          <div className={style.manual_content_shop}>
            <div className={style.manual_content_shop_layout}>
              <div className={style.manual_content_shop_title}>
                칵테일 용품 리스트
              </div>
              <div className={style.manual_content_shop_sub}>
                집에서 나만의 칵테일을 만들어보세요
              </div>
              <div className={style.manual_content_shop_carousel}>캐러셀</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_manual;
