import { cocktailBase } from '../../type/cocktailPreference';
import style from './Progress_bar.module.scss';

const Progress_bar = (props: cocktailBase[]) => {
  // const data = [];
  // for (let i = 0; i < 5; i++){
  //   data.push(props[i]); 
  // }

  return (
    <>
      <div className={style.progressBar}>
        <h3>선호하는 베이스</h3>
        <div className={ style.progressBar_content}>
          {/* {data.map((key, idx) => (
          <div className={`style.progressBar_content_${idx}`}>
            <div className={ style.progressBar_content_desc}>
              <p>{(idx+1)+". "+key.base_name}</p>
              <p>{key.base_ratio}%({key.base_count}건)</p>
            </div>
            <progress value={key.base_ratio}  max="100" />
          </div>
          ))} */}
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>1. { props[0].base_name}</p>
              <p>{props[0].base_ratio}%({ props[0].base_count}건)</p>
            </div>
            <progress value={props[0].base_ratio} max="100" />
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
            <progress value={props[2].base_ratio} max="100" />
          </div>
          <div className={style.progressBar_content_fourth}>
            <div className={ style.progressBar_content_desc}>
              <p>4. { props[3].base_name}</p>
              <p>{props[3].base_ratio}%({ props[3].base_count}건)</p>
            </div>
            <progress value={props[3].base_ratio }  max="100" />
          </div>
          <div className={style.progressBar_content_fifth}>
            <div className={ style.progressBar_content_desc}>
              <p>5. { props[4].base_name}</p>
              <p>{props[4].base_ratio}%({props[4].base_count}건)</p>
            </div>
            <progress value={ props[4].base_ratio}  max="100" />
          </div>
        </div>
      </div>
    </>
    )
};

export default Progress_bar;