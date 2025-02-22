import MainDishImage from "@/assets/menu/bento/prawn-and-veggie-tempura-bento.png";
import Dish from "../_components/Dish";

export default function PrawnAndVeggieTempuraBento() {
  return (
    <Dish
      imageSource={MainDishImage}
      dishName="Prawn and Veggie Tempura Bento"
      price={250}
      dishDescription="A delightful combo of crispy prawn and vegetable tempura, served with rice and dipping sauce."
    />
  );
}
