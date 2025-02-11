import { Routes, Route } from "react-router";
import Home from "@/pages/home/Home";
import Navbar from "@/components/Navbar";
import Menu from "@/pages/menu/Menu";
import Bento from "@/pages/menu/subroutes/bento/BentoSection";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-[16.95vw] pb-24 md:mt-[85px] md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/bento" element={<Bento />} />
        </Routes>
      </div>
    </div>
  );
}
