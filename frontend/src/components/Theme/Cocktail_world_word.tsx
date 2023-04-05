import style from './Cocktail_world_word.module.scss';

const Cocktail_world_word = () => {
  return (
    <div className={ style.cocktailWorld}>
      <h1>Most often feature word of Cocktail</h1>
      <p>칵테일 이름에서 가장 많이 등장한 단어</p>
      <div className={ style.cocktailWorld_lower}>
        <div className={ style.cocktailWord_content}> 
          <div className={ style.flip}>
            <div className={ style.world_cup_card}>
              <div className={style.world_cup_card_front}>
                <img src="/assets/image/russia3.jpg" className={style.world_cup_cocktailImg }></img>
              </div>
              <div className={ style.world_cup_card_back}>
               <h1>나라(러시아)</h1>
               <p>"Russian"이라는 단어는 칵테일 이름에서 일반적으로 칵테일 중 하나인 "White Russian"이나 "Black Russian"을 의미하기도 합니다.
                  White Russian은 보드카, 커피 리큐어, 휴우스 밀크로 만든 칵테일을 뜻하며, Black Russian은 보드카, 커피 리큐어로 만든 칵테일을 뜻합니다.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className={ style.cocktailWord_content}> 
          <div className={ style.flip}>
            <div className={ style.world_cup_card}>
              <div className={style.world_cup_card_front}>
                <img src="/assets/image/gin2.jpg" className={style.world_cup_cocktailImg }></img>
              </div>
              <div className={ style.world_cup_card_back}>
               <h1>베이스 (진)</h1>
               <p>Gin은 다양한 향신료와 허브가 블렌딩되어 있어 다양한 맛과 향을 연출할 수 있습니다. 
                  Gin은 주로 주정을 사용하여 만들어지기 때문에 중성적인 맛이 강하고, 
                  이러한 중립성은 다른 재료들과 잘 어울리며, 쉽게 섞여서 완벽한 베이스가 될 수 있습니다.
               </p>
              </div>
            </div>
          </div>
        </div>
      <div className={ style.cocktailWord_content}> 
        <div className={ style.flip}>
          <div className={ style.world_cup_card}>
            <div className={style.world_cup_card_front}>
              <img src="/assets/image/rose2.jpg" className={style.world_cup_cocktailImg }></img>
            </div>
            <div className={ style.world_cup_card_back}>
              <h1>꽃(장미)</h1>
              <p>로즈 워터는 장미 꽃에서 추출한 에센셜 오일로, 꽃의 향기와 매우 유사합니다. 
                 따라서 로즈 워터를 사용하여 칵테일에 꽃향기와 신선한 맛을 더할 수 있습니다. 
                 또한 "Rose"라는 단어는 로제 와인(Rosé wine)과 관련된 칵테일 이름에도 사용될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
 };

export default Cocktail_world_word;