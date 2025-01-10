"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const setIcon = () => {
    return (
      <div
        className={`${
          resolvedTheme === "light" ? "light" : "dark"
        } toggle-button center`}
      >
        {resolvedTheme === "light" ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <IoMoonSharp className="toggle-icon" />
        )}
      </div>
    );
  };

  return (
    mounted && (
      <div
        className={`${
          resolvedTheme === "dark" ? "dark" : "light"
        } theme-toggle`}
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        {setIcon()}
      </div>
    )
  );
};

export default ThemeToggle;
