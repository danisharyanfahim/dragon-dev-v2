"use client";
import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Category } from "../interfaces/blog";
import { formatCamelCase } from "../utils/utility-functions";

const Tag = ({ relevance, text, format }: Category) => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.push(`/blog/search?category=${text.toLowerCase()}`);
  };

  return (
    <button className={`tag relevance-${relevance}`} onClick={handleClick}>
      <small>
        {format === "capitalize" ? text.toUpperCase() : formatCamelCase(text)}
      </small>
    </button>
  );
};

export default Tag;
