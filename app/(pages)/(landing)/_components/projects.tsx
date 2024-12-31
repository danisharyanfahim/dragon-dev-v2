import SplitCard from "@/app/components/cards/split-card";
import SlideShow from "@/app/components/slide-show";
import React from "react";
import { GiPencilRuler } from "react-icons/gi";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-spacer">
        <SplitCard id="projects-header" reverse={true}>
          <section className="text-section">
            <h1 className="icon">
              <GiPencilRuler />
            </h1>
            <h1>Projects</h1>
            <h4 className="no-bold">
              Here, you'll find my side projects, consisting of various
              applications, tools, and creative coding projects, including demo
              sites and other coding experiments outside of web development.
            </h4>
          </section>
          <SlideShow infinite={true}>
            <div className="project-slide">
              <h3>Project Name</h3>
              <h5>Site Description</h5>
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
            <div className="project-slide">
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
            <div className="project-slide">
              <h3>Project 3 Name</h3>
              <h4>Site 3 Description</h4>
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
