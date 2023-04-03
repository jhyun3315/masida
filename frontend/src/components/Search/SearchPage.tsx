import { useState } from "react";

import Result from "./Result";
import Sidebar from "./Sidebar";
import style from "./SearchPage.module.scss";
import { search_props } from "../../pages/search";

const SearchPage = (props: search_props) => {
  const [clickSearchBtn, setClickSearchBtn] = useState<boolean>(false);
  let [addNumIngredient, setAddNumIngredient] = useState<number[]>([]);

  return (
    <>
      <div className={style.searchpage}>
        <div className={style.searchpage_left}>
          <Sidebar
            props={props}
            clickSearchBtn={clickSearchBtn}
            setClickSearchBtn={setClickSearchBtn}
            addNumIngredient={addNumIngredient}
            setAddNumIngredient={setAddNumIngredient}
          />
        </div>
        <div className={style.searchpage_right}>
          <Result clickSearchBtn={clickSearchBtn} 
          addNumIngredient={addNumIngredient} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
