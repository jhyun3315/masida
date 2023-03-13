import style from "./Base.module.scss";

type base = {
  base_name: string;
};

const Base = () => {
  return (
    <>
      <div>
        <h3>베이스</h3>
        <div className={style.base_checkbox}>
          <label className={style.base_value}>
            <input type="radio" name="color" value="blue" /> 보드카
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="red" /> 럼
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="blue" /> 진
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="red" /> 데킬라
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="blue" /> 위스키
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="red" /> 꼬냑
          </label>
        </div>
      </div>
    </>
  );
};

export default Base;
