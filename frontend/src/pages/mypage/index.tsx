import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import style from "./index.module.scss";
import User_info from "../../components/MyPage/User_info";
import Analysis_thumbnail from "../../components/MyPage/Analysis_thumbnail";
import User_cocktail_list from "../../components/MyPage/User_cocktail_list";
import { userType } from "../../type/userTypes";
import { cocktail_summary } from "../../type/cocktailTypes";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { get_user_info } from "../api/auth/user_api";
import { store } from "../../../store/store";
const mypage = () => {
  let [userInfo, setUserInfo] = useState<userType>(null);
  const [analysisThumbnail_props, setAnalysisThumbnail_props] =
    useState<cocktail_summary[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    get_user_info().then((response) => {
      // console.log("userINFO : ", response)
      setUserInfo(response.value);
    });
  }, []);
  useEffect(() => {
    // const atk = useSelector((state: RootState) => state.user.accessToken);
    const atk = store.getState().user.accessToken;
    console.log(atk);
    axios
      .get(`https://j8b208.p.ssafy.io/api/mypage/cocktail_summary`, {
        headers: {
          Authorization: atk,
        },
      })
      .then((response) => {
        const parsedArr = response.data.data.map((el: any) => {
          el.data = [el.data];
          return el;
        });
        setAnalysisThumbnail_props(parsedArr);
        setIsLoading(true);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className={style.mypage}>
          <div className={style.mypage_left}>
            <User_info {...userInfo} />
            <Analysis_thumbnail {...analysisThumbnail_props} />
          </div>
          <div className={style.mypage_right}>
            <User_cocktail_list />
          </div>
        </div>
      </>
    );
  }
};

export default mypage;
