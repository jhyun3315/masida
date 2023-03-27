import React from "react";
import Header from "../../components/Header/Header";
import style from "./index.module.scss";
import User_info from "../../components/MyPage/User_info";
import Analysis_thumbnail from "../../components/MyPage/Analysis_thumbnail";
import User_cocktail_list from "../../components/MyPage/User_cocktail_list";
import { userType } from "../../type/userTypes"; 
import { cocktail_summary } from "../../type/cocktailTypes";

const mypage = () => {

  const user_props: userType = {
    user_name: "손종효",
    user_email: "jonghyo0220@ssafy.com",
    user_profile: "/assets/image/user_profile_img.png",
    user_gender: "남",
    user_age_range: 20,
  }

  const analysisThumbnail_props: cocktail_summary[] = [
    {
        id: "베이스",
				data : [{x:"럼",  y: 32 }]
		},
		{
				id : "재료",
				data : [{x:"라임",  y:  29 }]
		},
		{
				id : "색상",
				data : [{x:"빨간색",  y: 41 }]
		}
  ];
  
  return (
    <>
      <Header />
      <div className={ style.mypage}>
        <div className={ style.mypage_left}>
          <User_info {...user_props} />
          <Analysis_thumbnail {...analysisThumbnail_props} />
        </div>
        <div className={ style.mypage_right}>
          <User_cocktail_list/>
         </div>
      </div>
    </>
  );
};

export default mypage;
