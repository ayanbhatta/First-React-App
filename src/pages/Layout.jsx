import React from "react";
import NavContainer from "../components/navComponents/NavContainer";
import Footer from "../components/footerComponents/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className="h-[80px]">
        <NavContainer />
      </div>
      <div className="grow min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
