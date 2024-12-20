import InfiniteScroll from "@/app/components/infinite-scroll";
import SearchBar from "@/app/components/search-bar";
import { SearchParamProps } from "@/app/interfaces/blog";
import React from "react";

const BlogIndex = ({
  searchParams,
}: {
  searchParams: Promise<SearchParamProps | undefined>;
}) => {
  return (
    <div className="blog-page">
      <SearchBar />
      <InfiniteScroll searchParams={searchParams} articlesPerPage={6} />
    </div>
  );
};

export default BlogIndex;
