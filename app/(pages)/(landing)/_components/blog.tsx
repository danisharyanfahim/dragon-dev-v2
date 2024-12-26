import SplitCard from "@/app/components/cards/split-card";
import React from "react";

const Blog = () => {
  return (
    <section className="blog">
      <div className="section-spacer">
        <SplitCard id="blog-intro">
          <section className="text-section">
            <h1>Blog</h1>
            <h2 className="no-bold">
              Welcome to my blog, where I share insights, tips, and tutorials on
              web development, design, and technology. I write about my
              experiences, the challenges I’ve faced, and the tools I use to
              create better websites and apps.
            </h2>
          </section>
        </SplitCard>
        <SplitCard id="blog-carousel">
          <div className="carousel">
            <div className="card">
              {/* Simple card which just by clicking on it, will take you to the article page, this will be different from the main blog cards, categories will also not be clickable */}
              <div className="title"></div>
              {/* <img src="" alt="article image" /> */}
              <div className="overview"></div>
              <ul className="categories"></ul>
            </div>
          </div>
        </SplitCard>
      </div>
    </section>
  );
};

export default Blog;
