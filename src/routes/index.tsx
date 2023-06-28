import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CarDetailPage from "../pages/CarDetailPage";
import AdvertiserPage from "../pages/AdvertiserPage";
import Login from "../pages/loginPage";
import Register from "../pages/registerPage";
import ForgotPasswordPage from './../pages/ForgotPasswordPage/index';
import ResetPasswordPage from "../pages/resetPasswordPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car/:carId" element={<CarDetailPage />} />
      <Route path="/profile/seller" element={<AdvertiserPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={< ForgotPasswordPage />} />
      <Route path="/resetPassword/:token" element={< ResetPasswordPage />} />

    </Routes>
  );
};

export default RoutesMain;
