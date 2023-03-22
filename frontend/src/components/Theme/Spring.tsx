import { useEffect } from 'react';
import style from './Spring.module.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import lJson from "../../../public/assets/lotties/a-botanical-wreath-loading.json";
import lJson1 from "../../../public/assets/lotties/cherry-flowers.json";

 const lottie_style = {
    height: 500,
    innerWidth : 500,
    outerWidth : 500,
  };
  const bottom_lottie_style = {
    height: 300,
    // innerWidth : 1200,
    width : 300,
  };

const Spring = () => {
    useEffect(() => {
        AOS.init();
         document
        .querySelectorAll("img")
      .forEach((img) => img.addEventListener("load", () => AOS.refresh()));
    }, [])
    return (
        <>
            <div className={style.springContainer}>
                <div className={style.springTitle}>
                    <div className={style.springIntro}>
                    산뜻한 봄의 느낌을 담은 칵테일 TOP 3
                    </div>
                    <div className={style.springHashTag}>
                    #봄 #꽃향기 #산뜻함
                    </div>
                </div>
                <div className={style.themeRecommend}>
                    <div className={style.themeRecommend_right}>
                        <div>
                            봄은 따뜻한 날씨와 함께 상큼한 과일과 꽃의 향기가 가득한 계절입니다. 이번 칼럼에서는 봄에 어울리는 세 가지 상큼하고 가벼운 칵테일을 추천해 드리겠습니다.
                            그 중에서도 특히 여름에 어울리는 칵테일을 소개해 드리겠습니다.
                        </div>
                    </div>
                    <div className={style.themeRecommend_lottie}>
                        <Lottie loop play animationData={lJson} style={lottie_style} />
                    </div>
                </div>
                <div className={style.themeRecommend} data-aos="fade-left" data-aos-once="false">
                    <div className={style.themeRecommend_img}>
                        <img src="/assets/image/tequila.png" alt='tequila' className={style.cocktail_img}/>                           
                    <div>
                        데킬라 선라이즈
                    </div>
                    <div>
                        (Tequila Sunrise)
                    </div>
                    </div>
                    <div className={style.themeRecommend_left}>
                        <div>
                            첫 번째 칵테일인 
                            <span className={style.themeRecommend_name}> 데킬라</span>
                            입니다.
                            <br/>
                            데킬라 는 라임 주스와 럼, 그리고 당도를 높이기 위한 단순 시럽이 들어간 간단한 칵테일입니다. 봄의 상큼한 과일 향을 느낄 수 있는 라임 주스와 시원한 럼의 맛이 어우러져, 봄에 잘 어울리는 가벼운 맛을 느낄 수 있습니다.
                            는 입문자들에게도 친숙한 칵테일 중 하나입니다. 타코나 멕시칸 요리와 같이 즐기기에 딱인 칵테일입니다. 텔레키(Agave) 술, 트리플 섹 라임 주스, 설탕물을 섞은 후 얼음을 넣고 슈레디드 얼음으로 블렌딩하면 완성됩니다.
                        </div>
                    </div>
                </div>
                <div className={style.themeRecommend} data-aos="fade-right" data-aos-delay="50" data-aos-once="false">
                    <div className={style.themeRecommend_right}>
                        <div>
                            두 번째 칵테일은
                            <span className={style.themeRecommend_name}> 프렌치 75</span>
                            입니다.
                            <br/>
                            진, 레몬 주스, 설탕 시럽, 그리고 스파클링 와인이 들어간 칵테일입니다. 상큼하면서도 톡 쏘는 진의 맛과 스파클링 와인의 거품이 어우러져 봄의 경쾌한 분위기를 연출해 줍니다.
                        </div>
                    </div>
                    <div className={style.themeRecommend_img}>
                        <img src="/assets/image/french75.png" alt='french75' className={style.cocktail_img}/>                           
                    <div>
                        프렌치 75
                    </div>
                    <div>
                        (French 75)
                    </div>
                    </div>
                </div>
                <div className={style.themeRecommend} data-aos="fade-right" data-aos-once="false">
                    <div className={style.themeRecommend_img}>
                        <img src="/assets/image/paloma.png" alt='paloma' className={style.cocktail_img}/>                           
                    <div>
                        팔로마
                    </div>
                    <div>
                        (Paloma)
                    </div>
                    </div>
                    <div className={style.themeRecommend_left}>
                        <div>
                            마지막 칵테일은
                            <span className={style.themeRecommend_name}> 팔로마</span>
                            입니다.
                            <br/>
                            그레이프프루트 주스와 테킬라, 소금, 라임 주스로 만든 칵테일입니다. 상큼하면서도 산뜻한 그레이프프루트의 맛과 강렬한 알코올의 맛이 어우러져, 봄에 즐길 수 있는 경쾌한 맛을 느낄 수 있습니다. 소금을 뿌린 잔가장도 봄의 분위기에 어울리며, 라임 주스로 조화를 이루는 맛도 좋습니다.
                            <br/><br/><br/><br/><br/><br/><br/>
                            봄에는 산뜻하고 상큼한 맛이 어울리는 칵테일을 즐기면서 따뜻한 날씨와 함께 기분 좋은 시간을 보내보세요. 또한, 칵테일을 즐길 때는 적당한 양과 적절한 속도로 마시는 것이 중요합니다. 즐거운 봄 칵테일 탐방 되시길 바랍니다!
                        </div>
                    </div>
                </div>
                {/* <Lottie loop play animationData={lJson1} style={bottom_lottie_style} /> */}
            </div>
        </>
    )

}

export default Spring;