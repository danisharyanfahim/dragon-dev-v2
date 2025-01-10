"use client";
import React, { useMemo, useState } from "react";

/* 
Basically a giant stack of cards, which allow you to click which one is shown, exactly like a slideshow
// -vertical tabs
// -horizontal tabs
// -tabs
// -pages
// -page selection
// -Responsive tabs
// -Responsive text
-Responsive pages/card (Format the card amd then have the text, image and other things adjust in accordance)
-usage of grids for responsiveness, as well as minmax, clamps, media queries, other text stuff
-Later on when it is more advanced I can incorporate the tabs from my old window system
-
*/

interface WindowProps {
  buttonInfo: { title: string; icon?: React.ReactNode }[];
  initialPage?: number;
  children: React.ReactNode[];
}

const Window = ({ buttonInfo, initialPage, children }: WindowProps) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage ?? 0);

  const pages = useMemo(() => {
    return children.map((child, index) => {
      return (
        <li key={index} className="page">
          {child}
        </li>
      );
    });
  }, [children]);

  const togglePage = (index: number) => {
    if (index !== currentPage) {
      setCurrentPage(index);
    }
  };

  return (
    <div className="window-menu">
      <div className="tabs-container">
        <ol className="tabs">
          {buttonInfo.map((button, index) => {
            return (
              <li
                className={`tab ${index === currentPage ? "active" : ""}`}
                key={index}
              >
                <button onClick={() => togglePage(index)}>
                  <h4>
                    {button.icon ? (
                      <span className="icon">{button.icon}</span>
                    ) : (
                      <></>
                    )}
                    {button.title}
                  </h4>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="pages-container">
        <ol className="pages">{pages[currentPage]}</ol>
      </div>
    </div>
  );
};

export default Window;
