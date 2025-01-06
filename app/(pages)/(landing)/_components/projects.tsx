import SplitCard from "@/app/components/cards/split-card";
import IconLink from "@/app/components/icon-link";
import SlideShow from "@/app/components/slide-show";
import React from "react";
import { BiSolidMovie } from "react-icons/bi";
import { FaCloudSunRain } from "react-icons/fa6";
import { GiPencilRuler } from "react-icons/gi";
import { PiBooksFill } from "react-icons/pi";

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
          <SlideShow infinite={true} delay={3000}>
            <div className="project-slide">
              <p className="date">2024</p>
              <h3>
                Movie Site
                <span className="icon">
                  <BiSolidMovie />
                </span>
              </h3>
              <h5>
                A dynamic movie website I created to test out infinite-scrolling
                before implementing teh feature into my blog
              </h5>
              <ul>
                <li>
                  <p>
                    Users can search for films based on multiple criteria,
                    including the year of release, title, and genre, making it
                    easy to find specific movies of interest
                  </p>
                </li>
                <li>
                  <p>
                    The site features lazy loading to improve performance by
                    loading movie data only when needed
                  </p>
                </li>
                <li>
                  <p>
                    Skeleton loaders to display loading placeholders while
                    content is being fetched
                  </p>
                </li>
                <li>
                  <p>
                    Infinite scrolling for a seamless browsing experience
                    without the need to navigate between pages
                  </p>
                </li>
              </ul>
              <ul className="Tech used"></ul>
              <div className="button-container">
                <a
                  href="https://infinite-scroll-movies.vercel.app"
                  target="_blank"
                >
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>
                <IconLink
                  url="https://github.com/danisharyanfahim/infinite-scroll"
                  imageUrl="/static/icons/social-media-icons/github-icon.svg"
                />
              </div>
              <div className="background">
                <BiSolidMovie />
              </div>
            </div>
            <div className="project-slide">
              <p className="date">2023</p>
              <h3>
                Digital Library
                <span className="icon">
                  <PiBooksFill />
                </span>
              </h3>
              <h5>
                This book site serves as an online library, allowing them to
                search through a catalog of books, while also allowing users to
                upload and store their own books
              </h5>
              <ul>
                <li>
                  <p>
                    Users can easily search for books based on various
                    categories, such as genre, author, or title, and explore the
                    library to find new reading material
                  </p>
                </li>
                <li>
                  <p>
                    Allows for author creation, authors can have multiple books
                    associated with them
                  </p>
                </li>
                <li>
                  <p>
                    Uses FilePond for uploading cover images for book covers
                  </p>
                </li>
              </ul>
              <ul className="Tech used"></ul>
              <div className="button-container">
                <a
                  href="https://digital-library-dragondev-feecd0c512b6.herokuapp.com/"
                  target="_blank"
                >
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>
                <IconLink
                  url="https://github.com/danisharyanfahim/digital-library"
                  imageUrl="/static/icons/social-media-icons/github-icon.svg"
                />
              </div>
              <div className="background">
                <PiBooksFill />
              </div>
            </div>
            <div className="project-slide">
              <p className="date">2025</p>
              <h3>
                Weather API Site
                <span className="icon">
                  <FaCloudSunRain />
                </span>
              </h3>
              <h5>
                A Basic weather API that tells you today's forecast for any city
                you decide to look up
              </h5>
              <ul>
                <li>
                  <p>
                    Gives all of the weather information for that day and time
                  </p>
                </li>
                <li>
                  <p>
                    Dynamic background based on both the weather as well as time
                    of day for that particular city
                  </p>
                </li>
                <li>
                  <p>
                    Properly formatted time and date, as well as displaying the
                    angle of the wing through an arrow
                  </p>
                </li>
              </ul>
              <ul className="Tech used"></ul>
              <div className="button-container">
                <a
                  href="https://weather-app-dragondev.vercel.app/"
                  target="_blank"
                >
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>
                <IconLink
                  url="https://github.com/danisharyanfahim/weather-app"
                  imageUrl="/static/icons/social-media-icons/github-icon.svg"
                />
              </div>
              <div className="background">
                <FaCloudSunRain />
              </div>
            </div>
          </SlideShow>
        </SplitCard>
      </div>
    </section>
  );
};

export default Projects;
