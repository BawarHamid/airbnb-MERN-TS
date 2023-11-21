import React from "react";
import NavHeader from "../NavHeader";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <div>
        <NavHeader />
        <div className="py-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
