import React from "react";
import Header from "./_components/header";
import About from "./_components/about/about";
import Technologies from "./_components/technologies";
import Contact from "./_components/contact";
import Projects from "./_components/projects";
import Work from "./_components/work";
import Blog from "./_components/blog";
import Footer from "./_components/footer";

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <About />
      <Technologies />
      <Work />
      <Projects />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default Landing;
