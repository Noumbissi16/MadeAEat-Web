import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Landing() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Landing;
