import style from './Main_cocktail.module.scss';
import Image from 'next/image';

const Main_cocktail = () => { 
  return (
  <>
    <div className={ style.mainCocktail}>
      <h2>Explore Today's Cocktail</h2>
        <div className={ style.mainCocktail_content}>
          <div className={ style.mainCocktail_recommend}>
            <div className={ style.mainCocktail_recommend_img}>
              <Image src="/assets/image/mainbanner.png" alt="image" width={100} height={100} />
            </div>
            <div className={style.mainCocktail_recommend_detail }>
              <h2>진 토닉(Gin and tonic)</h2>
              <p>진과 토닉이 들어간 깔끔한 맛의 칵테일입니다.</p>
              <p>3.92(180)</p>
            </div> 
         </div>
         <div>무언가 캐러셀이 들어갈 자리</div>
        </div>
      </div>
  </>
  )
};

export default Main_cocktail;