import React from "react";

const CarouselCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>;
};

export default CarouselCard;
