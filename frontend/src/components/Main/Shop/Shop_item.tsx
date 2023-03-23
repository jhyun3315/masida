import style from "./Shop_item.module.scss";
import { itemProps } from "../Main_manual";

const Shop_item: React.FC<itemProps> = (info: itemProps) => {
  return (
    <>
      <div>{info.product_name}</div>
      <div>{info.product_price}원</div>
      <div>
        <a href={info.product_url}>구매하러가기</a>
      </div>
    </>
  );
};

export default Shop_item;
