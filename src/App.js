import React from "react";
import { Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/LoginAndNavbar/Navbar";
import MainRoutes from "./Pages/MainRoutes";
const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
