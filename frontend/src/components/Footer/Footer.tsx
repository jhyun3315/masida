import Image from 'next/image';
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <hr />
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
        <div className={style.main_right}>
          <Image src="/assets/image/footer_sns1.png"
            alt="image"
            width={32}
            height={32} />
          <Image src="/assets/image/footer_sns2.png"
            alt="image"
            width={32}
            height={32} />
          <Image src="/assets/image/footer_sns3.png"
            alt="image"
            width={32}
            height={32} />
          <Image src="/assets/image/footer_sns4.png"
            alt="image"
            width={32}
            height={32} />
        </div>
      </div>
    </>
  );
};

export default Footer;
