import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Header from "../../components/Header/Header";
import CocktailPreference from "../../components/UserAnalysis/CocktailPreference";
import ColorPreference from "../../components/UserAnalysis/ColorPreference";
import IngredientPreference from "../../components/UserAnalysis/IngredientPreference";
import UserPreference from "../../components/UserAnalysis/UserPreference";
import Loading_spinner from "../../components/UI/Loading_spinner";

import style from "./index.module.scss";
import {
  cocktailAgeGender,
  cocktailBase,
  cocktailColor,
  cocktailIngredient,
} from "../../type/cocktailPreference";
import {
  cocktailBase_props,
  cocktailColor_props,
  cocktailIngredient_props,
} from "../../type/cocktailRating";
import { cocktail_recommend } from "../../type/cocktailTypes";
import {
  userAnalysis_cocktailBase,
  user_cocktail_recommend,
  user_starRating_cocktailBase,
  userAnalysis_cocktailColor,
  user_starRating_cocktailColor,
  user_cocktail_color_recommend,
  userAnalysis_cocktailIngredient,
  user_cocktail_ingredient_recommend,
  userAnalysis_cocktailAgeGender,
  user_cocktail_age_gender_recommend,
  user_starRating_cocktailIngredient,
} from "../api/user-analysis/user-analysis_api";

export type cocktail_props_analysis = {
  isLoading_props1: boolean;
  isLoading_props2: boolean;
  cocktailList: cocktailBase[];
  cocktailRating: cocktailBase_props;
  cocktailRecordList: cocktail_recommend[];
};

export type cocktail_props_analysis_color = {
  isLoading_props3: boolean;
  isLoading_props4: boolean;
  cocktailList: cocktailColor[];
  cocktailRating: cocktailColor_props;
  cocktailRecordList: cocktail_recommend[];
};

export type cocktail_props_analysis_ingredient = {
  isLoading_props5: boolean;
  isLoading_props6: boolean;
  cocktailList: cocktailIngredient[];
  cocktailRating: cocktailIngredient_props;
  cocktailRecordList: cocktail_recommend[];
};

export type cocktail_props_analysis_age_gender = {
  isLoading_props7: boolean;
  cocktailList: cocktailAgeGender[];
  cocktailRecordList: cocktail_recommend[];
};

const userAnalisys = () => {
  const router = useRouter();
  const componentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);
  const [isLoading5, setIsLoading5] = useState(false);
  const [isLoading6, setIsLoading6] = useState(false);
  const [isLoading7, setIsLoading7] = useState(false);

  const [cocktailList_props, setCocktailList_props] = useState<cocktailBase[]>(
    []
  );
  const [cocktailStarRating_props, setCocktailStarRating_props] =
    useState<cocktailBase_props>(null);
  const [cocktailRecommendList_props, setcocktailRecommendList_props] =
    useState<cocktail_recommend[]>([]);

  const [cocktailList_color_props, setCocktailList_color_props] = useState<
    cocktailColor[]
  >([]);
  const [cocktailStarRating_color_props, setcocktailStarRating_color_props] =
    useState<cocktailColor_props>(null);
  const [
    cocktailRecommendList_color_props,
    setcocktailRecommendList_color_props,
  ] = useState<cocktail_recommend[]>([]);

  const [cocktailList_ingredient_props, setCocktailList_ingredient_props] =
    useState<cocktailIngredient[]>([]);
  const [
    cocktailStarRating_ingredient_props,
    setcocktailStarRating_ingredient_props,
  ] = useState<cocktailIngredient_props>(null);
  const [
    cocktailRecommendList_ingredient_props,
    setcocktailRecommendList_ingredient_props,
  ] = useState<cocktail_recommend[]>([]);

  const [cocktailList_age_gender_props, setCocktailList_age_gender_props] =
    useState<cocktailAgeGender[]>([]);
  const [
    cocktailRecommendList_age_gender_props,
    setcocktailRecommendList_age_gender_props,
  ] = useState<cocktail_recommend[]>([]);

  useEffect(() => {
    userAnalysis_cocktailBase().then((response) => {
      setIsLoading(true);
      setCocktailList_props(response);
    });
    user_starRating_cocktailBase().then((response) => {
      setIsLoading2(true);
      setCocktailStarRating_props(response);
    });
    user_cocktail_recommend().then((response) => {
      setcocktailRecommendList_props(response);
    });
    userAnalysis_cocktailColor().then((response) => {
      setIsLoading3(true);
      setCocktailList_color_props(response);
    });
    user_starRating_cocktailColor().then((response) => {
      setIsLoading4(true);
      setcocktailStarRating_color_props(response);
    });
    user_cocktail_color_recommend().then((response) => {
      setcocktailRecommendList_color_props(response);
    });
    userAnalysis_cocktailIngredient().then((response) => {
      setIsLoading5(true);
      setCocktailList_ingredient_props(response);
    });
    user_starRating_cocktailIngredient().then((response) => {
      setIsLoading6(true);
      setcocktailStarRating_ingredient_props(response);
    });
    user_cocktail_ingredient_recommend().then((response) => {
      setcocktailRecommendList_ingredient_props(response);
    });
    userAnalysis_cocktailAgeGender().then((response) => {
      setIsLoading7(true);
      setCocktailList_age_gender_props(response);
    });
    user_cocktail_age_gender_recommend().then((response) => {
      setcocktailRecommendList_age_gender_props(response);
    });
  }, []);

  console.log("베이스", cocktailList_props);
  console.log("색상", cocktailList_color_props);
  console.log("재료", cocktailList_ingredient_props);
  console.log("나이,색", cocktailList_age_gender_props);

  const cocktail_props: cocktail_props_analysis = {
    isLoading_props1: isLoading,
    isLoading_props2: isLoading2,
    cocktailList: cocktailList_props,
    cocktailRating: cocktailStarRating_props,
    cocktailRecordList: cocktailRecommendList_props,
  };
  const cocktail_color_props: cocktail_props_analysis_color = {
    isLoading_props3: isLoading3,
    isLoading_props4: isLoading4,
    cocktailList: cocktailList_color_props,
    cocktailRating: cocktailStarRating_color_props,
    cocktailRecordList: cocktailRecommendList_color_props,
  };
  const cocktail_ingredient_props: cocktail_props_analysis_ingredient = {
    isLoading_props5: isLoading5,
    isLoading_props6: isLoading6,
    cocktailList: cocktailList_ingredient_props,
    cocktailRating: cocktailStarRating_ingredient_props,
    cocktailRecordList: cocktailRecommendList_ingredient_props,
  };
  const cocktail_age_gender_props: cocktail_props_analysis_age_gender = {
    isLoading_props7: isLoading7,
    cocktailList: cocktailList_age_gender_props,
    cocktailRecordList: cocktailRecommendList_age_gender_props,
  };

  const handleExport = () => {
    const input = componentRef.current;
    html2canvas(input, { allowTaint: true, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("MASIDA 취향 분석 보고서.pdf");
    });
  };

  if (
    isLoading &&
    isLoading2 &&
    isLoading3 &&
    isLoading4 &&
    isLoading5 &&
    isLoading6 &&
    isLoading7
  ) {
    if (
      cocktailList_props.length === 5 &&
      cocktailList_color_props.length === 5 &&
      cocktailList_ingredient_props.length === 5 &&
      cocktailList_age_gender_props.length === 5
    ) {
      return (
        <div ref={componentRef}>
          <Header />
          <div className={style.userAnalisys}>
            <div className={style.userAnalisys_logo}>
              <h1>MASIDA</h1>
              <p>칵테일을 맛있게 마시다.</p>
            </div>
            <div className={style.userAnalisys_pdf} onClick={handleExport}>
              <img src="assets/icons/Vector.png"></img>
              <span>PDF로 내보내기</span>
            </div>
          </div>
          <CocktailPreference {...cocktail_props} />
          <ColorPreference {...cocktail_color_props} />
          <IngredientPreference {...cocktail_ingredient_props} />
          <UserPreference {...cocktail_age_gender_props} />
        </div>
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "정확한 분석을 할 수 없습니다.",
        confirmButtonText: "마이페이지로 돌아가기",
        text: "분석을 위한 충분한 데이터가 존재하지 않습니다. 좋아하는 칵테일에 좋아요를 눌러주세요",
        footer: '<a href="/search">여기를 눌러서 칵테일 둘러볼까요?</a>',
      }).then((result) => {
        if (result.isConfirmed) {
          router.back();
        }
      });
    }
  } else {
    return <Loading_spinner></Loading_spinner>;
  }
};

export default userAnalisys;
