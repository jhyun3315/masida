import style from "./Difficulty.module.scss";

const Difficulty = () => {

  const click = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLInputElement;
    console.log(target.checked);
  };
  return (
    <>
      <div>
        <div className={style.difficulty}>
          <h3 className={style.difficulty_title}>난이도</h3>
          <div className={style.difficulty_selector}>
            <input
              type="checkbox"
              id="high"
              className={style.difficulty_selector_btn}
              name="level"
              onClick={click}
            />
            <label htmlFor="high" className={style.difficulty_selector_lev}>
              상
            </label>
            |
            <input
              type="checkbox"
              id="medium"
              className={style.difficulty_selector_btn}
              name="level"
            />
            <label htmlFor="medium" className={style.difficulty_selector_lev}>
              중
            </label>
            |
            <input
              type="checkbox"
              id="low"
              className={style.difficulty_selector_btn}
              name="level"
            />
            <label htmlFor="low" className={style.difficulty_selector_lev}>
              하
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Difficulty;
