"use client";

const SplitCard = ({
  children,
  id,
  reverse = false,
}: {
  children: React.ReactNode;
  id: string;
  reverse?: boolean;
}) => {
  return (
    <div className={`split-card ${reverse ? "reverse " : ""}`} id={id}>
      {children}
    </div>
  );
};

export default SplitCard;
