import { useState } from "react";
import style from "./Color.module.scss";

const Color = () => {
  const [checked, isChecked] = useState<number>(0);
  const [errorMsg, isErrorMsg] = useState<boolean>(false);

  //색상은 2개이상 선택할수 없게 만들어주게 하려함.
  const checkedColor = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLInputElement;
    if (checked > 1 && target.checked === true) {
      //만약 2개가 선택되었다면?
      if (target.checked === true) {
        target.checked = false;
      } else {
        target.checked = true;
      }
      isErrorMsg(true);
    } else {
      if (target.checked === true) {
        isChecked(checked + 1);
      } else {
        isChecked(checked - 1);
      }
      isErrorMsg(false);
    }
    console.log(checked);
  };

  return (
    <>
      <div>
        <h3 className={style.color_title}>색상</h3>
        <div className={style.color}>
          <label>
            <input
              type="checkbox"
              name="color"
              value="red"
              className={style.color_red}
              onClick={checkedColor}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="orange"
              className={style.color_orange}
              onClick={checkedColor}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="yellow"
              className={style.color_yellow}
              onClick={checkedColor}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="green"
              className={style.color_green}
              onClick={checkedColor}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="blue"
              className={style.color_blue}
              onClick={checkedColor}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="purple"
              className={style.color_purple}
              onClick={checkedColor}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="white"
              className={style.color_white}
              onClick={checkedColor}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="black"
              className={style.color_black}
              onClick={checkedColor}
            />
          </label>
          {errorMsg ? (
            <div className={style.color_errmsg}>
              색상은 최대 2개까지 선택 가능합니다.
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Color;
