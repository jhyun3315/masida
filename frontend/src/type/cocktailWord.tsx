// 칵테일 월드 단어 데이터
export type wordType = {
  text: string,
  value: number,
  length: number
}

// 칵테일 월드 데이터
export type cocktail_world = {
  data: wordType[];
}