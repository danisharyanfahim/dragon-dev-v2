"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  getArticlesByPage,
  getNumberOfArticles,
} from "../utils/server-actions";
import useOnScreen from "../hooks/useOnScreen";
import ArticleCard from "./article-card";
import { ArticleCardProps } from "../interfaces/blog";

const InfiniteScroll = ({
  searchParams,
  articlesPerPage = 6,
}: {
  searchParams: Promise<{ title?: string }>;
  articlesPerPage?: number;
}) => {
  const [totalArticles, setTotalArticles] = useState<number>(0); //Start at -1, so that it doesn't show no results immediately after the component mounts
  const [articles, setArticles] = useState<ArticleCardProps[]>([]);
  const hasMore = useRef(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const page = useRef(0);
  const reachedBottom = useOnScreen(loaderRef, 0.25); //Only when 25% of the loader is visible will the OnScreenHook be triggered
  const renderCount = useRef(0);

  // Fetch the total number of articles, along with the first page of articles
  const fetchFirstArticles = async () => {
    const params = await searchParams;
    const numberOfArticles = await getNumberOfArticles(params);
    setTotalArticles(numberOfArticles);
    hasMore.current = true;
  };

  // Load articles based on page number
  const loadArticles = async () => {
    const params = await searchParams;
    const articleData = await getArticlesByPage(
      params,
      page.current,
      articlesPerPage
    );

    if (articles.length + articleData.length === totalArticles) {
      hasMore.current = false; // No more articles to load
    }
    setArticles((prev) => [...prev, ...articleData]);
  };

  //Resets states and the current page to 1
  const resetArticles = () => {
    setTotalArticles(0);
    setArticles([]);
    page.current = 0;
  };

  //Sets the number of skeleton cards
  const setSkeletons = () => {
    return totalArticles - articles.length >= articlesPerPage
      ? articlesPerPage
      : totalArticles - articles.length;
  };

  // Every time the search Params change, reset the states and fetch the total number of articles
  useEffect(() => {
    resetArticles();
    fetchFirstArticles();
  }, [searchParams]);

  // if the bottom has been reached and there are more articles, then increment the page number and load in the next batch of articles
  useEffect(() => {
    if (reachedBottom && hasMore.current) {
      // debugger;
      page.current += 1;
      loadArticles();
    }
  }, [reachedBottom]);

  renderCount.current++;
  return (
    <>
      <div
        style={{
          position: "fixed",
          margin: "1rem",
          color: "red",
          zIndex: 100,
        }}
      >
        <div>reachedBottom: {reachedBottom.toString()}</div>
        <div>hasMore: {hasMore.current.toString()}</div>
        <div>page: {page.current}</div>
        <div>Render Count: {renderCount.current}</div>
        <div>Total Articles: {totalArticles}</div>
      </div>
      <div className="infinite-scroll-container">
        <div className="article-card-container">
          {articles.map((article: ArticleCardProps, index) => {
            return <ArticleCard {...article} key={index} />;
          })}
        </div>

        {totalArticles > 0 && (
          <div ref={loaderRef} className="loading-container">
            {Array(setSkeletons())
              .fill(null)
              .map((_, index) => (
                <div key={index} className="skeleton-card"></div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default InfiniteScroll;

/* 3 renders at most per request
1) Mount component
2) Loads in skeleton
3) Loads in article cards
*/
