import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    const location=useLocation();
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className={`min-h-screen ${location.pathname==='/'?"mt-0":"mt-16"}`}>
        <Outlet className="min-h-screen" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
