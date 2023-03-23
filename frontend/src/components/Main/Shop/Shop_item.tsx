import style from "./Shop_item.module.scss";
import { itemProps } from "../Main_manual";
import Image from "next/image";
const Shop_item: React.FC<itemProps> = (item: itemProps) => {
  return (
    <>
      <div className={style.item}>
        <div className={style.item_img_div}>
          <img className={style.item_img} src={item.product_img} alt="" />
          {/* <Image src={item.product_img} alt="image" width={200} height={200} /> */}
        </div>
        <div className={style.item_name}>{item.product_name}</div>
        <div className={style.item_price}>{item.product_price}원</div>
        <div className={style.item_link}>
          <a href={item.product_url}>구매하러가기</a>
        </div>
      </div>
    </>
  );
};

export default Shop_item;
