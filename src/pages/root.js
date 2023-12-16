import React from "react";
import Navbar from "../navbar/navbar.component";
import { Outlet } from "react-router-dom";

function RouterLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RouterLayout;
