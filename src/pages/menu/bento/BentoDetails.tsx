import { useParams } from "react-router";
import { bentoCollection } from "@/assets/menu/bento/bentoCollection";
import Dish from "./_components/Dish";

export default function BentoDetails() {
  const { bentoId } = useParams();

  return (
    <div>
      {bentoCollection.map((bento) => {
        if (bento.id === bentoId) {
          return (
            <Dish
              imageSource={bento.imageSource}
              dishName={bento.name}
              price={bento.price}
              dishDescription={bento.description}
            />
          );
        }
      })}
    </div>
  );
}
