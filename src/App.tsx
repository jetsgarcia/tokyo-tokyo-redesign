import { Routes, Route } from "react-router";
import Home from "@/pages/home/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
