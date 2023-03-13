import style from "./Base.module.scss";

type base = {
  base_name: string;
};

const Base = () => {
  return (
    <>
      <div>
        <h3 className={style.base_title}>베이스</h3>
        <div className={style.base_checkbox}>
          <label className={style.base_value}>
            <input type="radio" name="color" value="vodka" /> 보드카
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="rum" /> 럼
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="jin" /> 진
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="tequila" /> 데킬라
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="whiskey" /> 위스키
          </label>
          <label className={style.base_value}>
            <input type="radio" name="color" value="Cognac" /> 꼬냑
          </label>
        </div>
      </div>
    </>
  );
};

export default Base;
