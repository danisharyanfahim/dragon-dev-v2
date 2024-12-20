import InfiniteScroll from "@/app/components/infinite-scroll";
import SearchBar from "@/app/components/search-bar";
import React from "react";

const BlogIndex = ({
  searchParams,
}: {
  searchParams: Promise<SearchParamProps>;
}) => {
  return (
    <div className="blog-page">
      <SearchBar />
      <InfiniteScroll searchParams={searchParams} />
    </div>
  );
};

export default BlogIndex;
