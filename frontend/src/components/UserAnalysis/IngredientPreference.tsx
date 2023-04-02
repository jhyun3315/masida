import { useState ,useEffect} from 'react';
import style from './CocktailPreference.module.scss';
import Piechart3 from '../UI/PieChart3';
import Progress_bar3 from '../UI/Progress_bar3';
import Barchart from '../UI/BarChart';
import { cocktail_props_analysis_ingredient } from '../../pages/user-analysis';
import { My_Analysis_card } from '../UI/Card_ui';
import { cocktailColor } from '../../type/cocktailPreference';

const IngredientPreference = (props: cocktail_props_analysis_ingredient) => {

  const[cocktailRateList,setCocktailRateList] = useState<cocktailColor[]>([]);
 
  const isLoading5 = props.isLoading_props5;
  const isLoading6 = props.isLoading_props6;
  const cocktailIngredient = props.cocktailList;
  const cocktailRecordList = props.cocktailRecordList;

  console.log(cocktailIngredient,"sriefjwdkofjigrefkwdl");

  // useEffect(() => {
  //   if (isLoading2) {
  //     setCocktailRateList(props.cocktailRating.data);
  //     console.log(props.cocktailRating.data, "ㅗ띠ㅒㅣㅐㅣㅐ");
  //     console.log(cocktailRateList, "sdsdsdsd");
  //   }
  // }, []);

  console.log(cocktailRateList,"sdsdsd2323");
  

  if (isLoading5) {
    return (
      <div className={style.cocktailPreference}>
        <p className={style.baseTitle}><strong>종효</strong>님의 재료 별 선호도 분석 결과</p>
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
            {/* {isLoading3 ?  */}
            <div className={style.cocktailPreference_analysis_lower}>
              <h3>별점 분포</h3>
              <div className={style.cocktailPreference_analysis_lower_content}>
                <div className={style.cocktailPreference_analysis_lower_content_left}>
                  {/* <Barchart {...cocktailRateList} /> */}
                </div>
                <div className={style.cocktailPreference_analysis_lower_content_right}>
                  <div className={style.cocktailPreference_analysis_lower_content_right_star}>
                    <div className={style.cocktail_star}>별점 분포</div>
                    {/* <div><img src="assets/icons/ratingIcon.png"></img>{props.cocktailRating.rating_average}</div> */}
                  </div>
                  <div className={style.cocktailPreference_analysis_lower_content_right_start_count}>
                    <div className={style.cocktail_star}>별점 개수</div>
                    {/* <div>{props.cocktailRating.rating_count}</div> */}
                  </div>
                  <div className={style.cocktailPreference_analysis_lower_content_right_star_max}>
                    <div className={style.cocktail_star}>최대 별점</div>
                    {/* <div><img src="assets/icons/ratingIcon.png"></img>{props.cocktailRating.rating_max + " " + props.cocktailRating.rating_max_color}</div> */}
                  </div>
                </div>
              </div>
            </div> : <>Error</>
            {/* } */}
          </div>
          <hr />
          <div className={style.cocktailPreference_list}>
            <h3>종효님과 취향(재료)과 비슷한 칵테일 추천</h3>
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