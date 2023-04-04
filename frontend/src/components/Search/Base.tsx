import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectBase } from "../../../store/category/baseSlice";

import style from "./Base.module.scss";

const Base = () => {
  const dispatch = useDispatch();
  const [checkBase, setCheckBase] = useState<string>("");

  const clickBase = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    //base의 이름을 내가 선택한 것으로 변경해줌.
    if(checkBase === target.value) {
      setCheckBase("");
    }else {
      setCheckBase(target.value);
    } 
  };

  //base가 바뀔때마다 redux의 base에 저장해줍니다.
  useEffect(() => {
    dispatch(setSelectBase(checkBase));
  }, [checkBase]);

  return (
    <>
      <div>
        <h3 className={style.base_title}>베이스</h3>
        <div className={style.base_checkbox}>
          <div className={style.base_interval}>
            <label className={style.base_value}>
              <input
                type="radio"
                name="base"
                value="위스키"
                checked={checkBase === "위스키"}
                onClick={clickBase}
              />{" "}
              위스키
            </label>
            <label className={style.base_value}>
              <input type="radio" name="base" value="럼" checked={checkBase === "럼"} onClick={clickBase} />{" "}
              럼
            </label>
          </div>
          <div className={style.base_interval}>
            <label className={style.base_value}>
              <input
                type="radio"
                name="base"
                value="리퀴르"
                checked={checkBase === "리퀴르"}
                onClick={clickBase}
              />{" "}
              리퀴르
            </label>
            <label className={style.base_value}>
              <input type="radio" name="base" value="진" checked={checkBase === "진"} onClick={clickBase} />{" "}
              진
            </label>
          </div>
          <div className={style.base_interval}>
            <label className={style.base_value}>
              <input
                type="radio"
                name="base"
                value="보드카"
                checked={checkBase === "보드카"}
                onClick={clickBase}
              />{" "}
              보드카
            </label>
            <label className={style.base_value}>
              <input
                type="radio"
                name="base"
                value="브랜디"
                checked={checkBase === "브랜디"}
                onClick={clickBase}
              />{" "}
              브랜디
            </label>
          </div>
          <div className={style.base_interval}>
            <label className={style.base_value}>
              <input
                type="radio"
                name="base"
                value="테킬라"
                checked={checkBase === "테킬라"}
                onClick={clickBase}
              />{" "}
              테킬라
            </label>
            <label className={style.base_value}>
              <input
                type="radio"
                name="base"
                value="기타"
                checked={checkBase === "기타"}
                onClick={clickBase}
              />{" "}
              기타
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
