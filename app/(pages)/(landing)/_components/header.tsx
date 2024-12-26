import React from "react";

const Header = () => {
  return (
    <header id="home">
      <div className="section-spacer">
        <figure className="logo-container"></figure>
        <div className="text-container">
          <h1 className="title text">Hi, I'm Dan! AKA Dragon Dev</h1>
          <h2 className="no-bold text">
            I’m a full-stack developer and graphic designer with a passion for
            front-end development and UX/UI design.
          </h2>
          <h4 className="no-bold text">
            My mission is to create websites and web applications that deliver
            lightning-fast performance, world-class functionality, and flawless
            design.
          </h4>
        </div>
      </div>
    </header>
  );
};

/* Put 2 tickers in this on the top and bottom */

export default Header;
