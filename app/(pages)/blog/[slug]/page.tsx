import CodeContainer from "@/app/components/code-container";
import Tag from "@/app/components/tag";
import { ArticlePageProps } from "@/app/interfaces/blog";
import { urlFor } from "@/app/lib/client";
import { getArticle } from "@/app/utils/server-actions";
import { formatDate } from "@/app/utils/utility-functions";
import React from "react";

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: ArticlePageProps = await getArticle(params.slug);
  const { title, titleImage, dateCreated, lastUpdated, content, categories } =
    data;
  return (
    <div className="blog-article-container">
      <main className="blog-article">
        <figure className="image-container">
          <img
            className="hero-image"
            src={urlFor(titleImage).url()}
            alt="Hero"
          />
        </figure>
        <article>
          <section className="article-head">
            <h4 className="author-info">Dans - Blog</h4>
            <h1 className="title">{title}</h1>
            <div className="dates-container">
              <p className="date-created">Written: {formatDate(dateCreated)}</p>
              <p className="date-updated">
                Last Updated: {formatDate(lastUpdated)}
              </p>
            </div>
            <div className="category-container">
              {data?.categories.map((category, index) => {
                return <Tag {...category} key={index} />;
              })}
            </div>
          </section>
          <section className="article-body">
            {content.map((item, index: number) => {
              if (item.type === "text") {
                return <p key={index}>{item.text}</p>;
              } else if (item.type === "code") {
                return <CodeContainer key={index} {...item}></CodeContainer>;
              }
            })}
          </section>
        </article>
      </main>
    </div>
  );
};

export default BlogArticle;
