"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import {
  getAllArticles,
  getArticlesByPage,
  getNumberOfArticles,
} from "../utils/server-actions";
import ArticleCard from "./cards/article-card";
import { ArticleCardProps, SearchParamProps } from "../interfaces/blog";
import SkeletonArticleCard from "./skeleton-article-card";
import { useIntersectionObserver } from "usehooks-ts";

const InfiniteScroll = ({
  searchParams,
  articlesPerPage = 6,
}: {
  searchParams?: Promise<SearchParamProps | undefined>;
  articlesPerPage?: number;
}) => {
  const [totalArticles, setTotalArticles] = useState<number>(0); //Start at -1, so that it doesn't show no results immediately after the component mounts
  const [articles, setArticles] = useState<ArticleCardProps[]>([]);
  const hasMore = useRef(false);
  const page = useRef(0);
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.25 }); //Only when 25% of the loader is visible will the OnScreenHook be triggered
  const renderCount = useRef(0);
  const [isPending, startTransition] = useTransition();

  // Fetch the total number of articles, along with the first page of articles
  const fetchFirstArticles = async () => {
    const params = await searchParams;
    let numberOfArticles = 0;
    if (Object.keys(params).length !== 0) {
      numberOfArticles = await getNumberOfArticles(params);
    } else {
      numberOfArticles = await getNumberOfArticles();
    }
    setTotalArticles(numberOfArticles);
    hasMore.current = true;
  };

  // Load articles based on page number
  const loadArticles = async () => {
    const params = await searchParams;
    let articleData;

    if (Object.keys(params).length !== 0) {
      articleData = await getArticlesByPage(
        params,
        page.current,
        articlesPerPage
      );
    } else {
      articleData = await getAllArticles(page.current, articlesPerPage);
    }

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
  const numberOfSkeletons = useMemo(() => {
    return totalArticles - articles.length >= articlesPerPage
      ? articlesPerPage
      : totalArticles - articles.length;
  }, [totalArticles, articles.length]);

  // Every time the search Params change, reset the states and fetch the total number of articles
  useEffect(() => {
    startTransition(() => {
      resetArticles();
      fetchFirstArticles();
    });
  }, [searchParams]);

  // if the bottom has been reached and there are more articles, then increment the page number and load in the next batch of articles
  useEffect(() => {
    if (isIntersecting && hasMore.current) {
      // debugger;
      page.current += 1;
      loadArticles();
    }
  }, [isIntersecting]);

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
        <div>isIntersecting: {isIntersecting.toString()}</div>
        <div>hasMore: {hasMore.current.toString()}</div>
        <div>page: {page.current}</div>
        <div>Render Count: {renderCount.current}</div>
        <div>Total Articles: {totalArticles}</div>
      </div>
      <div className="infinite-scroll-container">
        <div className="article-card-container">
          {articles.map((article: ArticleCardProps, index) => {
            const { id } = article;
            return <ArticleCard {...article} key={id} />;
          })}
        </div>
        {totalArticles > 0 && hasMore.current && (
          <div
            ref={ref}
            className="loading-container"
            style={{ marginTop: articles.length >= 3 ? "2rem" : "0rem" }}
          >
            {Array(numberOfSkeletons)
              .fill(null)
              .map((_, index) => (
                <SkeletonArticleCard key={index} />
              ))}
          </div>
        )}
        {!isPending && totalArticles === 0 && (
          <h4 className="no-results-text">No Results</h4>
        )}
      </div>
    </>
  );
};

export default InfiniteScroll;
