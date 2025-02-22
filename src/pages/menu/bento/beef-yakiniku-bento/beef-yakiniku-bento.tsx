import MainDishImage from "@/assets/menu/bento/beef-yakiniku-bento.png";
import Dish from "../_components/Dish";

export default function BeefYakinikuBento() {
  return (
    <Dish
      imageSource={MainDishImage}
      dishName="Beef Yakiniku Bento"
      price={250}
      dishDescription="A savory mix of tender grilled beef slices, served with steamed rice, fresh vegetables, and a flavorful dipping sauce."
    />
  );
}
