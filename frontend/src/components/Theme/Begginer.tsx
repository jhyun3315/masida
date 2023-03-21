import style from './Begginer.module.scss';

const Begginer = () => {
    return (
        <>
            <div className={style.themeContainer}>
                <div className={style.themeTitle}>
                <h1>[칵테일 초보자를 위한] 입문용 칵테일 3가지 추천</h1>
                <div className={style.themeHashTag}>#칵테일 초보자  #입문용 칵테일  #초보자 칵테일 추천</div>
                </div>
                <div>
                <div className={style.themeRecommendCocktail}>
                    <div className={style.themeRecommendCocktail_description_right}>
                        진 토닉은 입문자들이 가장 쉽게 시도할 수 있는 칵테일 중 하나입니다. 단순한 레시피와 깔끔한 맛 때문에 많은 사람들이 좋아합니다. 진 30ml과 토닉워터 120ml을 섞은 후 라임 조각을 넣으면 더욱 상큼한 맛을 느낄 수 있습니다.
                    </div>
                    <div>
                        <img src="/assets/image/jinandtonic.png" alt='jinandtonic' />                           
                    </div>
                </div>
                <div className={style.themeRecommendCocktail}>
                    <div>
                        <img src="/assets/image/magarita.png" alt='magarita' />                           
                    </div>
                    <div className={style.themeRecommendCocktail_description_left}>
                        마가리타는 입문자들에게도 친숙한 칵테일 중 하나입니다. 타코나 멕시칸 요리와 같이 즐기기에 딱인 칵테일입니다. 텔레키(Agave) 술, 트리플 섹 라임 주스, 설탕물을 섞은 후 얼음을 넣고 슈레디드 얼음으로 블렌딩하면 완성됩니다.
                    </div>
                </div>
                <div className={style.themeRecommendCocktail}>
                    <div className={style.themeRecommendCocktail_description_right}>
                        모히또는 입문자들이 처음 시도해보기에 좋은 시원한 칵테일입니다. 민트, 설탕, 라임 조각, 라임 주스, 라임 갈퀴와 같은 재료를 넣은 후 라임 조각을 올려 마시면 시원하면서도 청량감이 느껴집니다.
                    </div>
                    <div>
                        <img src="/assets/image/mojito.png" alt='mojito' />                           
                    </div>
                </div>
                </div>
            </div>
        </>
    )

}

export default Begginer