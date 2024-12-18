"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useRouter, redirect } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (search.length > 0) {
      params.set("title", search);
      router.push(`/blog/search?${params.toString()}`);
    }
  };

  return (
    <form className="search-bar-container">
      <input
        className="search-bar"
        type="search"
        value={search}
        name="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        size={17}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
      />
      <button
        type="submit"
        className="search-button"
        onClick={(e) => handleSubmit(e)}
      >
        <IoMdSearch />
      </button>
    </form>
  );
};

export default SearchBar;
