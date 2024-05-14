import React from "react";
import Navbar from "../navbar/navbar.component";
import { Outlet } from "react-router-dom";
import Footer from "../header/footer";

function RouterLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RouterLayout;
