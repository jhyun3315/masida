import { useState} from 'react';
import style from './UserPreference.module.scss';
import Piechart4 from '../UI/PieChart4';
import Progress_bar4 from '../UI/Progress_bar4';
import { cocktail_props_analysis_age_gender } from '../../pages/user-analysis';
import { My_Analysis_card } from '../UI/Card_ui';
import { cocktailAgeGender } from '../../type/cocktailPreference';
import { store } from '../../../store/store';

const UserPreference = (props: cocktail_props_analysis_age_gender) => {

  const userName = store.getState().user.userInfo.user_name;
  // const[cocktailRateList,setCocktailRateList] = useState<cocktailAgeGender[]>([]);
 
  const isLoading7 = props.isLoading_props7;
  const cocktailBase = props.cocktailList;
  const cocktailRecordList = props.cocktailRecordList;


  if (isLoading7) {
    return (
      <div className={style.cocktailPreference}>
        <p className={style.baseTitle}><strong>{ userName}</strong>님과 유사한 사용자 선호도</p>
        <div className={style.cocktailPreference_content}>
          <div className={style.cocktailPreference_analysis}>
            <div className={style.cocktailPreference_analysis_upper}>
              <div className={style.cocktailPreference_analysis_upper_left}>
                <Piechart4 {...cocktailBase} />
              </div>
              <div className={style.cocktailPreference_analysis_upper_right}>
                <Progress_bar4 {...cocktailBase} />
              </div>
            </div>
          </div>
          <hr />
          <div className={style.cocktailPreference_list}>
            <h3>{ userName}님의 나이&성별과 비슷한 칵테일 추천</h3>
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

export default UserPreference;