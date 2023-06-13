import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import CarDetailPage from "../pages/carDetailPage";
import Login from "../pages/loginPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<CarDetailPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesMain;
