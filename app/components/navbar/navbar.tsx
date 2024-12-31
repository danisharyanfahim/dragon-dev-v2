"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";
import { pageSections } from "@/app/global/variables";
import { CgMenuGridR } from "react-icons/cg";
import { IoHome, IoNewspaperSharp } from "react-icons/io5";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { GiPencilRuler } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { useTheme } from "next-themes";

const navMenuIcons = [
  <IoHome className="icon" />,
  <BsFillInfoSquareFill className="icon" />,
  <GrPersonalComputer className="icon" />,
  <GiPencilRuler className="icon" />,
  <MdOutlineWork className="icon" />,
  <IoNewspaperSharp className="icon" />,
  <HiPhone className="icon" />,
];

const Navbar = () => {
  const [showing, setShowing] = useState<boolean>(false);
  const { theme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);
  return (
    <div className="navbar">
      <div className="navbar-spacer">
        <div className="logo-button-container center">
          <Link href="/" className="logo-button">
            <h1 className="logo-text">
              Dragon<span className="colorful">Dev</span>
            </h1>
            <img
              src={
                theme === "dark" || !mounted
                  ? "/static/icons/dragon-dev-night.svg"
                  : "/static/icons/dragon-dev-day.svg"
              }
              alt="logo"
            />
          </Link>
        </div>
        <div className="centered">
          <div className="theme-toggle-container center">
            <ThemeToggle />
          </div>
        </div>
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
                    <h4>
                      {section.name}
                      {navMenuIcons[index]}
                    </h4>
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
                    <h4>
                      {section}
                      {navMenuIcons[index]}
                    </h4>
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
