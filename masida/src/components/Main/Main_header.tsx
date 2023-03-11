import style from './Main_header.module.scss';

const Main_header = () => {
  return (
    <>
      <div className={ style.mainHeader}>
        <span>칵테일 월드컵</span>
        <span>칵테일 검색</span>
        <span>로그인</span>
      </div>
    </>
  )
};

export default Main_header;