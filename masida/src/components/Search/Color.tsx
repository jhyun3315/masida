import style from "./Color.module.scss";

type base = {
  base_name: string;
};

const Color = () => {
  const click = () => {
    console.log("나 눌렸어");
  };
  return (
    <>
      <div>
        <h3>색상</h3>
        <div className={style.color}>
          <label>
            <input
              type="checkbox"
              name="color"
              value="red"
              className={style.color_red}
              onClick={click}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="orange"
              className={style.color_orange}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="yellow"
              className={style.color_yellow}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="green"
              className={style.color_green}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="blue"
              className={style.color_blue}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="purple"
              className={style.color_purple}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="white"
              className={style.color_white}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="color"
              value="black"
              className={style.color_black}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Color;
