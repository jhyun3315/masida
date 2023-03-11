import style from "./Ingredient.module.scss";

const Ingredient = () => {
  return (
    <>
      <div className={style.ingredient}>
        <div className={style.ingredient_form}>
          <h3>재료</h3>
          <input
            type="search"
            placeholder="Search"
            className={style.ingredient_form_input}
          />
        </div>
        <div className={style.ingredient_search_result_list}></div>
      </div>
    </>
  );
};

export default Ingredient;
