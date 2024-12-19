"use client";
import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

const Tag = ({ relevance, text }: { relevance: number; text: string }) => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.push(`/blog/search?category=${text.toLowerCase()}`);
  };

  return (
    <button className={`tag relevance-${relevance}`} onClick={handleClick}>
      <small>{text}</small>
    </button>
  );
};

export default Tag;
