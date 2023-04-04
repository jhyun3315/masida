import style from "./World_cup_league.module.scss";
import { cocktail_worldcup_data } from "../../type/cocktailTypes";
import React, { useState, useEffect } from "react";
import { World_cup_league_card } from "../UI/Card_ui";
// 최종 결과를 보여줄 컴포넌트
import World_cup_league_result from "./World_cup_league_result";

// https://velog.io/@pyo-sh/React-Project-%EC%9D%B4%EC%83%81%ED%98%95-%EC%9B%94%EB%93%9C%EC%BB%B5

const World_cup_league = (props: cocktail_worldcup_data[]) => {

  const items:any = [];

  // const items:any = [];
  for (let i = 0; i < 16; i++){
    items.push(props[i]);
  }


  const [isFinal, setIsFinal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCocktails] = useState<cocktail_worldcup_data[]>([]);
  const [displays, setDisplays] = useState<cocktail_worldcup_data[]>([]);
  const [winners, setWinners] = useState<cocktail_worldcup_data[]>([]);
  
  // 횟수
  const [times, setTimes] = useState<number>(1);
  // 강
  const [rounds, setRounds] = useState<number>(items.length);
  
  const [finalRound, setFinalRound] = useState<boolean>(false);
  
  
  useEffect(() => {
    setIsLoading(true);
    items.sort(() => Math.random() - 0.5);
    setDisplays([items[0], items[1]]);
    setCocktails(items);
  }, []);
  
  
  

  const clickHandler = (cocktail: cocktail_worldcup_data) => (e: React.MouseEvent) => {
    if (rounds > 1) {
      if (times < rounds) setTimes(times + 1);
      if (times === rounds / 2 && rounds >= 2) {
        setRounds(rounds / 2);
        setTimes(1);
      }
      if (cocktails.length <= 2) {
        if (rounds === 2) {
          // 우승자가 나온 상황
          setDisplays([cocktail]);
          setIsFinal(true);
        } else if(rounds === 4){ //결승전 부분입니다.
          setFinalRound(true); //결승전이므로 결승전으로 표시해주자.
          let updatedCocktail: cocktail_worldcup_data[] = [...winners, cocktail];
          setCocktails(updatedCocktail);
          setDisplays([updatedCocktail[0], updatedCocktail[1]]);
          setWinners([]);
        } else {
          let updatedCocktail: cocktail_worldcup_data[] = [...winners, cocktail];
          setCocktails(updatedCocktail);
          setDisplays([updatedCocktail[0], updatedCocktail[1]]);
          setWinners([]);
        }
      }  else {
        setWinners([...winners, cocktail]);
        setDisplays([cocktails[2], cocktails[3]]);
        setCocktails(cocktails.slice(2));
      }
    }
  };

  // 상단 문구 : 리그 진행 중
  const onGameTitle = (
    <>
      <div className={style.cocktail_worldcup_title}>칵테일 월드컵</div>
      <div className={style.cocktail_worldcup_title_sub}>
        좋아하는 칵테일을 골라주세요.
      </div>
      <div className={style.cocktail_worldcup_current_order}>
        {finalRound ? "결승전" : `${isFinal ? "" : `${rounds}강 ${times} / ${rounds / 2}`}`}
      </div>
    </>
  );

  // 상단 문구 : 결과 나왔을 때
  const finalTitle = (
    <div className={style.cocktail_worldcup_title}>
      칵테일 월드컵 우승자입니다.
    </div>
  );

  if (isLoading) {
    return (
      <>
        <div className={style.cocktail_worldcup_textarea}>
          {isFinal ? finalTitle : onGameTitle}
        </div>
        <div className={style.random_cocktail_selector}>
          {isFinal ? (
            <World_cup_league_result {...cocktails[0]} />
          ) : (
            displays.map((key) => (
              <div
                onClick={clickHandler(key)}
                className={style.random_cocktail_card}
              >
                <World_cup_league_card {...key} />
              </div>
            ))
          )}
        </div>
      </>
    );
  }
  return(
    <div>error</div>
  )
};

export default World_cup_league;
