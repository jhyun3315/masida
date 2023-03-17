import { useRef } from 'react';
import style from './Main_search.module.scss';

const Main_search = () => {
  const cocktailSearchRef = useRef(null);
  return (
  <>
    <div className={ style.mainSearch}>
      <div className={style.searchText}>
        <h3>Search for cocktails</h3>
        <p>궁금하신 칵테일에 대해 검색해보세요.</p>
      </div>
      <div className={style.searchBox} >
        <input id="cocktailSearch" type="text" placeholder='Seacrh' ref={cocktailSearchRef} />
      </div>
    </div>
  </>
  )
};

export default Main_search;