import { useState ,useEffect} from 'react';
import style from './CocktailPreference.module.scss';
import Piechart3 from '../UI/PieChart3';
import Progress_bar3 from '../UI/Progress_bar3';
import Barchart3 from '../UI/BarChart3';
import { cocktail_props_analysis_ingredient } from '../../pages/user-analysis';
import { My_Analysis_card } from '../UI/Card_ui';
import { cocktailIngredientRating } from '../../type/cocktailRating';
import { store } from '../../../store/store';

const IngredientPreference = (props: cocktail_props_analysis_ingredient) => {

  const userName = store.getState().user.userInfo.user_name;
  const[cocktailRateList,setCocktailRateList] = useState<cocktailIngredientRating[]>([]);
 
  const isLoading5 = props.isLoading_props5;
  const isLoading6 = props.isLoading_props6;
  const cocktailIngredient = props.cocktailList;
  const cocktailRecordList = props.cocktailRecordList;

  useEffect(() => {
    if (isLoading6 && props.cocktailRating) {
      setCocktailRateList(props.cocktailRating.data);
    }
  },  [isLoading6, props.cocktailRating]);


  if (isLoading5 && isLoading6) {
    return (
      <div className={style.cocktailPreference}>
        <p className={style.baseTitle}><strong>{userName}</strong>님의 재료 별 선호도 분석 결과</p>
        <div className={style.cocktailPreference_content}>
          <div className={style.cocktailPreference_analysis}>
            <div className={style.cocktailPreference_analysis_upper}>
              <div className={style.cocktailPreference_analysis_upper_left}>
                <Piechart3 {...cocktailIngredient} />
              </div>
              <div className={style.cocktailPreference_analysis_upper_right}>
                <Progress_bar3 {...cocktailIngredient} />
              </div>
            </div>
            <div className={style.cocktailPreference_analysis_lower}>
              <h3>별점 분포</h3>
              <div className={style.cocktailPreference_analysis_lower_content}>
                <div className={style.cocktailPreference_analysis_lower_content_left}>
                  { isLoading6&&(cocktailRateList.length!=0) ?<Barchart3 {...cocktailRateList} />:<>loading...</>}
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
                    <div><img src="assets/icons/ratingIcon.png"></img>{props.cocktailRating.rating_max + " " + props.cocktailRating.rating_max_ingredient}</div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <hr />
          <div className={style.cocktailPreference_list}>
            <h3>{ userName}님과 취향(재료)과 비슷한 칵테일 추천</h3>
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
    <div>error</div>
  )
};

export default IngredientPreference;