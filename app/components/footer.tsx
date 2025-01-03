import React from "react";
import FooterContent from "./footer-content";

const Footer = ({ id }: { id?: string }) => {
  return (
    <div className="footer-container" id={id} style={{ paddingTop: "2rem" }}>
      <footer>
        <FooterContent />
      </footer>
    </div>
  );
};

export default Footer;
