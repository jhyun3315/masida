import { useState ,useEffect} from 'react';
import style from './CocktailPreference.module.scss';
import Piechart from '../UI/PieChart';
import Progress_bar from '../UI/Progress_bar';
import Barchart from '../UI/BarChart';
import { cocktail_props_analysis } from '../../pages/user-analysis';
import { My_Analysis_card } from '../UI/Card_ui';
import { cocktailBaseRating } from '../../type/cocktailRating';
import Loading_spinner from '../UI/Loading_spinner';

const CocktailPreference = (props: cocktail_props_analysis) => {

  const[cocktailRateList,setCocktailRateList] = useState<cocktailBaseRating[]>([]);
  
  const isLoading = props.isLoading_props1;
  const isLoading2 = props.isLoading_props2;
  const cocktailBase = props.cocktailList;
  const cocktailRecordList = props.cocktailRecordList;
  
  useEffect(() => {
   if (isLoading2 && props.cocktailRating) {
     setCocktailRateList(props.cocktailRating.data);
    };
}, [isLoading2, props.cocktailRating]);
  

  if (isLoading && isLoading2) {
    return (
      <div className={style.cocktailPreference}>
        <p className={style.baseTitle}><strong>종효</strong>님의 칵테일 베이스 선호도 분석 결과</p>
        <div className={style.cocktailPreference_content}>
          <div className={style.cocktailPreference_analysis}>
            <div className={style.cocktailPreference_analysis_upper}>
              <div className={style.cocktailPreference_analysis_upper_left}>
                <Piechart {...cocktailBase} />
              </div>
              <div className={style.cocktailPreference_analysis_upper_right}>
                <Progress_bar {...cocktailBase} />
              </div>
            </div>
             <div className={style.cocktailPreference_analysis_lower}>
              <h3>별점 분포</h3>
              <div className={style.cocktailPreference_analysis_lower_content}>
                <div className={style.cocktailPreference_analysis_lower_content_left}>
                  { isLoading2&&(cocktailRateList.length!=0) ?<Barchart {...cocktailRateList} />:<>loading...</>}
                </div>
                <div className={style.cocktailPreference_analysis_lower_content_right}>
                  <div className={style.cocktailPreference_analysis_lower_content_right_star}>
                    <div className={style.cocktail_star}>별점 분포</div>
                    <div><img src="assets/icons/ratingIcon.png"></img>{props.cocktailRating.rating_average}</div>
                  </div>
                  <div className={style.cocktailPreference_analysis_lower_content_right_start_count}>
                    <div className={style.cocktail_star}>별점 개수</div>
                    <div className={ style.cocktail_star_value}>{props.cocktailRating.rating_count}</div>
                  </div>
                  <div className={style.cocktailPreference_analysis_lower_content_right_star_max}>
                    <div className={style.cocktail_star}>최대 별점</div>
                    <div><img src="assets/icons/ratingIcon.png"></img>{props.cocktailRating.rating_max + " " + props.cocktailRating.rating_max_base}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={style.cocktailPreference_list}>
            <h3>종효님과 취향(베이스)과 비슷한 칵테일 추천</h3>
            <div className={style.cocktailPreference_list_content}>
              {cocktailRecordList.map((key => (
                <My_Analysis_card {...key} />
              )))}
            </div>
          </div>
        </div>
      </div>
    );
  } return(
    <Loading_spinner/>
  )
};

export default CocktailPreference;