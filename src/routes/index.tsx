import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CarDetailPage from "../pages/CarDetailPage";
import AdvertiserPage from "../pages/AdvertiserPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<CarDetailPage />} />,
      <Route path="/profile/seller" element={<AdvertiserPage />} />
    </Routes>
  );
};

export default RoutesMain;
