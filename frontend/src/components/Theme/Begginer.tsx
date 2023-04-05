import style from './Begginer.module.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Begginer = () => {
    useEffect(() => {
        AOS.init();
        document
        .querySelectorAll("img")
      .forEach((img) => img.addEventListener("load", () => AOS.refresh()));

    }, []);
    return (
        <>
         <div className={style.themeContainer}>
          <div  style={{backgroundColor:"#EFEBE9"}}>
            <div className={style.themeTitle}>
              <div className={style.themeIntro}>MASIA's 추천 칵테일</div>
              <div className={style.themeHashTag}>입문자에게 추천하는 칵테일</div>
          </div>
          <div style={{backgroundColor:"#EFEBE9", marginBottom:"3%"}}>
              <div style={{display:"flex", margin:"5% 20.5%", justifyContent:"space-between"}}>
                <div>
                  <img src="/assets/image/jinandtonic.png" style={{ height: "30vh", width: "30vh", borderRadius: "70%" }}></img>
                  <div style={{lineHeight:"0.1"} }>
                    <img src="/assets/icons/Cocktail_recommend_icon.png" style={{width:"15vh", margin:"11% 17% 0 22.5%"} }></img>
                    <p style={{ margin: "11% 30% 0 30%", fontWeight: "bold", fontSize: "3vh" }}>진 토닉</p>
                  </div>
                </div>
                <div>
                  <img src="/assets/image/magarita2.jpg" style={{ height: "30vh", width: "30vh", borderRadius: "70%" }}></img>
                  <div style={{lineHeight:"0.1"} }>
                    <img src="/assets/icons/Cocktail_recommend_icon.png" style={{width:"15vh", margin:"11% 17% 0 22.5%"} }></img>
                    <p style={{ margin: "11% 30% 0 30%", fontWeight: "bold", fontSize: "3vh" }}>마가리타</p>
                  </div>
                </div>
                <div>
                  <img src="/assets/image/mojito2.jpg" style={{ height: "30vh", width: "30vh", borderRadius: "70%" }}></img>
                  <div style={{lineHeight:"0.1"} }>
                    <img src="/assets/icons/Cocktail_recommend_icon.png" style={{width:"15vh", margin:"11% 17% 0 22.5%"} }></img>
                    <p style={{ margin: "11% 30% 0 30%", fontWeight: "bold", fontSize: "3vh" }}>모히토</p>
                  </div>
                </div>
              </div>
           </div>
          </div>
          <div>
            <div className={style.themeRecommendCocktail} data-aos="fade-left" data-aos-once="false" style={{border:"1px solid #CACACA", margin:"3%", padding:"3.25%"} }>
              <div className={style.themeRecommendCocktail_description_right} >
                <div style={{ lineHeight: "1.125", textAlign: "left", fontSize:"1.45rem"} }>
                  <span className={style.themeRecommendCocktail_name} style={{lineHeight:"1.5", color:"#514C38"} }>
                        진 토닉
                  </span>
                  은 입문자들이 가장 쉽게 시도할 수 있는 칵테일 중 하나입니다. 단순한 레시피와 깔끔한 맛 때문에 많은 사람들이 좋아합니다.
                  <div style={{ marginTop: "5%" }}>
                    <p style={{color:"#538843",fontWeight:"bold", marginBottom:"2%"} }>Recipe</p>
                    <p>1. 하이볼 잔에 얼음을 채운다. </p>
                    <p>2. 얼음 위에 진 50ml, 토닉워터 100ml를 붓는다. </p>
                    <p>3. 부드럽게 저어주고 라임 조각으로 장식한다.</p>
                  </div>
                </div>
              </div>
                <div className={style.themeRecommendCocktail_img}>
                    <img src="/assets/image/jinandtonic.png" alt='jinandtonic' className={style.cocktail_img}/>
                        <div>
                            진 토닉
                        </div>
                        <div>
                            (Gin and Tonic)
                        </div>
                    </div>
            </div>
                    <div className={style.themeRecommendCocktail} data-aos="fade-right" data-aos-once="false" style={{border:"1px solid #CACACA", margin:"3%", padding:"3.25%"} }>
              <div className={style.themeRecommendCocktail_img}>
                    <img src="/assets/image/magarita2.jpg" alt='margarita' className={style.cocktail_img}/>
                        <div>
                            마가리타
                        </div>
                        <div>
                            (Margarita)
                        </div>
                    </div>
              <div className={style.themeRecommendCocktail_description_left} >
                <div style={{ lineHeight: "1.125", textAlign: "left", fontSize:"1.45rem"} }>
                  <span className={style.themeRecommendCocktail_name} style={{lineHeight:"1.5", color:"#514C38"} }>
                        마가리타
                  </span>
                  는 입문자들에게도 친숙한 칵테일 중 하나입니다. 타코나 멕시칸 요리와 같이 즐기기에 딱인 칵테일입니다. 
                  <div style={{ marginTop: "5%" }}>
                    <p style={{color:"#538843",fontWeight:"bold", marginBottom:"2%"} }>Recipe</p>
                    <p>1. 칵테일 글라스에 레몬즙을 바르고 소금을 묻힙니다. </p>
                    <p>2. 셰이커에 재료와 얼음을 넣고 흔들어 줍니다. </p>
                    <p>3. 글라스에 셰이커에 있는 얼음을 거르며 내용물만 따라줍니다.</p>
                  </div>
                </div>
              </div>
            </div>
             <div className={style.themeRecommendCocktail} data-aos="fade-left" data-aos-once="false" style={{border:"1px solid #CACACA", margin:"3%", padding:"3.25%"} }>
              <div className={style.themeRecommendCocktail_description_right} >
                <div style={{ lineHeight: "1.125", textAlign: "left", fontSize:"1.45rem"} }>
                  <span className={style.themeRecommendCocktail_name} style={{lineHeight:"1.5", color:"#514C38"} }>
                        모히또
                  </span>
                   는 입문자들이 처음 시도해보기에 좋은 시원한 칵테일입니다. 민트, 설탕, 라임 조각, 라임 주스, 라임 갈퀴와 같은 재료를 넣은 후 라임 조각을 올려 마시면 시원하면서도 청량감이 느껴집니다.
                  <div style={{ marginTop: "5%" }}>
                    <p style={{color:"#538843",fontWeight:"bold", marginBottom:"2%"} }>Recipe</p>
                    <p>1. 잔에 시럽 10ml와 라임즙 30ml를 넣고 섞는다. </p>
                    <p>2. 잔에 럼 45ml를 넣고 살짝 섞어 준 뒤 얼음을 넣는다. </p>
                    <p>3. 소다수나 토닉워터로 잔을 채운다.</p>
                  </div>
                </div>
              </div>
                <div className={style.themeRecommendCocktail_img}>
                <img src="/assets/image/mojito.png" alt='mojito' className={style.cocktail_img}  />
                        <div>
                            모히또
                        </div>
                        <div>
                            (Mojito)
                        </div>
                    </div>
                  </div>
              </div>
          </div>  
       </>
    )
}

export default Begginer