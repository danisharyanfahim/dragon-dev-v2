import React from "react";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-spacer">
        <h2>Projects</h2>
        <div className="short-description">
          This section is dedicated to showcasing my side projects, including
          demo sites and other coding experiments outside of web development.
          Here, you'll find various applications, tools, and creative coding
          projects that demonstrate my problem-solving abilities and passion for
          technology. From small scripts to larger applications, these projects
          highlight my diverse skills and commitment to continuous learning.
        </div>
        <div className="window">
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
      </div>
    </section>
  );
};

export default Projects;
