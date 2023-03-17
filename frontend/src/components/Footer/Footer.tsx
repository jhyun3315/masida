import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.main_left}>
          <div>
            <span>회사소개</span>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
          <div className={style.main_left_descrption}>
            © SSAFY Corp. Masida. All rights Reserved
          </div>
        </div>
        <div className={style.main_right}></div>
      </div>
    </>
  );
};

export default Footer;
