import Category from "./Category";
import style from "./Sidebar.module.scss";
import { Dispatch, useState, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search_props } from "../../pages/search";
import { setSelectName } from "../../../store/category/nameSlice";
import { RootState } from "../../../store/store";

interface propsType {
  props: search_props;
  clickSearchBtn: boolean;
  setClickSearchBtn: Dispatch<SetStateAction<boolean>>;
  addNumIngredient : number[];
  setAddNumIngredient : Dispatch<SetStateAction<number[]>>
}

const Sidebar2: React.FunctionComponent<propsType> = ({
  props,
  clickSearchBtn,
  setClickSearchBtn,
  addNumIngredient,
  setAddNumIngredient
}) => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState<string>("");

  //내가 데이터를 보냈을 때 백에서 true인것만 빼서 해도 됍니다.
  const searchCocktailName = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchName(target.value);
  };

  let name = useSelector((state: RootState) => state.nameSelect.searchName);
  
  useEffect(() => {
    setSearchName(name);
  },[])

  //칵테일 이름 dispatch해주어서 넣어주기
  useEffect(() => {
    dispatch(setSelectName(searchName));
  }, [searchName]);

  const searchCocktail = (e: React.MouseEvent<HTMLElement>) => {
    setClickSearchBtn(!clickSearchBtn);
  };

  return (
    <>
      <div className={style.sidebar}>
        <form className={style.search}>
          <input
            id="search"
            placeholder="Search"
            className={style.search_form}
            value={searchName}
            onChange={searchCocktailName}
          />
          <button className={style.search_btn} onClick={searchCocktail}>
            검색
          </button>
        </form>
        <Category props={props} addNumIngredient={addNumIngredient}
            setAddNumIngredient={setAddNumIngredient} />
      </div>
    </>
  );
};

export default Sidebar2;
