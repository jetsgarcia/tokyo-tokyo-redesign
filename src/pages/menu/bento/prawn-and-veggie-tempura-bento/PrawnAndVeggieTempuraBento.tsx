import { useState } from "react";
import MainDish from "@/assets/menu/prawn-and-veggie-tempura-bento.png";
import Sides from "./components/Sides";
import Drinks from "./components/Drinks";

export type DrinkSize = "" | "Small" | "Medium" | "Sumo" | "Super Sumo";

export default function PrawnAndVeggieTempuraBento() {
  const [chosenSideDish, setChosenSideDish] = useState("");
  const [chosenDrink, setChosenDrink] = useState("");
  const [drinkSize, setDrinkSize] = useState<DrinkSize>("");

  return (
    <div className="p-4 pb-16 md:m-auto md:max-w-[70rem] md:px-8">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="space-y-4 md:flex md:w-full md:gap-8 md:space-y-0">
          <div className="grid place-items-center rounded-lg border border-gray-300 bg-[url(../src/assets/tokyo-tokyo-bg.jpg)] md:w-1/2">
            <img
              src={MainDish}
              alt="Prawn and Veggie Tempura Bento"
              width={500}
            />
          </div>
          <div className="flex flex-col justify-between md:w-1/2 md:gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-primary text-2xl font-bold">
                  &#8369;250
                </div>
              </div>
              <div className="grid gap-1">
                <h2 className="text-2xl font-medium md:font-semibold">
                  Prawn and Veggie Tempura Bento
                </h2>
                <p className="w-full">
                  A delightful combo of crispy prawn and vegetable tempura,
                  served with rice and dipping sauce.
                </p>
              </div>
            </div>
            <button
              className="bg-primary fixed right-4 bottom-24 left-4 cursor-pointer rounded-lg py-3 text-center font-medium text-white md:static md:w-full"
              onClick={() =>
                alert(
                  "Side dish:" +
                    chosenSideDish +
                    "\nDrink:" +
                    chosenDrink +
                    "\nDrink size:" +
                    drinkSize,
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <Sides
            chosenSideDish={chosenSideDish}
            setChosenSideDish={setChosenSideDish}
          />
          <Drinks
            chosenDrink={chosenDrink}
            setChosenDrink={setChosenDrink}
            drinkSize={drinkSize}
            setDrinkSize={setDrinkSize}
          />
        </div>
      </div>
    </div>
  );
}
