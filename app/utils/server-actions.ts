"use server";

import { sanityFetch } from "../lib/client";

export const getNumberOfArticles = async (searchParams: { title?: string }) => {
  const { title } = searchParams || {};
  const query = `*[_type == 'article' && title match $title]`;
  const articleData = await sanityFetch({
    query: query,
    params: { title: `*${title}*` }, // Will match any title which contains the search term
    revalidate: 30,
  });
  return articleData.length;
};

export const getArticlesByPage = async (
  searchParams: { title?: string },
  page: number,
  articlesPerPage: number
) => {
  const { title } = searchParams || {};
  const firstArticle = (page - 1) * articlesPerPage;
  const lastArticle = page * articlesPerPage;
  const query = `*[_type == 'article' && title match $title][${firstArticle}...${lastArticle}]
  {title, 'dateCreated' : _createdAt, titleImage, 'currentSlug': slug.current, categories[]{'text': categoryName, relevance}, overview}`;
  const articleData = await sanityFetch({
    query: query,
    params: { title: `*${title}*` }, // Will match any title which contains the search term
    revalidate: 30,
  });
  return articleData; //Get rid of last updated in the final version
};
