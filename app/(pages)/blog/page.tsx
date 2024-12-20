import InfiniteScroll from "@/app/components/infinite-scroll";
import SearchBar from "@/app/components/search-bar";
import React from "react";

const BlogIndex = ({
  searchParams,
}: {
  searchParams: Promise<{ title?: string }>;
}) => {
  return (
    <div className="blog-page">
      <SearchBar />
      <InfiniteScroll />
    </div>
  );
};

export default BlogIndex;
