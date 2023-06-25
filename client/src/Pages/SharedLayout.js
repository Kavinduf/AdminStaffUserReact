import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
