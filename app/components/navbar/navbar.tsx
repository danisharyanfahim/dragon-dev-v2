import Link from "next/link";
import React from "react";
import ThemeToggle from "../theme-toggle";
import NavMenu from "./navmenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="logo-button center"></Link>
      <div className="right-side">
        <div className="theme-toggle-container center">
          <ThemeToggle />
        </div>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
