import React from "react";
import { NavBar } from "./index";
import { Outlet } from "react-router-dom";

export default function PLayout() {
  return (
    <div className="PLayout">
      <NavBar />
      <Outlet />
    </div>
  );
}
