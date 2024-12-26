import React from "react";
import FooterContent from "./footer-content";

const Footer = ({ id }: { id?: string }) => {
  return (
    <div className="footer-container" id={id}>
      <footer>
        <FooterContent />
      </footer>
    </div>
  );
};

export default Footer;
