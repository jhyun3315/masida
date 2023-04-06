import { useDispatch } from "react-redux";
import { setSelectBase } from "../../../store/category/baseSlice";
import { setSelectColor } from "../../../store/category/colorSlice";
import { setSelectDifficulty } from "../../../store/category/difficultySlice";
import { setSelectName } from "../../../store/category/nameSlice";

//모든 category초기값을 초기화 시켜주는 함수입니다.
const ResetCategory = () => {
  const dispatch = useDispatch();
  dispatch(setSelectBase("")); //초기화
  dispatch(setSelectColor([])); //초기화
  dispatch(setSelectDifficulty([])); //초기화
  dispatch(setSelectName("")); //초기화
};

export default ResetCategory;
