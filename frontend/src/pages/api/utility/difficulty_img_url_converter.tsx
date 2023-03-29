// 문자열로 들어온 난이도를 입력하면 해당 아이콘의 이미지 주소를 반환
// 다음과 같이 사용하면 된다.
// let difficulty = difficulty_img_url_converter(props.cocktail_difficulty);
// <img src={difficulty} alt="" />;
export const difficulty_img_url_converter = (difficulty: string) => {
  let difficulty_img_url = "";
  switch (difficulty) {
    case "하":
      difficulty_img_url = "/assets/icons/difficulty_LOW.png";
      break;
    case "중":
      difficulty_img_url = "/assets/icons/difficulty_MID.png";
      break;
    case "상":
      difficulty_img_url = "/assets/icons/difficulty_HIGH.png";
      break;
  }

  return difficulty_img_url;
};

export const difficulty_img_url_converter_mini = (difficulty: string) => {
  let difficulty_img_url = "";
  switch (difficulty) {
    case "하":
      difficulty_img_url = "/assets/icons/difficulty_LOW_MINI.png";
      break;
    case "중":
      difficulty_img_url = "/assets/icons/difficulty_MID_MINI.png";
      break;
    case "상":
      difficulty_img_url = "/assets/icons/difficulty_HIGH_MINI.png";
      break;
  }

  return difficulty_img_url;
};
