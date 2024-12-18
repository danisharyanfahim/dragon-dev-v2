import InfiniteScroll from "@/app/components/infinite-scroll";
import SearchBar from "@/app/components/search-bar";
import React from "react";

const BlogSearch = ({
  searchParams,
}: {
  searchParams: Promise<{ title?: string }>;
}) => {
  return (
    <div className="blog-search-page">
      <SearchBar />
      <InfiniteScroll searchParams={searchParams} />
    </div>
  );
};

export default BlogSearch;
