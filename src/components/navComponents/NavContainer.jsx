import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const NavContainer = () => {
  return (
    <div className="flex h-[80px] justify-between items-center px-16 bg-white shadow-lg border-b">
      <Logo />
      <NavBar />
    </div>
  );
};

export default NavContainer;
