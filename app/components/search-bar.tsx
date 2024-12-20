"use client";
import React, { Suspense, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useRouter, redirect, usePathname } from "next/navigation";
import Loader from "./loader";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (search.length === 0) {
      if (pathname !== "/blog") {
        redirect(`/blog`);
      }
    } else {
      parseSearch(params);
      router.push(`/blog/search?${params.toString()}`);
    }
  };

  const parseSearch = (params: URLSearchParams) => {
    if (search.includes("#")) {
      params.set("category", search.substring(1));
    } else if (search.includes("from:")) {
      params.set("writtenAt", search.substring(5));
    } else {
      params.set("title", search);
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <form className="search-bar-container">
        <input
          className="search-bar"
          type="search"
          value={search}
          name="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          size={17}
          autoComplete="off"
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
          <p>
            <IoMdSearch />
          </p>
        </button>
      </form>
    </Suspense>
  );
};

export default SearchBar;
