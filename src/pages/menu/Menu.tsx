import { Link } from "react-router";
import Katsu from "@/assets/menu/big-chicken-katsu-classic-solo.png";
import Bento from "@/assets/menu/prawn-and-veggie-tempura-bento.png";
import Donburi from "@/assets/menu/beef-gyudon-donburi.png";
import Ramen from "@/assets/menu/cheesy-beef-ramen.png";
import WagyuCubes from "@/assets/menu/wagyu-cubes.png";
import Burger from "@/assets/menu/wagyu-cheeseburger.png";
import Sides from "@/assets/menu/tempura-dragon-maki.png";
import Drinks from "@/assets/drinks.png"; // Images is in separate directory because it is a customized image used only in categories page
import Desserts from "@/assets/menu/revel-bar.png";
import Tray from "@/assets/menu/beef-misono-and-chicken-teriyaki-tray.png";

export default function Menu() {
  const categories = [
    { to: "/menu/katsu", label: "Katsu", src: Katsu, alt: "Katsu" },
    { to: "/menu/bento", label: "Bento", src: Bento, alt: "Bento" },
    { to: "/menu/donburi", label: "Donburi", src: Donburi, alt: "Donburi" },
    { to: "/menu/ramen", label: "Ramen", src: Ramen, alt: "Ramen" },
    {
      to: "/menu/shared-platter",
      label: "Shared Platter",
      src: WagyuCubes,
      alt: "Wagyu Cubes",
    },
    { to: "/menu/snacks", label: "Snacks", src: Burger, alt: "Burger" },
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
