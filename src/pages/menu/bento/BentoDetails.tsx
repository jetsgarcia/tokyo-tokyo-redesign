import { useParams } from "react-router";
import { bentoCollection } from "@/assets/menu/bento/bentoCollection";
import Dish from "./_components/Dish";
import NotFound from "@/components/NotFound";

export default function BentoDetails() {
  const { bentoId } = useParams();

  const bento = bentoCollection.find((bento) => bento.id === bentoId);

  if (!bento) {
    return <NotFound />;
  }

  return (
    <Dish
      imageSource={bento.imageSource}
      dishName={bento.name}
      price={bento.price}
      dishDescription={bento.description}
    />
  );
}
