// 마이페이지 상세 -> 칵테일 베이스 선호도
export type cocktailBase = {
  base_name: string,
  base_count: number,
  base_ratio: number
}

// 마이페이지 상세 -> 칵테일 베이스 선호도
// 원형 그래프(Pie Chart)에 전달할 값
export type dataType = {
  id: string,
  value: number
}

