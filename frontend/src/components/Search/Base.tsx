import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectBase } from '../../../store/category/baseSlice';

import style from "./Base.module.scss";

const Base = () => {
  const dispatch = useDispatch();
  const [checkBase, setCheckBase] = useState<string>("");
  
  const clickBase = (e : React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    //base의 이름을 내가 선택한 것으로 변경해줌.
    setCheckBase(target.value); 
  }
  
  //base가 바뀔때마다 redux의 base에 저장해줍니다.
  useEffect(() => {
    dispatch(setSelectBase(checkBase));
  }, [checkBase])
  

  return (
    <>
      <div>
        <h3 className={style.base_title}>베이스</h3>
        <div className={style.base_checkbox}>
          <label className={style.base_value}>
            <input type="radio" name="base" value="보드카" onClick={clickBase}/> 보드카
          </label>
          <label className={style.base_value}>
            <input type="radio" name="base" value="럼" onClick={clickBase}/> 럼
          </label>
          <label className={style.base_value}>
            <input type="radio" name="base" value="진" onClick={clickBase}/> 진
          </label>
          <label className={style.base_value}>
            <input type="radio" name="base" value="데킬라" onClick={clickBase}/> 데킬라
          </label>
          <label className={style.base_value}>
            <input type="radio" name="base" value="위스키" onClick={clickBase}/> 위스키
          </label>
          <label className={style.base_value}>
            <input type="radio" name="base" value="꼬냑" onClick={clickBase}/> 꼬냑
          </label>
        </div>
      </div>
    </>
  );
};

export default Base;
