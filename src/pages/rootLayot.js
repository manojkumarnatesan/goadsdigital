import React from "react";
import Navbar from "../navbar/navbar.component";
import { Outlet } from "react-router-dom";



function RootLayout() {
  return (
    <div>
   
      <Navbar />
     
    </div>
  );
}

export default RootLayout;
