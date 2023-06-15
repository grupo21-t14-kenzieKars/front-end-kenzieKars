import { Routes, Route } from "react-router-dom";
import Login from "../pages/loginPage";
import Register from "../pages/registerPage";
import PosterCreateModal from "../components/posterCreateModal";
import Home from "../pages/Home";
import CarDetailPage from "../pages/CarDetailPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<CarDetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/teste" element={<PosterCreateModal />} />
    </Routes>
  );
};

export default RoutesMain;
