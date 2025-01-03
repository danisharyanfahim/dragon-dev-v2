import SplitCard from "@/app/components/cards/split-card";
import IconLink from "@/app/components/icon-link";
import Window from "@/app/components/window";
import React from "react";
import { MdOutlineWork } from "react-icons/md";

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
                title: "The Solutioners",
                icon: <div className="the-solutioners-icon"></div>,
              },
              { title: "SDS Property Group" },
            ]}
          >
            <div className="work-page" id="the-solutioners">
              <div className="logo" />
              <p className="date">May 2024 - Present</p>
              <h5>Lead Developer</h5>
              <h3>The Solutioners</h3>
              <h5>
                A professional website for The Solutioners, a Canadian
                cybersecurity and IT solutions company. They offer a wide range
                of services, including SOC services, risk assessment,
                penetration testing and many other and IT security solutions.
              </h5>
              <ul className="Tasks-completed">
                <ul>
                  <li>
                    <p>
                      Served as the solo developer for the company website,
                      handling all aspects of the development process.
                    </p>
                  </li>
                  <li>
                    <p>
                      Designed the overall structure and layout of the website,
                      ensuring a user-friendly, visually appealing experience,
                      and implemented responsive design for seamless viewing on
                      all devices.
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
                      Provided all necessary assets, including images, videos,
                      and other media for the site.
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
                      Designed custom icons and graphics tailored to the
                      website’s theme and purpose.
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
              </ul>
              <ul className="Tech used">
                HTML, CSS, JS, TS, React, NextJS, Syntehsia IO, Ionos, Plesk,
                Adobe Photoshop, VSCode
              </ul>
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
              <img alt="image of  to the right" />
              <ul className="Tasks-completed"></ul>
              <ul className="Tech used"></ul>
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
            </div>
          </Window>
        </SplitCard>
      </div>
    </section>
  );
};

export default Work;
