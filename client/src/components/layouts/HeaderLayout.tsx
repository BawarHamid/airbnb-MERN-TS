import React from "react";
import NavHeader from "../headers/NavHeader";
import { Outlet } from "react-router-dom";

const HeaderLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavHeader />
        <div className="py-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HeaderLayout;
