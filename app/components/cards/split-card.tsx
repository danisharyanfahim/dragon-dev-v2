import React from "react";

const SplitCard = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div className="split-card" id={id}>
      {children}
    </div>
  );
};

export default SplitCard;
