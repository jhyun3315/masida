import Result from "./Result";
import Sidebar from "./Sidebar";
import style from "./SearchPage.module.scss";
import { search_props } from "../../pages/search";

const SearchPage = (props: search_props) => {
  return (
    <>
      <div className={style.searchpage}>
        <div className={style.searchpage_left}>
          <Sidebar {...props} />
        </div>
        <div className={style.searchpage_right}>
          <Result />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
