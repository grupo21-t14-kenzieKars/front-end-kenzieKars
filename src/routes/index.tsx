import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import CarDetailPage from "../pages/carDetailPage";
import Login from "../pages/loginPage";
import Register from "../pages/registerPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<CarDetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RoutesMain;
