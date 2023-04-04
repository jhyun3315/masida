import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectDifficulty } from "../../../store/category/difficultySlice";
import style from "./Difficulty.module.scss";

const Difficulty = () => {
  const [checkDifficulty, setCheckDifficulty] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectDifficulty(checkDifficulty));
  }, [checkDifficulty]);

  const checkedDifficulty = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLInputElement;

    if (target.checked === true) {
      setCheckDifficulty((checkDifficulty) => [
        ...checkDifficulty,
        target.value,
      ]);
    } else {
      setCheckDifficulty(
        checkDifficulty.filter((difficulty) => difficulty !== target.value)
      );
    }
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
              value="상"
              onClick={checkedDifficulty}
            />
            <label
              htmlFor="high"
              className={style.difficulty_selector_lev_high}
            >
              상
            </label>
            |
            <input
              type="checkbox"
              id="medium"
              className={style.difficulty_selector_btn}
              name="level"
              value="중"
              onClick={checkedDifficulty}
            />
            <label
              htmlFor="medium"
              className={style.difficulty_selector_lev_middle}
            >
              중
            </label>
            |
            <input
              type="checkbox"
              id="low"
              className={style.difficulty_selector_btn}
              name="level"
              value="하"
              onClick={checkedDifficulty}
            />
            <label htmlFor="low" className={style.difficulty_selector_lev_low}>
              하
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Difficulty;
