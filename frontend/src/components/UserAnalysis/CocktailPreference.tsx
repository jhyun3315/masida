import style from './CocktailPreference.module.scss';
import Piechart from '../UI/PieChart';
import Progress_bar from '../UI/Progress_bar';
import Barchart from '../UI/BarChart';
import { cocktailBase } from '../../type/cocktailPreference';

const CocktailPreference = (props: cocktailBase[]) => {
 
  return (
    <div className={ style.cocktailPreference}>
      <p className={ style.baseTitle}><strong>종효</strong>님의 칵테일 베이스 선호도 분석 결과</p>
      <div className={style.cocktailPreference_content}>
        <div className={style.cocktailPreference_analysis}>
          <div className={style.cocktailPreference_analysis_upper}>
            <div className={ style.cocktailPreference_analysis_upper_left}>
              <Piechart {...props} />
            </div>
            <div className={ style.cocktailPreference_analysis_upper_right}>
              <Progress_bar {...props} />
            </div>
          </div>
          <div className={style.cocktailPreference_analysis_lower}>
          <h3>별점 분포</h3>
            <div className={style.cocktailPreference_analysis_lower_content}>
              <div className={style.cocktailPreference_analysis_lower_content_left }>
                <Barchart/>
              </div>
              <div className={ style.cocktailPreference_analysis_lower_content_right}>
                <div className={ style.cocktailPreference_analysis_lower_content_right_star}>
                  <div className={ style.cocktail_star}>별점 분포</div>
                  <div><img src="assets/icons/ratingIcon.png"></img>3.0</div>
                </div>
                <div className={ style.cocktailPreference_analysis_lower_content_right_start_count}>
                  <div className={ style.cocktail_star}>별점 개수</div>
                  <div>47</div>
                </div>
                <div className={ style.cocktailPreference_analysis_lower_content_right_star_max}> 
                  <div className={ style.cocktail_star}>최대 별점</div>
                  <div><img src="assets/icons/ratingIcon.png"></img>4.7 진</div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <hr />
      <div className={style.cocktailPreference_list}>
        <h3>종효님과 취향(베이스)과 비슷한 칵테일 추천</h3>
      </div>
    </div>
  </div>
  )
};

export default CocktailPreference;