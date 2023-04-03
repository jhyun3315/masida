import { useRef } from "react";
import { useRouter } from "next/router";
import { KeyboardEvent } from "react";
import style from "./Main_search.module.scss";
import { useDispatch } from "react-redux";
import { setSelectName } from "../../../store/category/nameSlice";

const Main_search = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cocktailSearchRef = useRef<HTMLInputElement>(null);
  const searchCocktail = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      dispatch(setSelectName(target.value)); //이름을 라우터에 저장하고 나서 보내줍니다.

      router.push("/search");
    }
  };
  return (
    <>
      <div className={style.mainSearch}>
        <div className={style.searchText}>
          <h3>Search for cocktails</h3>
          <p>궁금하신 칵테일에 대해 검색해보세요.</p>
        </div>
        <div className={style.searchBox}>
          <input
            id="cocktailSearch"
            type="text"
            placeholder="Seacrh"
            ref={cocktailSearchRef}
            onKeyUp={searchCocktail}
          />
        </div>
      </div>
    </>
  );
};

export default Main_search;
