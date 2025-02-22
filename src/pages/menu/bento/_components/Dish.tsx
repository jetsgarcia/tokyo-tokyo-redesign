import { useState } from "react";
import Drinks from "./Drinks";
import Sides from "./Sides";

export type DrinkSize = "" | "Small" | "Medium" | "Sumo" | "Super Sumo";

interface DishProps {
  imageSource: string;
  dishName: string;
  price: number;
  dishDescription: string;
}

export default function Dish({
  imageSource,
  dishName,
  price,
  dishDescription,
}: DishProps) {
  const [chosenSideDish, setChosenSideDish] = useState("");
  const [chosenDrink, setChosenDrink] = useState("");
  const [drinkSize, setDrinkSize] = useState<DrinkSize>("");

  return (
    <div className="px-4 pt-8 pb-16 md:m-auto md:max-w-[70rem] md:px-8">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="space-y-4 md:flex md:w-full md:gap-8 md:space-y-0">
          <div className="grid place-items-center rounded-lg border border-gray-300 bg-[url(../src/assets/tokyo-tokyo-bg.jpg)] md:w-1/2">
            <img src={imageSource} alt={dishName} width={500} />
          </div>
          <div className="flex flex-col justify-between md:w-1/2 md:gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-primary text-2xl font-bold">
                  &#8369;{price}
                </div>
              </div>
              <div className="grid gap-1">
                <h2 className="text-2xl font-medium md:font-semibold">
                  {dishName}
                </h2>
                <p className="w-full">{dishDescription}</p>
              </div>
            </div>
            <button
              className="bg-primary fixed right-4 bottom-24 left-4 cursor-pointer rounded-lg py-3 text-center font-medium text-white md:static md:w-full"
              onClick={() =>
                alert(
                  "Main dish:" +
                    dishName +
                    "\nSide dish:" +
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
