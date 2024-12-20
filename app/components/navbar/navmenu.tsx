"use client";
import { pageSections } from "@/app/global/variables";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

const NavMenu = () => {
  const [showing, setShowing] = useState<boolean>(false);

  return (
    <>
      <button
        className="menu-button center"
        onClick={() => setShowing((prev) => !prev)}
      >
        <CgMenuGridR className={`menu-icon ${showing ? "active" : ""}`} />
      </button>
      {showing && (
        <div className="side-nav">
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
      )}
    </>
  );
};

export default NavMenu;
