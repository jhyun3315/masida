import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./summer.module.scss";
import Lottie from "react-lottie-player";
import lJson from "../../../public/assets/lotties/enjoy-beach-vacation.json";
import lJson1 from "../../../public/assets/lotties/summer-vacation.json";
import lJson2 from "../../../public/assets/lotties/summer-cocktail.json";

const summer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const lottie_style = {
    height: 400,
    innerWidth : 500,
    outerWidth : 500,
  };

  return (
    <div>
      무더운 여름 밤, 색감부터 시원한 칵테일
      <Lottie loop play animationData={lJson} style={lottie_style} />
      <Lottie loop play animationData={lJson1} style={lottie_style} />
      <Lottie loop play animationData={lJson2} style={lottie_style} />
      <section className="hero">
        <div className="hero-text">
          <h1>Summer Cocktails</h1>
          <p>Experience the refreshing taste of summer</p>
        </div>
      </section>
      <section className="cocktails-section">
        <h2 data-aos="fade-up">Refreshing Summer Cocktails</h2>
        <div className="cocktails-container">
          <div className="cocktail" data-aos="fade-up">
            <img src="./images/mojito.jpg" alt="mojito" />
            <h3>Mojito</h3>
            <p>
              A classic Cuban cocktail made with white rum, lime, mint, and
              sugar.
            </p>
          </div>
          <div className="cocktail" data-aos="fade-up">
            <img src="./images/piña_colada.jpg" alt="pina colada" />
            <h3>Piña Colada</h3>
            <p>
              A tropical cocktail made with rum, pineapple juice, and coconut
              cream.
            </p>
          </div>
          <div className="cocktail" data-aos="fade-up">
            <img src="./images/margarita.jpg" alt="margarita" />
            <h3>Margarita</h3>
            <p>
              A Mexican cocktail made with tequila, lime juice, and triple sec.
            </p>
          </div>
        </div>
      </section>
      <section
        className="waves"
        style={{ background: 'url("/assets/image/wave.jpg") repeat-x' }}
      ></section>
    </div>
  );
};

export default summer;
