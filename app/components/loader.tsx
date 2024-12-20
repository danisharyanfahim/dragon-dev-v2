import React from "react";
import { FaCircleRadiation } from "react-icons/fa6";

const Loader = () => {
  return (
    <div className="loading-container">
      <FaCircleRadiation className="loading-icon" />
    </div>
  );
};

export default Loader;
