import { useRef } from "react";
import { DrinkSize } from "../prawn-and-veggie-tempura-bento/PrawnAndVeggieTempuraBento";
import RedIcedTea from "@/assets/menu/red-iced-tea.png";
import { Info } from "lucide-react";

const drinks = [{ src: RedIcedTea, alt: "Red Iced Tea", name: "Red Iced Tea" }];

interface DrinksProps {
  chosenDrink: string;
  setChosenDrink: (drink: string) => void;
  drinkSize: DrinkSize;
  setDrinkSize: (size: DrinkSize) => void;
}

export default function Drinks({
  chosenDrink,
  setChosenDrink,
  drinkSize,
  setDrinkSize,
}: DrinksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid gap-2">
      <h3 className="text-xl font-semibold">Drinks &#40;Optional&#41;</h3>
      {chosenDrink !== "" && (
        <div className="flex items-center gap-2 text-gray-500">
          <Info size={16} /> <p>Click the selected item again to remove it</p>
        </div>
      )}
      <div className="hide-scrollbar flex gap-4 overflow-scroll">
        {drinks.map((drink) => (
          <div
            key={drink.name}
            className={`w-40 flex-none cursor-pointer rounded-lg border p-2 text-center ${
              chosenDrink === drink.name
                ? "border-primary border-2"
                : "border border-gray-400"
            }`}
            onClick={() => {
              if (chosenDrink !== "" && chosenDrink === drink.name) {
                // Selecting the side dish again will remove it from the selection
                setChosenDrink("");
                setDrinkSize("");
              } else {
                // Select side dish
                setChosenDrink(drink.name);
                setTimeout(() => {
                  // setTimeout is used to wait for the element to be
                  // available before scrolling to the drink size section
                  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }
            }}
          >
            <div className="space-y-2">
              <img src={drink.src} alt={drink.alt} />
              <p>{drink.name}</p>
            </div>
          </div>
        ))}
      </div>
      {chosenDrink !== "" && (
        <div
          ref={sectionRef}
          className="space-y-1 rounded-lg border p-4 md:w-fit"
        >
          <div className="text-lg font-medium">Choose drink size:</div>
          <div className="px-2">
            <div className="space-y-2 md:flex md:items-center md:space-y-0 md:space-x-6">
              {[
                { size: "Small", price: 70 },
                { size: "Medium", price: 90 },
                { size: "Sumo", price: 100 },
                { size: "Super Sumo", price: 115 },
              ].map((drink) => (
                <label key={drink.size} className="flex gap-2">
                  <input
                    type="radio"
                    name="drinkSize"
                    value={drink.size}
                    checked={drinkSize === drink.size}
                    onChange={(e) => setDrinkSize(e.target.value as DrinkSize)}
                    className="accent-blue-500"
                  />
                  {drink.size} - &#8369;{drink.price}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
