import { FC } from "react";
import { Shoe } from "../../types";

interface Props {
  item: Shoe;
}
const Price: FC<Props> = ({ item }) => {
  let price = item.price;

  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }
  return (
    <div className={item.discount ? "text-my-yellow" : "text-white"}></div>
  );
};
export default Price;
