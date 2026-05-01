import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";

import Home from "../pages/Home.jsx";
import Tours from "../pages/Tours.jsx";
import TourDetail from "../pages/TourDetail.jsx";
import Subscription from "../pages/Subscription.jsx";
import About from "../pages/About.jsx";
import Booking from "../pages/Booking.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/seoul-culture-walk" element={<TourDetail />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}