// 마이페이지 별점 분포 (베이스)
export type cocktailBaseRating = {
  rating_score: number,
  base_jin: number,
  base_rum: number,
  base_vodka: number,
  base_whiskey: number,
  base_rest: number,
}

// 마이페이지 별점 분포 결과(베이스)
export type cocktailBase_props = {
  rating_average: number,
	rating_count: string,
	rating_max: number,
	rating_max_base: string
  data: cocktailBaseRating[];
}