import SplitCard from "@/app/components/cards/split-card";
import Carousel from "@/app/components/carousel";
import Tag from "@/app/components/tag";
import { ArticleCardProps } from "@/app/interfaces/blog";
import { urlFor } from "@/app/lib/client";
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
          <Carousel
            infinite={true}
            showPlayButton={true}
            autoPlay={true}
            delay={3000}
          >
            {articleData.map((data) => {
              const {
                title,
                titleImage,
                overview,
                categories,
                id,
                currentSlug,
              } = data;
              return (
                <div className="article-carousel-card" key={id}>
                  <div className="image-container">
                    <img src={urlFor(titleImage).url()} alt="article-image" />
                  </div>
                  <div className="text-container">
                    <h5 className="title">{title}</h5>
                    <p className="overview">{overview}</p>
                    <div className="category-container">
                      {categories.map((category, index) => {
                        return <Tag key={index} {...category} />;
                      })}
                    </div>
                    <div className="link-button-container">
                      <Link href={`/blog/${currentSlug}`}>
                        <button className="link-button">
                          <p>Read More</p>
                        </button>
                      </Link>
                    </div>
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
