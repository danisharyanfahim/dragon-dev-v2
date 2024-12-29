import SplitCard from "@/app/components/cards/split-card";
import SlideShow from "@/app/components/slide-show";
import React from "react";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-spacer">
        <SplitCard id="projects-header">
          <section className="text-section">
            <h1>Projects</h1>
            <h3 className="no-bold">
              Here, you'll find my side projects, consisting of various
              applications, tools, and creative coding projects that demonstrate
              my problem-solving abilities and passion for technology, including
              demo sites and other coding experiments outside of web
              development.
            </h3>
          </section>
        </SplitCard>
        <SplitCard id="projects-slide-show">
          <SlideShow infinite={true}>
            <div className="section-card project">
              <h3>Project Name</h3>
              <h4>Site Description</h4>
              <p className="date">2024</p>
              <img alt="image of the project or screenshot to the top" />
              <ul className="Tech used"></ul>
              <div className="button-container">
                <a href="https://Thesolutioners.ca">
                  <button className="link-button">Go to site</button>
                </a>
                <a
                  href="https://github.com/danisharyanfahim/the-solutioners"
                  className="github-link"
                >
                  <div className="tool-tip">Go to site</div>
                  <img alt="Github Logo" />
                </a>
              </div>
            </div>
            <div className="section-card project">
              <h3>Project 2 Name</h3>
              <h4>Site 2 Description</h4>
              <p className="date">2024</p>
              <img alt="image of the project or screenshot to the top" />
              <ul className="Tech used"></ul>
              <div className="button-container">
                <a href="https://Thesolutioners.ca">
                  <button className="link-button">Go to site</button>
                </a>
                <a
                  href="https://github.com/danisharyanfahim/the-solutioners"
                  className="github-link"
                >
                  <div className="tool-tip">Go to site</div>
                  <img alt="Github Logo" />
                </a>
              </div>
            </div>
          </SlideShow>
        </SplitCard>
      </div>
    </section>
  );
};

export default Projects;
