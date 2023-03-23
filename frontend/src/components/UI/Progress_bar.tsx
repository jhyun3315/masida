import { cocktailBase } from '../../type/cocktailPreference';
import style from './Progress_bar.module.scss';

const Progress_bar = (props:cocktailBase[]) => {
  return (
    <>
      <div className={style.progressBar}>
      <h3>선호하는 베이스</h3>
        <div className={ style.progressBar_content}>
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>1. { props[0].base_name}</p>
              <p>{props[0].base_ratio}%({ props[0].base_count}건)</p>
            </div>
            <progress value={props[0].base_ratio}  max="100" />
          </div>
          <div className={style.progressBar_content_second}>
            <div className={ style.progressBar_content_desc}>
              <p>2. { props[1].base_name}</p>
              <p>{props[1].base_ratio}%({ props[1].base_count}건)</p>
            </div>
            <progress value={props[1].base_ratio} max="100" />
          </div>
          <div className={style.progressBar_content_third}>
            <div className={ style.progressBar_content_desc}>
              <p>3. { props[2].base_name}</p>
              <p>{props[2].base_ratio}%({ props[2].base_count}건)</p>
            </div>
            <progress value={ props[2].base_ratio}  max="100" />
          </div>
          <div className={style.progressBar_content_fourth}>
            <div className={ style.progressBar_content_desc}>
              <p>4. 진</p>
              <p>56%(23건)</p>
            </div>
            <progress value="6"  max="100" />
          </div>
          <div className={style.progressBar_content_fifth}>
            <div className={ style.progressBar_content_desc}>
              <p>5. 진</p>
              <p>56%(23건)</p>
            </div>
            <progress value="6"  max="100" />
          </div>
        </div>
      </div>
    </>)
};

export default Progress_bar;