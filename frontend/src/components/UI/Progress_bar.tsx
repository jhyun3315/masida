import style from './Progress_bar.module.scss';

const Progress_bar = () => {
  return (
    <>
      <div className={style.progressBar}>
      <h3>선호하는 베이스</h3>
        <div className={ style.progressBar_content}>
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>1. 진</p>
              <p>56%(23건)</p>
            </div>
            <progress value="50" min="0" max="100" />
          </div>
          <div className={style.progressBar_content_second}>
            <div className={ style.progressBar_content_desc}>
              <p>2. 진</p>
              <p>56%(23건)</p>
            </div>
            <progress value="23" min="0" max="100" />
          </div>
          <div className={style.progressBar_content_third}>
            <div className={ style.progressBar_content_desc}>
              <p>3. 진</p>
              <p>56%(23건)</p>
            </div>
            <progress value="12" min="0" max="100" />
          </div>
          <div className={style.progressBar_content_fourth}>
            <div className={ style.progressBar_content_desc}>
              <p>4. 진</p>
              <p>56%(23건)</p>
            </div>
            <progress value="6" min="0" max="100" />
          </div>
          <div className={style.progressBar_content_fifth}>
            <div className={ style.progressBar_content_desc}>
              <p>5. 진</p>
              <p>56%(23건)</p>
            </div>
            <progress value="6" min="0" max="100" />
          </div>
        </div>
      </div>
    </>)
};

export default Progress_bar;