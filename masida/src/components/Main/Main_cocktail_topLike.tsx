import style from './Main_cocktail_topLike.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main_cocktail_topLike = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 1000
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>dfdfdf</div>
        <div>34343434</div>
        <div>343434</div>
        <div>dfdfdfdf</div>
      </Slider>
    </div>)
};

export default Main_cocktail_topLike;