import style from './Main_cocktail.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cocktail_props } from '../../pages';
import { ImageLoaderProps } from 'next/image';
import { imgLoader } from '../../utils/imgLoader';

const Main_cocktail = (props: cocktail_props) => {
  
  const cocktailInfo = props.random_type;
  const cocktailList = props.like_list.data;
   
  const settings = {
    // dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
  <>
    <div className={ style.mainCocktail}>
      <h2 className={ style.mainCocktail_header}>Explore Today's Cocktail</h2>
        <div className={ style.mainCocktail_content}>
          <div className={ style.mainCocktail_recommend}>
            <div className={ style.mainCocktail_recommend_img}>
              <Image loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} src={cocktailInfo.cocktail_img} alt="image" width={300} height={300} />
            </div>
            <div className={style.mainCocktail_recommend_detail }>
              <h2>{cocktailInfo.cocktail_name_ko}({cocktailInfo.cocktail_name_en})</h2>
              <p>{cocktailInfo.cocktail_content} <br /> <Image loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} src="/assets/icons/ratingICON.png" alt="image" width={10} height={10}></Image>{cocktailInfo.cocktail_rating}({cocktailInfo.cocktail_comments})</p>
            </div> 
         </div>
          <div className={ style.mainCocktail_topLike}>
            <div>
              <h2>Trending Now</h2>
              <Slider {...settings}>
                {cocktailList.map((key) => (
                  <div className={style.cocktailTopLike}>
                  <div className={style.cocktailTopLike_Img}>
                      <Image loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} src={key.cocktail_img} alt="image" width={200} height={200} />
                  </div>
                  <div className={style.cocktailTopLike_desc}>
                      <p>{ key.cocktail_name_ko}</p>
                      <p>({ key.cocktail_name_en})</p>
                      <p><Image  loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} src="/assets/icons/ratingICON.png" alt="image" width={10} height={10}></Image>{key.cocktail_rating}({key.cocktail_comments })</p>
                  </div>
                </div>
                ))}
               </Slider>
              <Link href="/search">더 많은 레시피 보러가기{">"}</Link>
            </div>
          </div>
        </div>
      </div>
  </>
  )
};

export default Main_cocktail;