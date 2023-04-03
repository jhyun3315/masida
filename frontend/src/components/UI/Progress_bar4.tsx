import {cocktailAgeGender } from '../../type/cocktailPreference';
import style from './Progress_bar.module.scss';

const Progress_bar3 = (props: cocktailAgeGender[]) => {

  return (
    <>
      <div className={style.progressBar}>
        <h3>칵테일 점유율</h3>
        <div className={ style.progressBar_content}>
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>1. {props[0].cocktail_name_ko}{ "["+props[0].cocktail_name_en+"]"}</p>
              <p>{props[0].cocktail_ratio}%({ props[0].cocktail_count}건)</p>
            </div>
            <progress value={props[0].cocktail_ratio} max="100" />
          </div>
          <div className={style.progressBar_content_second}>
            <div className={ style.progressBar_content_desc}>
              <p>2. { props[1].cocktail_name_ko}{ "["+props[1].cocktail_name_en+"]"}</p>
              <p>{props[1].cocktail_ratio}%({ props[1].cocktail_count}건)</p>
            </div>
            <progress value={props[1].cocktail_ratio} max="100" />
          </div>
          <div className={style.progressBar_content_third}>
           <div className={ style.progressBar_content_desc}>
              <p>3. { props[2].cocktail_name_ko}{ "["+props[2].cocktail_name_en+"]"}</p>
              <p>{props[2].cocktail_ratio}%({ props[2].cocktail_count}건)</p>
            </div>
            <progress value={props[2].cocktail_ratio} max="100" />
          </div>
          <div className={style.progressBar_content_fourth}>
            <div className={ style.progressBar_content_desc}>
              <p>4. { props[3].cocktail_name_ko}{ "["+props[3].cocktail_name_en+"]"}</p>
              <p>{props[3].cocktail_ratio}%({ props[3].cocktail_count}건)</p>
            </div>
            <progress value={props[3].cocktail_ratio }  max="100" />
          </div>
          <div className={style.progressBar_content_fifth}>
            <div className={ style.progressBar_content_desc}>
              <p>5. { props[4].cocktail_name_ko}{ "["+props[4].cocktail_name_en+"]"}</p>
              <p>{props[4].cocktail_ratio}%({props[4].cocktail_count}건)</p>
            </div>
            <progress value={ props[4].cocktail_ratio}  max="100" />
          </div>
        </div>
      </div>
    </>
    )
};

export default Progress_bar3;