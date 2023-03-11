import Category from "./Category";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        <form className={style.search}>
          <input
            id="search"
            placeholder="Search"
            className={style.search_form}
          ></input>
          <button className={style.search_btn}>검색</button>
        </form>
        <Category />
      </div>
    </>
  );
};

export default Sidebar;
