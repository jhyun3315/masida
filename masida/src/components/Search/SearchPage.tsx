import Result from "./Result";
import Sidebar from "./Sidebar";
import style from "./SearchPage.module.scss";
const SearchPage = () => {
  return (
    <>
      <div className={style.searchpage}>
        <div className={style.searchpage_left}>
          <Sidebar />
        </div>
        <div className={style.searchpage_right}>
          <Result />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
