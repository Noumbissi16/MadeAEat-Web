import React from "react";
import Navbar from "../routes/Navbar";
import { Outlet } from "react-router-dom";
import { withAuthRequired } from "../hoc/withAuthRequired";

function Landing() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Landing;

export const ProtectedLanding = withAuthRequired(Landing);
