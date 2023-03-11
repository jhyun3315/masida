import style from './Main_search.module.scss';

const Main_search = () => {
  return (<>
    <div className={ style.mainSearch}>
      <div className={style.searchText}>
        <h3>Search for cocktails</h3>
        <p>궁금하신 칵테일에 대해 검색해보세요.</p>
      </div>
      <div className={ style.searchBox}>
        <input placeholder='Seacrh'/>
      </div>
    </div>
  </>)
};

export default Main_search;