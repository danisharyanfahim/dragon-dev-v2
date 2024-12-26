"use server";

import { SearchParamProps } from "../interfaces/blog";
import { Understanding } from "../interfaces/landing";
import { sanityFetch } from "../lib/client";

export const getNumberOfArticles = async (searchParams?: SearchParamProps) => {
  const { title, category, writtenAt } = searchParams || {};
  let query;
  let articleData;

  if (searchParams) {
    let params;
    if (category) {
      query = `*[_type == 'article' && $category in categories[].categoryName]{}`;
      params = { category: `${category.toLowerCase()}` };
    } else if (writtenAt) {
      query = `*[_type == 'article' &&  _createdAt match $writtenAt]{}`;
      params = { writtenAt: `*${writtenAt}*` };
    } else {
      query = `*[_type == 'article' && title match $title]{}`;
      params = { title: `*${title}*` };
    }
    articleData = await sanityFetch({
      query: query,
      params: params, // Will match any title which contains the search term
      revalidate: 30,
    });
  } else {
    query = `*[_type == 'article']{}`;
    articleData = await sanityFetch({
      query: query,
      revalidate: 30,
    });
  }
  return articleData.length;
};

export const getAllArticles = async (page: number, articlesPerPage: number) => {
  const firstArticle = (page - 1) * articlesPerPage;
  const lastArticle = page * articlesPerPage;
  const query = `
  *[_type == 'article'][${firstArticle}...${lastArticle}] | order(_createdAt desc) {
  title,
  'dateCreated': _createdAt,
  titleImage,
  'currentSlug': slug.current,
  categories[] | order(relevance asc) {
    'text': categoryName,
    relevance,
    format
  },
  overview,
  'id': _id
}`;
  const articleData = await sanityFetch({
    query: query,
    revalidate: 30,
  });
  return articleData; //Get rid of last updated in the final version
};

export const getArticle = async (slug: string) => {
  const query = `
*[_type == "article" && slug.current == "${slug}"] {
  "currentSlug": slug.current,
  title,
  titleImage,
  'dateCreated': _createdAt,
  'lastUpdated': _updatedAt,
  categories[] | order(relevance asc) {
    'text': categoryName,
    relevance,
    format
  },
  content[] {
    _type == 'block' => {
      'type': 'text',
      'text': children[0].text,
      'style': style,
      'listItem': listItem,
      'marks': children[0].marks[],
      'link': markDefs[0].href
    },
    _type == 'document' => {
      'type': 'code',
      'fileName': fileName + '.' + fileType,
      'language': Code.language,
      'code': Code.code
    }
  }
}[0]

    `;
  const articleData = await sanityFetch({
    query: query,
    revalidate: 30,
  });
  return articleData;
};

export const getArticlesByPage = async (
  searchParams: SearchParamProps,
  page: number,
  articlesPerPage: number
) => {
  const { title, category, writtenAt } = searchParams || {};
  const firstArticle = (page - 1) * articlesPerPage;
  const lastArticle = page * articlesPerPage;
  let params, queryFilter;
  const queryFields = `{
  title,
  'dateCreated': _createdAt,
  titleImage,
  'currentSlug': slug.current,
  categories[] | order(relevance asc) {
    'text': categoryName,
    relevance,
    format
  },
  overview,
  'id': _id
}
`;

  if (category) {
    queryFilter = `*[_type == 'article' && $category in categories[].categoryName][${firstArticle}...${lastArticle}] | order(_createdAt desc)`;
    params = { category: `${category.toLowerCase()}` };
  } else if (writtenAt) {
    queryFilter = `*[_type == 'article' &&  _createdAt match $writtenAt][${firstArticle}...${lastArticle}] | order(_createdAt desc)`;
    params = { writtenAt: `*${writtenAt}*` };
  } else {
    queryFilter = `*[_type == 'article' && title match $title][${firstArticle}...${lastArticle}] | order(_createdAt desc)`;
    params = { title: `*${title}*` };
  }

  const articleData = await sanityFetch({
    query: queryFilter + queryFields,
    params: params, // Will match any title which contains the search term
    revalidate: 30,
  });
  return articleData;
};

export const getTech = async (understanding: Understanding) => {
  const techData = await sanityFetch({
    query: `*[_type == "tech" && understanding match $understanding]{title, features, description, category, 'url': url.current, 'id': _id, icon, understanding}`,
    params: { understanding: understanding },
    revalidate: 30,
  });
  return techData;
};

export const getLang = async (understanding: Understanding) => {
  const langData = await sanityFetch({
    query: `*[_type == "programmingLanguage" && understanding match $understanding]{title, usedFor, description, 'id': _id, icon, yearCreated, understanding}`,
    params: { understanding: understanding },
    revalidate: 30,
  });
  return langData;
};
