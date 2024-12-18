"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Tag = ({ relevance, text }: { relevance: number; text: string }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/blog/search?category=${text.toLowerCase()}`); // Update the URL with the new params
  };

  return (
    <button className={`tag relevance-${relevance}`} onClick={handleClick}>
      <small>{text}</small>
    </button>
  );
};

export default Tag;
