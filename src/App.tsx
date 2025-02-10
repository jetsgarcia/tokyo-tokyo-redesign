import { Routes, Route } from "react-router";
import Home from "@/pages/home/Home";
import Navbar from "@/components/Navbar";
import Menu from "@/pages/menu/Menu";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-[16.95vw] mb-24 h-screen md:mt-[85px] md:mb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}
