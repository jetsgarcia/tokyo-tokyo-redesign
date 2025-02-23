import { Routes, Route } from "react-router";
import Home from "@/pages/home/Home";
import Navbar from "@/components/Navbar";
import Menu from "@/pages/menu/Menu";
import BentoList from "@/pages/menu/bento/BentoList";
import BentoDetails from "@/pages/menu/bento/BentoDetails";
import NotFound from "@/components/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-[69.9px] pb-24 md:mt-[69px] md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/bento" element={<BentoList />} />
          <Route path="/menu/bento/:bentoId" element={<BentoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
