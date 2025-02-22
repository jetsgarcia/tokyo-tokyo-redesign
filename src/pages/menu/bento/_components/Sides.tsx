import CaliforniaMaki from "@/assets/menu/california-maki.png";
import MisoSoup from "@/assets/menu/miso-soup.png";
import Rice from "@/assets/menu/rice.png";
import Gyoza from "@/assets/menu/gyoza.png";
import TempuraDragonMaki from "@/assets/menu/tempura-dragon-maki.png";

import { Info } from "lucide-react";

const sides = [
  { src: MisoSoup, alt: "Miso Soup", name: "Miso Soup", price: 50 },
  { src: Gyoza, alt: "Gyoza", name: "Gyoza", price: 85 },
  { src: Rice, alt: "Rice", name: "Rice", price: 45 },
  {
    src: CaliforniaMaki,
    alt: "California Maki",
    name: "California Maki",
    price: 105,
  },
  {
    src: TempuraDragonMaki,
    alt: "Tempura Dragon Maki",
    name: "Tempura Dragon Maki",
    price: 120,
  },
];

interface SidesProps {
  chosenSideDish: string;
  setChosenSideDish: (side: string) => void;
}

export default function Sides({
  chosenSideDish,
  setChosenSideDish,
}: SidesProps) {
  return (
    <div className="grid gap-2">
      <h3 className="text-xl font-semibold">Sides &#40;Optional&#41;</h3>
      {chosenSideDish !== "" && (
        <div className="flex items-center gap-2 text-gray-500">
          <Info size={16} /> <p>Click the selected item again to remove it</p>
        </div>
      )}
      <div className="hide-scrollbar flex gap-4 overflow-scroll scroll-smooth">
        {sides.map((side) => (
          <div
            key={side.name}
            className={`w-40 flex-none cursor-pointer rounded-lg p-2 text-center ${
              chosenSideDish === side.name
                ? "border-primary border-2"
                : "border border-gray-400"
            }`}
            onClick={() => {
              if (chosenSideDish !== "" && chosenSideDish === side.name) {
                // Selecting the side dish again will remove it from the selection
                setChosenSideDish("");
              } else {
                // Select side dish
                setChosenSideDish(side.name);
              }
            }}
          >
            <div className="flex flex-col gap-2">
              <img src={side.src} alt={side.alt} />
              <div>
                <p>&#8369;{side.price}</p>
                <p>{side.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
