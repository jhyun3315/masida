import Link from 'next/link';
import style from './Analysis_thumbnail.module.scss'; 
import RaidarBar from '../UI/RaidarBar';
import { cocktail_summary } from '../../type/cocktailTypes';

const Analysis_thumbnail = (props: cocktail_summary[]) => {
  return (
    <div className={style.analysisThumbnail }>
      <p><strong>종효</strong>님의 칵테일 취향 분석 결과</p>
      <div className={style.analysisThumbnail_detail}>
        <RaidarBar {...props} />
      <div>
          <Link href="/user-analysis">나의 취향 상세보기</Link></div>
      </div>
    </div>
  )
};

export default Analysis_thumbnail;