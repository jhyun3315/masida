import { cocktailColor } from "../../type/cocktailPreference";
import style from "./Progress_bar.module.scss";

const Progress_bar = (props: cocktailColor[]) => {
  const style_bar_1 = {
    // backgroundColor: "#f4e77e",
    backgroundColor: `${props[0].color_rgb}`,
    width: `${props[0].color_ratio}%`,
  };

  const style_bar_2 = {
    backgroundColor: `${props[1].color_rgb}`,
    width: `${props[1].color_ratio}%`,
  };

  const style_bar_3 = {
    backgroundColor: `${props[2].color_rgb}`,
    width: `${props[2].color_ratio}%`,
  };

  const style_bar_4 = {
    backgroundColor: `${props[3].color_rgb}`,
    width: `${props[3].color_ratio}%`,
  };

  const style_bar_5 = {
    backgroundColor: `${props[4].color_rgb}`,
    width: `${props[4].color_ratio}%`,
  };

  return (
    <>
      <div className={style.progressBar}>
        <h3>선호하는 색상</h3>
        <div className={style.progressBar_content}>
          <div className={style.progressBar_content_first}>
            <div className={style.progressBar_content_desc}>
              <p>1. {props[0].color_name}</p>
              <p>
                {props[0].color_ratio}%({props[0].color_count}건)
              </p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_1}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
            <div className={style.progressBar_content_desc}>
              <p>2. {props[1].color_name}</p>
              <p>
                {props[1].color_ratio}%({props[1].color_count}건)
              </p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_2}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
            <div className={style.progressBar_content_desc}>
              <p>3. {props[2].color_name}</p>
              <p>
                {props[2].color_ratio}%({props[2].color_count}건)
              </p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_3}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
            <div className={style.progressBar_content_desc}>
              <p>4. {props[3].color_name}</p>
              <p>
                {props[3].color_ratio}%({props[3].color_count}건)
              </p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_4}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
            <div className={style.progressBar_content_desc}>
              <p>5. {props[4].color_name}</p>
              <p>
                {props[4].color_ratio}%({props[4].color_count}건)
              </p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_5}> &nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress_bar;
