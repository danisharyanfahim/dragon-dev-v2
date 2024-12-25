import React from "react";

const Blog = () => {
  return (
    <section className="blog">
      <div className="section-spacer">
        <h2>Blog</h2>
        <div className="short-description">
          Welcome to my blog, where I share insights, tips, and tutorials on web
          development, design, and technology. I write about my experiences, the
          challenges I’ve faced, and the tools I use to create better websites
          and apps. Whether you're a fellow developer or just interested in
          learning more about the world of web design, you'll find something
          valuable here. Stay tuned for my latest posts!
        </div>
        <div className="carousel">
          <div className="card">
            {/* Simple card which just by clicking on it, will take you to the article page, this will be different from the main blog cards, categories will also not be clickable */}
            <div className="title"></div>
            {/* <img src="" alt="article image" /> */}
            <div className="overview"></div>
            <ul className="categories"></ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
