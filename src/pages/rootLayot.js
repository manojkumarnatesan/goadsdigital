import React from "react";
import Navbar from "../navbar/navbar.component";
import { Outlet } from "react-router-dom";
import Footer from "../header/footer";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default RootLayout;
