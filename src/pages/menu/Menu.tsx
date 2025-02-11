import { Link } from "react-router";
import Katsu from "./subroutes/katsu/big-chicken-katsu-classic-solo/images/big-chicken-katsu-classic-solo.png";
import Bento from "./subroutes/bento/prawn-and-veggie-tempura-bento/images/prawn-and-veggie-tempura-bento.png";
import Donburi from "./subroutes/donburi/beef-gyudon-donburi/images/beef-gyudon-donburi.png";
import Ramen from "./subroutes/ramen/cheesy-beef-ramen/images/cheesy-beef-ramen.png";
import Onigiri from "./subroutes/onigiri/kani-wasabi-onigiri/images/kani-wasabi-onigiri.png";
import Burger from "./subroutes/burger/wagyu-cheeseburger/images/wagyu-cheeseburger.png";
import Sides from "./subroutes/sides/tempura-dragon-maki/images/tempura-dragon-maki.png";
import Drinks from "./images/drinks.png"; // Images is in separate directory because it is a customized image
import Desserts from "./subroutes/desserts/revel-bar/images/revel-bar.png";
import Tray from "./subroutes/tray/beef-misono-and-chicken-teriyaki-tray/images/beef-misono-and-chicken-teriyaki-tray.png";

export default function Menu() {
  const categories = [
    { to: "/menu/katsu", label: "Katsu", src: Katsu, alt: "Katsu" },
    { to: "/menu/bento", label: "Bento", src: Bento, alt: "Bento" },
    { to: "/menu/donburi", label: "Donburi", src: Donburi, alt: "Donburi" },
    { to: "/menu/ramen", label: "Ramen", src: Ramen, alt: "Ramen" },
    { to: "/menu/onigiri", label: "Onigiri", src: Onigiri, alt: "Onigiri" },
    { to: "/menu/burger", label: "Burger", src: Burger, alt: "Burger" },
    { to: "/menu/sides", label: "Sides", src: Sides, alt: "Sides" },
    { to: "/menu/drinks", label: "Drinks", src: Drinks, alt: "Drinks" },
    { to: "/menu/desserts", label: "Desserts", src: Desserts, alt: "Desserts" },
    { to: "/menu/tray", label: "Tray", src: Tray, alt: "Tray" },
  ];

  return (
    <div className="p-4 md:p-8">
      <h2 className="pb-4 text-center text-2xl font-medium md:pb-8">
        Choose a category
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.to}
            to={category.to}
            className="block transform rounded-lg border border-gray-400 transition-transform hover:scale-105"
          >
            <div className="flex h-32 items-center justify-center overflow-hidden md:h-44">
              <img
                src={category.src}
                alt={category.alt}
                className="w-auto object-center"
              />
            </div>
            <div className="p-4 text-center text-gray-600 md:text-lg">
              {category.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
