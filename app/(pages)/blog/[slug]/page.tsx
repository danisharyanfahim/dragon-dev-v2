import CodeContainer from "@/app/components/ui/code-container";
import Tag from "@/app/components/ui/tag";
import {
  ArticlePageProps,
  CodeContainerProps,
  Marks,
  TextBlock,
} from "@/app/interfaces/blog";
import { urlFor } from "@/app/lib/client";
import { getArticle } from "@/app/utils/server-actions";
import { formatDate } from "@/app/utils/utility-functions";
import React from "react";

const applyMarks = (text: string, marks: Marks[]) => {
  let formattedText: string | React.ReactNode = text;

  // Apply all the marks the text has to it
  if (marks) {
    marks.forEach((mark) => {
      if (mark === "strong") {
        formattedText = <strong>{formattedText}</strong>;
      } else if (mark === "em") {
        formattedText = <em>{formattedText}</em>;
      } else if (mark === "underline") {
        formattedText = <u>{formattedText}</u>;
      } else if (mark === "strike-through") {
        formattedText = <del>{formattedText}</del>;
      } else if (mark === "code") {
        formattedText = <code className="code">{formattedText}</code>;
      } else if (mark === "highlight") {
        formattedText = <mark>{formattedText}</mark>;
      }
    });
  }
  return formattedText;
};

const formatText = (textInfo: TextBlock, index: number) => {
  const { text, style, marks, listItem, link } = textInfo;
  let formattedText: React.ReactNode;

  if (style === "normal") {
    formattedText = <p key={index}>{applyMarks(text, marks)}</p>;
  } else {
    const Tag = style as keyof JSX.IntrinsicElements; // Dynamically sets the style of the text based on the tag name
    if (style === "blockquote") {
      formattedText = <Tag key={index}>"{applyMarks(text, marks)}"</Tag>; //Applies quotes to block qoute tag
    } else {
      formattedText = <Tag key={index}>{applyMarks(text, marks)}</Tag>;
    }
  }

  if (link) {
    return (
      <a href={link} className="external-link" target="_blank">
        {formattedText}
      </a>
    );
  } else {
    return formattedText;
  }
};

const generateContent = (content: (TextBlock | CodeContainerProps)[]) => {
  return content.map((item: TextBlock | CodeContainerProps, index: number) => {
    if (item.type === "text") {
      return formatText(item, index);
    } else if (item.type === "code") {
      return <CodeContainer key={index} {...item}></CodeContainer>;
    }
  });
};

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: ArticlePageProps = await getArticle(params.slug);
  const { title, titleImage, dateCreated, lastUpdated, content, categories } =
    data;
  return (
    <div className="blog-article-page">
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
              <h4 className="author-info">
                <span className="colorful">DragonDev</span>
                <span className="colorful">Blog</span>
              </h4>
              <h1 className="title">{title}</h1>
              <div className="dates-container">
                <p className="date-created">
                  Written: {formatDate(dateCreated)}
                </p>
                <p className="date-updated">
                  Last Updated: {formatDate(lastUpdated)}
                </p>
              </div>
              <div className="category-container">
                {categories.map((category, index) => {
                  return <Tag {...category} key={index} />;
                })}
              </div>
            </section>
            <section className="article-body">
              {generateContent(content)}
            </section>
          </article>
        </main>
      </div>
    </div>
  );
};

export default BlogArticle;
