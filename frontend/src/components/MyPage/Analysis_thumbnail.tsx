import Link from 'next/link';
import Image from 'next/image';
import style from './Analysis_thumbnail.module.scss';

const Analysis_thumbnail = () => {
  return (
    <div className={style.analysisThumbnail }>
      <p><strong>종효</strong>님의 칵테일 취향 분석 결과</p>
      <div className={style.analysisThumbnail_detail}>
        <Image src="/assets/image/image 1.png" alt="image" width={300} height={300}></Image>
      <div>
        <Link href="">나의 취향 상세보기</Link></div>
      </div>
    </div>
  )
};

export default Analysis_thumbnail;