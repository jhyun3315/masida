import React from "react";
import Header from "../../components/Header/Header";
import style from "./index.module.scss";
import User_info from "@/components/MyPage/User_info";
import Analysis_thumbnail from "@/components/MyPage/Analysis_thumbnail";
import User_cocktail_list from "@/components/MyPage/User_cocktail_list";

export type userType = {
  user_name: string,
  user_email: string,
  user_profile: string,
  user_gender: string,
  user_age_range: number,
};
 

const mypage = () => {

  const user_props: userType = {
    user_name: "손종효",
    user_email: "jonghyo0220@ssafy.com",
    user_profile: "/assets/image/user_profile_img.png",
    user_gender: "남",
    user_age_range: 20,
  }
  
  return (
    <>
      <Header />
      <div className={ style.mypage}>
        <div className={ style.mypage_left}>
          <User_info user_props={user_props} />
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
