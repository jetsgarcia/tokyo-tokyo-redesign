import Katsu from "@/assets/menu/katsu/big-chicken-katsu-classic.png";
import Bento from "@/assets/menu/bento/prawn-and-veggie-tempura-bento.png";
import Donburi from "@/assets/menu/donburi/beef-gyudon-donburi.png";
import Ramen from "@/assets/menu/ramen/cheesy-beef-ramen.png";
import WagyuCubes from "@/assets/menu/shared-platter/wagyu-cubes.png";
import Burger from "@/assets/menu/snacks/wagyu-cheeseburger.png";
import Sides from "@/assets/menu/sides/tempura-dragon-maki.png";
import Drinks from "@/assets/menu/drinks.png"; // Images is in separate directory because it is a customized image used only in categories page
import Desserts from "@/assets/menu/desserts/revel-bar.png";
import Tray from "@/assets/menu/tray/beef-misono-and-chicken-teriyaki-tray.png";

export const categoryCollection = [
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
