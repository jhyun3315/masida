import { useState } from "react";

import Result from "./Result";
import Sidebar from "./Sidebar";
import style from "./SearchPage.module.scss";
import { search_props } from "../../pages/search";

const SearchPage = (props: search_props) => {
  const [clickSearchBtn, setClickSearchBtn] = useState<boolean>(false);

  return (
    <>
      <div className={style.searchpage}>
        <div className={style.searchpage_left}>
          <Sidebar
            props={props}
            clickSearchBtn={clickSearchBtn}
            setClickSearchBtn={setClickSearchBtn}
          />
        </div>
        <div className={style.searchpage_right}>
          <Result clickSearchBtn={clickSearchBtn} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
