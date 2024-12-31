import SplitCard from "@/app/components/cards/split-card";
import React from "react";

const Header = () => {
  return (
    <header id="home">
      <div className="section-spacer">
        <SplitCard id="intro">
          <figure className="logo-container">
            <div className="logo"></div>
          </figure>
          <section className="text-container">
            <h1 className="title text">
              Hi, I'm <span className="colorful">Dan</span>! AKA
              <span className="colorful"> Dragon Dev</span>
            </h1>
            <h3 className="no-bold text">
              I’m a full-stack developer and graphic designer with a passion for
              front-end development and UX/UI design.
            </h3>
          </section>
        </SplitCard>
      </div>
    </header>
  );
};

/* Put 2 tickers in this on the top and bottom */

export default Header;
