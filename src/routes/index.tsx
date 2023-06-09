import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CarDetailPage from "../pages/CarDetailPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<CarDetailPage />} />,
    </Routes>
  );
};

export default RoutesMain;
