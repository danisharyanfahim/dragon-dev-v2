import SplitCard from "@/app/components/cards/split-card";
import IconLink from "@/app/components/ui/icon-link";
import Window from "@/app/components/ui/window";
import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { PiWarningDiamondFill } from "react-icons/pi";

const solutionerTechnologies = [
  { name: "HTML", type: "language" },
  { name: "CSS", type: "language" },
  { name: "JS", type: "language" },
  { name: "TS", type: "language" },
  { name: "React", type: "technology" },
  { name: "NextJS", type: "technology" },
  { name: "SASS", type: "technology" },
  { name: "Git/Github", type: "technology" },
  { name: "Synthesia.io", type: "technology" },
  { name: "Ionos", type: "technology" },
  { name: "Plesk", type: "technology" },
  { name: "Adobe Photoshop", type: "technology" },
  { name: "Adobe Illustrator", type: "technology" },
  { name: "VSCode", type: "technology" },
  { name: "Vercel", type: "technology" },
];

const sdsTechnologies = [
  { name: "HTML", type: "language" },
  { name: "CSS", type: "language" },
  { name: "JS", type: "language" },
  { name: "TS", type: "language" },
  { name: "React", type: "technology" },
  { name: "NextJS", type: "technology" },
  { name: "Git/Github", type: "technology" },
  { name: "Sanity.io", type: "technology" },
  { name: "SASS", type: "technology" },
  { name: "Porkbun", type: "technology" },
  { name: "Adobe Illustrator", type: "technology" },
  { name: "Jira", type: "technology" },
  { name: "Figma", type: "technology" },
  { name: "VSCode", type: "technology" },
  { name: "AWS", type: "technology" },
  { name: "AWS Amplify", type: "technology" },
];

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="section-spacer">
        <SplitCard id="work-window">
          <section className="work-header">
            <div className="work-icon-container">
              <h1 className="icon">
                <MdOutlineWork />
              </h1>
            </div>
            <div className="text-section">
              <h1 className="title">Work</h1>
              <h4 className="no-bold">
                Take a look at my past and ongoing projects to see how I
                approach design, functionality, and user experience. Each
                project is a testament to my commitment to creating
                high-quality, user-friendly websites that not only look great
                but also perform flawlessly.
              </h4>
            </div>
          </section>
        </SplitCard>
        <SplitCard id="work-intro">
          <Window
            buttonInfo={[
              {
                title: "TheSolutioners.ca",
                icon: <div className="the-solutioners-icon"></div>,
              },
              {
                title: "SDSPropertyGroup.com",
                icon: <div className="sds-property-group-icon"></div>,
              },
            ]}
          >
            <div className="work-page" id="the-solutioners">
              <div className="logo" id="the-solutioners-logo" />
              <p className="date">May 2024 - Present</p>
              <h5>Lead Developer</h5>
              <h3>The Solutioners</h3>
              <h5>
                A professional website for The Solutioners, a Canadian
                cybersecurity and IT solutions company. They offer a wide range
                of services, including SOC services, risk assessment,
                penetration testing and many other IT security solutions.
              </h5>
              <ul className="Tasks-completed">
                <li>
                  <p>
                    Served as the solo developer for the company website,
                    handling all aspects of the development process.
                  </p>
                </li>
                <li>
                  <p>
                    Designed the overall structure and layout of the website,
                    ensuring a user-friendly, visually appealing experience, and
                    implemented responsive design for seamless viewing on all
                    devices.
                  </p>
                </li>
                <li>
                  <p>
                    Developed and implemented the theme for the website,
                    reflecting the company’s brand identity.
                  </p>
                </li>
                <li>
                  <p>
                    Provided all necessary assets, including images, videos, and
                    other media for the site.
                  </p>
                </li>
                <li>
                  <p>
                    Created AI-generated videos using Synthesia.io, enhancing
                    the content presentation.
                  </p>
                </li>
                <li>
                  <p>
                    Designed custom icons and graphics tailored to the website’s
                    theme and purpose.
                  </p>
                </li>
                <li>
                  <p>
                    Wrote a significant portion of the website’s content,
                    including text, descriptions, and service details.
                  </p>
                </li>
                <li>
                  <p>
                    Successfully deployed the website onto Ionos, ensuring
                    proper functionality and performance.
                  </p>
                </li>
              </ul>
              <div className="tech-container">
                {solutionerTechnologies.map((tech, index) => {
                  return (
                    <small
                      className={`tech-tag ${tech.type}`}
                      key={tech.name + index}
                    >
                      {tech.name}
                    </small>
                  );
                })}
              </div>
              <div className="button-container">
                <a href="https://Thesolutioners.ca" target="_blank">
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>
                <div className="social-media-icons-container">
                  <IconLink
                    imageUrl="/static/icons/social-media-icons/github-icon.svg"
                    url="https://github.com/danisharyanfahim/the-solutioners"
                  />
                </div>
              </div>
              <div className="the-solutioners-icon background"></div>
            </div>
            <div className="work-page" id="sds-property-group">
              <h3 id="construction-warning">
                <PiWarningDiamondFill className="warning-icon" />
                Site is still under construction
              </h3>
              <div className="logo" id="sds-property-group-logo" />
              <p className="date">Dec 2024 - Present</p>
              <h5>Lead Developer</h5>
              <h3>SDS Property Group</h3>
              <h5>
                A sleek, user-friendly real estate website for SDS Property
                Groups, specializing in property sales in India. The site
                showcases listings, detailed property information, and an easy
                navigation experience, catering to both local and international
                clients looking to invest in Indian real estate.
              </h5>
              <ul className="Tasks-completed">
                <li>
                  <p>
                    Served as the sole developer for the website, handling all
                    aspects of the site’s creation and deployment.
                  </p>
                </li>
                <li>
                  <p>
                    Registered the domain through Porkbun and deployed the site
                    to AWS Amplify, ensuring reliable hosting and scalability.
                  </p>
                </li>
                <li>
                  <p>
                    Currently designing the site's layout to be fully
                    responsive, with a focus on creating a visually appealing
                    and user-friendly theme.
                  </p>
                </li>
                <li>
                  <p>
                    Provided essential assets and resources, including
                    high-quality images, as well as svg icons designed on Adobe
                    Illustrator, to enhance the site’s visual design.
                  </p>
                </li>
                <li>
                  <p>
                    Designed the website layout using Figma, transforming the
                    design into a fully functional SCSS implementation for
                    styling.
                  </p>
                </li>
                <li>
                  <p>
                    Tracked project progression and managed tasks using Jira,
                    implementing a Scrumban methodology to ensure smooth
                    workflow and crystal-clear task management.
                  </p>
                </li>
                <li>
                  <p>
                    Utilized Sanity.io as a headless CMS to model and manage
                    real estate property listings, which are displayed
                    dynamically on the site.
                  </p>
                </li>
              </ul>
              <ul className="Tech used"></ul>
              <div className="tech-container">
                {sdsTechnologies.map((tech, index) => {
                  return (
                    <small
                      className={`tech-tag ${tech.type}`}
                      key={tech.name + index}
                    >
                      {tech.name}
                    </small>
                  );
                })}
              </div>
              <div className="button-container">
                <a href="https://sdspropertygroup.com" target="_blank">
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>

                <div className="social-media-icons-container">
                  <IconLink
                    imageUrl="/static/icons/social-media-icons/github-icon.svg"
                    url="https://github.com/danisharyanfahim/sds-property-group"
                  />
                </div>
              </div>
              <div className="sds-property-group-icon background"></div>
            </div>
          </Window>
        </SplitCard>
      </div>
    </section>
  );
};

export default Work;
