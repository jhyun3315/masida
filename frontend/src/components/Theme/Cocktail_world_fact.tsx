import style from './Cocktail_world_fact.module.scss';

const Cocktail_world_fact = () => {
  return (
    <div className={ style.cocktailWorld}>
      <h1>Interesting facts of Cocktail</h1>
      <p>칵테일에 대한 재미있는 사실들 3가지 </p>
      <div className={ style.cocktailWorld_lower}>
        <div className={ style.cocktailWord_content}> 
          <div className={ style.flip}>
            <div className={ style.world_cup_card}>
              <div className={style.world_cup_card_front}>
                <img src="/assets/image/cocktail_origin.png" className={style.world_cup_cocktailImg }></img>
              </div>
              <div className={ style.world_cup_card_back}>
               <p>"Cocktail"이라는 용어는 처음에는 마시는 것과 건강을 증진하는 것을 의미하는 의학 용어였다.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className={ style.cocktailWord_content}> 
          <div className={ style.flip}>
            <div className={ style.world_cup_card}>
              <div className={style.world_cup_card_front}>
                <img src="/assets/image/cocktail_woman3.jpg" className={style.world_cup_cocktailImg }></img>
              </div>
              <div className={ style.world_cup_card_back}>
               <p>1800년대 후반에는 여성들이 술을 마시는 것이 금지되었기 때문에, 여성들은 술을 마시는 것을 위장하기 위해 칵테일을 마시기 시작했다.
               </p>
              </div>
            </div>
          </div>
        </div>
      <div className={ style.cocktailWord_content}> 
        <div className={ style.flip}>
          <div className={ style.world_cup_card}>
            <div className={style.world_cup_card_front}>
              <img src="/assets/image/cocktail_school2.png" className={style.world_cup_cocktailImg }></img>
            </div>
            <div className={ style.world_cup_card_back}>
              <p>첫 번째 미국 바텐더 학교는 19세기 말 뉴욕에서 만들어졌으며, 바텐더들에게 칵테일 제조법과 섬세한 서빙 기술을 가르쳤습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
 };

export default Cocktail_world_fact;