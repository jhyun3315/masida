import styles from  "./World_cup_league.module.scss"
import { cocktailType } from "@/type/cocktailTypes";
import React, { useState, useEffect } from "react";
import { World_cup_league_card } from "../UI/card2";

// https://velog.io/@pyo-sh/React-Project-%EC%9D%B4%EC%83%81%ED%98%95-%EC%9B%94%EB%93%9C%EC%BB%B5

const World_cup_league = () => {
  const items: cocktailType[] = [
    {
      cocktail_id: 1,
      cocktail_name_ko: "The Missionary",
      cocktail_name_en: "The Missionary",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/the-missionary.jpg?itok=MT7XW_-H",
      cocktail_likes: 22,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 2,
      cocktail_name_ko: "Missionary's Downfall",
      cocktail_name_en: "Missionary's Downfall",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/_7505176-edit.jpg?itok=E-GYq9iO",
      cocktail_likes: 32,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 3,
      cocktail_name_ko: "Mizz Mazza",
      cocktail_name_en: "Mizz Mazza",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mizz-mazza.jpg?itok=gu14Gs50",
      cocktail_likes: 24,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 4,
      cocktail_name_ko: "Mockingbird, Wish Me Luck",
      cocktail_name_en: "Mockingbird, Wish Me Luck",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mockingbirdluck6487.jpg?itok=F5iUo5pJ",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 5,
      cocktail_name_ko: "Moko Jumbie",
      cocktail_name_en: "Moko Jumbie",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mokojombie6173.jpg?itok=TLuLrcw8",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 6,
      cocktail_name_ko: "El Momento Perfecto",
      cocktail_name_en: "El Momento Perfecto",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/el-momento-perfecto.jpg?itok=99VfGOy0",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 7,
      cocktail_name_ko: "A Monkey In Winter",
      cocktail_name_en: "A Monkey In Winter",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/a-monkey-in-winter.jpg?itok=_FHsvkGa",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 8,
      cocktail_name_ko: "Montauk (NoMad)",
      cocktail_name_en: "Montauk (NoMad)",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/79C354F6-A692-4DA0-A412-",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 9,
      cocktail_name_ko: "The Monte Press",
      cocktail_name_en: "The Monte Press",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/img_1896.jpg?itok=uQJPxHts",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 10,
      cocktail_name_ko: "Montreal Cocktail",
      cocktail_name_en: "Montreal Cocktail",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/img_3795_1.png?itok=pKGlGhTS",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 11,
      cocktail_name_ko: "Moral Turpitude",
      cocktail_name_en: "Moral Turpitude",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/moralturpitude.jpg?itok=UgYU5BoR",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 12,
      cocktail_name_ko: "More Amaro",
      cocktail_name_en: "More Amaro",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/More%20AmaroB.JPG?itok=68B4BiTX",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 13,
      cocktail_name_ko: "Morning Darling",
      cocktail_name_en: "Morning Darling",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/20191211_170104.jpg?itok=QBcNlKaC",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 14,
      cocktail_name_ko: "Mr. Manager",
      cocktail_name_en: "Mr. Manager",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/zoos2qa3v5f21.jpg?itok=Pnv3oVJu",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 15,
      cocktail_name_ko: "Mr. Swizzle",
      cocktail_name_en: "Mr. Swizzle",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mr-swizzle-cocktail_0.jpg?itok=Li232jH1",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
    {
      cocktail_id: 16,
      cocktail_name_ko: "The Music Orange",
      cocktail_name_en: "The Music Orange",
      cocktail_img: "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/the-music-orange.jpg?itok=pZv_lMII",
      cocktail_likes: 292,
      cocktail_rating: 4.6,
      cocktail_difficulty: "중",
    },
  ];

  const [cocktails, setCocktails] = useState<cocktailType[]>([]);
  const [displays, setDisplays] = useState<cocktailType[]>([]);
  const [winners, setWinners] = useState<cocktailType[]>([]);
  const [rounds, setRounds] = useState<number>(1);

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setCocktails(items);
  }, []);

  useEffect(() => {
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (cocktail: cocktailType) => (e: React.MouseEvent) => {
    if(rounds < 15)
      setRounds(rounds+1);

    if (cocktails.length <= 2) {
      if (winners.length === 0) {
        // 우승자가 나온 상황
        // 화면 다시 렌더링하자
        setDisplays([cocktail]);
      } else {
        let updatedCocktail: cocktailType[] = [...winners, cocktail];
        setCocktails(updatedCocktail);
        setDisplays([updatedCocktail[0], updatedCocktail[1]]);
        setWinners([]);
      }
    } else if (cocktails.length > 2) {
      setWinners([...winners, cocktail]);
      setDisplays([cocktails[2], cocktails[3]]);
      setCocktails(cocktails.slice(2));
    }
  };
  return (
    <>
      {/* {displays.map((key) => (
        <div onClick={clickHandler(key)}>{key.cocktail_id}</div>
      ))} */}
      <div>{rounds}</div>
      <div className= {styles.random_cocktail_selector}>
      {displays.map((key) => (
        <div onClick={clickHandler(key)} className = {styles.random_cocktail_card}>
          <World_cup_league_card {...key} />
        </div>
      ))}
      </div>
    </>
  );
};

export default World_cup_league;
