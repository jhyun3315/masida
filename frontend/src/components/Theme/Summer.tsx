import { useEffect } from "react";
import style from './Summer.module.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import lJson from "../../../public/assets/lotties/enjoy-beach-vacation.json";
import lJson2 from "../../../public/assets/lotties/summer-vacation.json";

const Summer = () => {
    const lottie_style = {
    height: 500,
    innerWidth : 500,
    outerWidth : 500,
    };
    const bottom_lottie_style = {
    height: 500,
    innerWidth : 1200,
    outerWidth : 1200,
    };
    useEffect(() => {
        AOS.init();
    }, []);

    const handleScroll = (e : React.MouseEvent<HTMLElement>) => {
        if(!window.scrollY)
        return;

        window.scrollTo({
            top: 0,
            behavior : "smooth",
        })
    }

    return (
        <>
            <div className={style.summerContainer}>
                <div className={style.summerTitle}>
                    <div className={style.summerIntro}>
                    무더운 여름 밤, 색감부터 시원한 칵테일 TOP 3
                    </div>
                    <div className={style.summerHashTag}>
                    #여름  #시원한  #Cool
                    </div>
                </div>
                <div className={style.themeRecommend} data-aos="fade-right" data-aos-once="false">
                    <div className={style.themeRecommend_right}>
                        <div>
                            여름은 더위를 식히기 위해 시원한 음료를 즐기는 계절입니다.
                            상큼하고 시원한 맛으로 유명한 칵테일은 많은 사람들에게 인기가 있습니다.
                            그 중에서도 특히 여름에 어울리는 칵테일을 소개해 드리겠습니다.
                        </div>
                    </div>
                    <div className={style.themeRecommend_lottie}>
                        <Lottie loop play animationData={lJson2} style={lottie_style} />
                    </div>
                </div>
                <div className={style.themeRecommend} data-aos="fade-left" data-aos-once="false">
                    <div className={style.themeRecommend_img}>
                        <img src="/assets/image/Mojito.png" alt='mojito' className={style.cocktail_img}/>                           
                    <div>
                        모히또
                    </div>
                    <div>
                        (Mojito)
                    </div>
                    </div>
                    <div className={style.themeRecommend_left}>
                        <div>
                            첫 번째로 소개할 칵테일은 
                            <span className={style.themeRecommend_name}> "모히또"</span>
                            입니다.
                            <br/>
                            모히또는 민트와 라임 주스가 들어가 시원하고 청량감 있는 맛이 특징입니다.
                            라임의 상큼함과 민트의 향이 조화롭게 어우러져 여름날 더위를 날려줍니다.
                            라임 대신 레몬이나 자몽을 사용해도 좋으며, 라임 슬라이스와 민트 잎을 장식으로 활용하면 시각적으로도 멋스럽습니다.
                        </div>
                    </div>
                </div>
                <div className={style.themeRecommend} data-aos="fade-right" data-aos-delay="50" data-aos-once="false">
                    <div className={style.themeRecommend_right}>
                        <div>
                            두 번째로 추천할 칵테일은
                            <span className={style.themeRecommend_name}> "피냐 콜라다"</span>
                            입니다.
                            <br/>
                            피나 콜라다는 파인애플과 코코넛의 상큼하고 부드러운 맛이 인상적입니다.
                            빈티지한 우산과 함께 서빙하면 남녀노소 모두에게 인기가 있습니다.
                            칵테일에 사용되는 코코넛 크림은 일반 슈퍼마켓에서 쉽게 구할 수 있으며,
                            파인애플 주스는 생 파인애플을 갈아서 직접 만드는 것이 더욱 맛있습니다.
                        </div>
                    </div>
                    <div className={style.themeRecommend_img}>
                        <img src="/assets/image/french75.png" alt='french75' className={style.cocktail_img}/>                           
                    <div>
                        피냐 콜라다
                    </div>
                    <div>
                        (Piña Colada)
                    </div>
                    </div>
                </div>
                <div className={style.themeRecommend} data-aos="fade-right" data-aos-once="false">
                    <div className={style.themeRecommend_img}>
                        <img src="/assets/image/paloma.png" alt='paloma' className={style.cocktail_img}/>                           
                    <div>
                        마가리타
                    </div>
                    <div>
                        (Margartia)
                    </div>
                    </div>
                    <div className={style.themeRecommend_left}>
                        <div>
                            마지막으로 추천할 칵테일은
                            <span className={style.themeRecommend_name}> "마가리타"</span>
                            입니다.
                            <br/>
                            마가리타는 대표적인 멕시코 칵테일로, 탱글한 맛과 상큼한 라임의 조화가 인상적입니다. 테킬라와 산뜻한 라임 주스, 오렌지 리큐르를 섞어 만듭니다. 소금으로 가장자리를 장식하고 라임 슬라이스를 올려서 서빙하면 시원하게 즐길 수 있습니다. 여름 휴가를 기다리며 마시기 좋은 칵테일이니 꼭 한번 시도해보시길 추천합니다!
                            <br/><br/><br/><br/><br/><br/><br/>
                            여름에 적합한 시원하고 맛있는 칵테일을 즐겨보세요. 뜨거운 여름 날씨를 식혀주는 상큼한 칵테일은 여름 휴가나 파티에서도 인기가 많을 것입니다.
                        </div>
                    </div>
                </div>
                <Lottie loop play animationData={lJson} style={bottom_lottie_style} />
            </div>
            <img src="/assets/icons/page_up.png" className={style.page_up_btn} onClick={handleScroll}/>
        </>
    )
}

export default Summer;