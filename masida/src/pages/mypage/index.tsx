import Header from "../../components/Header/Header";
import style from "./index.module.scss";
import User_info from "@/components/MyPage/User_info";
import Analysis_thumbnail from "@/components/MyPage/Analysis_thumbnail";
import User_cocktail_list from "@/components/MyPage/User_cocktail_list";


const mypage = () => {

  return (
    <>
    <Header />
    <div className={ style.mypage}>
      <div className={ style.mypage_left}>
        <User_info />
        <Analysis_thumbnail/>
      </div>
      <div className={ style.mypage_right}>
        <User_cocktail_list/>
      </div>
    </div>
    </>
  );
};

export default mypage;
