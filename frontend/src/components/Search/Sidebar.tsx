import Category from "./Category";
import style from "./Sidebar.module.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { search_props } from "../../pages/search";
import { setSelectName } from "../../../store/category/nameSlice";

const Sidebar2 = (props: search_props) => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState<string>("");

  //내가 데이터를 보냈을 때 백에서 true인것만 빼서 해도 됍니다.
  const searchCocktailName = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchName(target.value);
  };

  //칵테일 이름 dispatch해주어서 넣어주기
  useEffect(() => {
    dispatch(setSelectName(searchName));
  }, [searchName]);

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
          <button className={style.search_btn}>검색</button>
        </form>
        <Category {...props} />
      </div>
    </>
  );
};

export default Sidebar2;
