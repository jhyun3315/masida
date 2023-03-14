import style from './Main_cocktail.module.scss';
import Image from 'next/image';
import Main_cocktail_topLike from './Main_cocktail_topLike';

const Main_cocktail = () => { 
  return (
  <>
    <div className={ style.mainCocktail}>
      <h2 className={ style.mainCocktail_header}>Explore Today's Cocktail</h2>
        <div className={ style.mainCocktail_content}>
          <div className={ style.mainCocktail_recommend}>
            <div className={ style.mainCocktail_recommend_img}>
              <Image src="/assets/image/mainbanner.png" alt="image" width={300} height={300} />
            </div>
            <div className={style.mainCocktail_recommend_detail }>
              <h2>진 토닉(Gin and tonic)</h2>
              <p>진과 토닉이 들어간 깔끔한 맛의 칵테일입니다. <br/> <Image src="/assets/icons/ratingICON.png" alt="image" width={10} height={10}></Image>3.92(180)</p>
            </div> 
         </div>
          <div className={ style.mainCocktail_topLike}>
            <div>
              <h2>Trending Now</h2>
              <Main_cocktail_topLike/>
            </div>
          </div>
        </div>
      </div>
  </>
  )
};

export default Main_cocktail;