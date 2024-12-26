import SplitCard from "@/app/components/cards/split-card";
import React from "react";

const Header = () => {
  return (
    <header id="home">
      <div className="section-spacer">
        <SplitCard id="intro">
          <figure className="logo-container"></figure>
          <section>
            <h1 className="title text">Hi, I'm Dan! AKA Dragon Dev</h1>
            <h2 className="no-bold text">
              I’m a full-stack developer and graphic designer with a passion for
              front-end development and UX/UI design.
            </h2>
            <h4 className="no-bold text">
              My mission is to create websites and web applications that deliver
              lightning-fast performance, world-class functionality, and
              flawless design.
            </h4>
          </section>
        </SplitCard>
      </div>
    </header>
  );
};

/* Put 2 tickers in this on the top and bottom */

export default Header;
