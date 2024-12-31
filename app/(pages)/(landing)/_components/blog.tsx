import SplitCard from "@/app/components/cards/split-card";
import Carousel from "@/app/components/carousel";
import Tag from "@/app/components/tag";
import { ArticleCardProps } from "@/app/interfaces/blog";
import { getLatestArticles } from "@/app/utils/server-actions";
import Link from "next/link";
import React from "react";
import { IoNewspaperSharp } from "react-icons/io5";

const Blog = async () => {
  const articleData: ArticleCardProps[] = await getLatestArticles(5);

  return (
    <section className="blog">
      <div className="section-spacer">
        <SplitCard id="blog-intro">
          <section className="text-section">
            <h1 className="icon">
              <IoNewspaperSharp />
            </h1>
            <h1>Blog</h1>
            <h4 className="no-bold">
              Welcome to my blog, where I share insights, tips, and tutorials on
              web development, design, and technology. I write about my
              experiences, the challenges I’ve faced, and the tools I use to
              create better websites and apps.
            </h4>
            <div className="button-container">
              <Link href="/blog">
                <button className="blog-button">
                  <p>Visit Blog</p>
                </button>
              </Link>
            </div>
          </section>
        </SplitCard>
        <SplitCard id="blog-carousel">
          <Carousel infinite={true} showPlayButton={true} autoPlay={true}>
            {articleData.map((data) => {
              const { title, overview, categories, id, currentSlug } = data;
              return (
                <div className="article-carousel-card" key={id}>
                  <div className="title">{title}</div>
                  {/* <img src="" alt="article image" /> */}
                  <div className="overview">{overview}</div>
                  <div className="category-container">
                    {categories.map((category, index) => {
                      return <Tag key={index} {...category} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </SplitCard>
      </div>
    </section>
  );
};

export default Blog;
