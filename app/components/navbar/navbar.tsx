"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../theme-toggle";
import { pageSections } from "@/app/global/variables";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  const [showing, setShowing] = useState<boolean>(false);

  return (
    <div className="navbar">
      <div className="navbar-spacer">
        <Link href="/" className="logo-button center"></Link>
        <div className="right-side">
          <div className="theme-toggle-container center">
            <ThemeToggle />
          </div>
          <button
            className="menu-button center"
            onClick={() => setShowing((prev) => !prev)}
          >
            <CgMenuGridR className={`menu-icon ${showing ? "active" : ""}`} />
          </button>
        </div>
      </div>
      <div className={`side-nav ${showing ? "showing" : ""}`}>
        <div className="nav-menu">
          {pageSections.map(
            (section: string | { name: string; link: string }, index) => {
              if (typeof section === "object") {
                return (
                  <Link
                    href={`/${section.link}`}
                    key={index}
                    className="nav-button"
                    onClick={() => setShowing(false)}
                  >
                    <h4>{section.name}</h4>
                  </Link>
                );
              } else {
                return (
                  <Link
                    href={`/#${section.toLocaleLowerCase()}`}
                    key={index}
                    className="nav-button"
                    onClick={() => setShowing(false)}
                  >
                    <h4>{section}</h4>
                  </Link>
                );
              }
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
