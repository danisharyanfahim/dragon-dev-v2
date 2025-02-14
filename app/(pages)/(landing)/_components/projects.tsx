import SplitCard from "@/app/components/cards/split-card";
import IconLink from "@/app/components/ui/icon-link";
import SlideShow from "@/app/components/ui/slide-show";
import React from "react";
import { BiSolidMovie } from "react-icons/bi";
import { FaCloudSunRain } from "react-icons/fa6";
import { GiPencilRuler } from "react-icons/gi";
import { PiBooksFill } from "react-icons/pi";

const bookTech = [
  { name: "HTML", type: "language" },
  { name: "CSS", type: "language" },
  { name: "JS", type: "language" },
  { name: "FilePond", type: "technology" },
  { name: "Git/Github", type: "technology" },
  { name: "EJS", type: "technology" },
  { name: "RestAPI", type: "technology" },
  { name: "Express", type: "technology" },
  { name: "MongoDB", type: "technology" },
  { name: "Mongoose", type: "technology" },
  { name: "VSCode", type: "technology" },
  { name: "Heroku", type: "technology" },
];

const movieTech = [
  { name: "HTML", type: "language" },
  { name: "CSS", type: "language" },
  { name: "JS", type: "language" },
  { name: "TS", type: "language" },
  { name: "React", type: "technology" },
  { name: "NextJS", type: "technology" },
  { name: "Sanity.io", type: "technology" },
  { name: "VSCode", type: "technology" },
  { name: "Vercel", type: "technology" },
];

const weatherTech = [
  { name: "HTML", type: "language" },
  { name: "CSS", type: "language" },
  { name: "JS", type: "language" },
  { name: "TS", type: "language" },
  { name: "RestAPI", type: "technology" },
  { name: "React", type: "technology" },
  { name: "NextJS", type: "technology" },
  { name: "ExpressJS", type: "technology" },
  { name: "NodeJS", type: "technology" },
  { name: "SASS", type: "technology" },
  { name: "VSCode", type: "technology" },
  { name: "AWS", type: "technology" },
];

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
          <SlideShow infinite={true} delay={3000} showPositionButtons={true}>
            <div className="project-slide">
              <p className="date">2025</p>
              <h3>
                Weather Dashboard
                <span className="icon">
                  <FaCloudSunRain />
                </span>
              </h3>
              <h5>
                A weather dashboard that shows you the current forecast for any
                city you wish to look up, as well as the hourly and weekly
                forecasts.
              </h5>
              <ul>
                <li>
                  <p>
                    Utilizes multiple APIs to gather and display detailed
                    weather data and an image background for the selected city,
                    tailored to the current day and time
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
                    Displays data using intuitive diagrams, icons, and graphs
                  </p>
                </li>
              </ul>
              <div className="weather-container">
                <div className="tech-container">
                  {weatherTech.map((tech, index) => {
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
              </div>
              <div className="button-container">
                <a
                  href="https://master.dj1lv8genpute.amplifyapp.com/"
                  target="_blank"
                >
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>
                <div className="social-media-icons-container">
                  <IconLink
                    url="https://github.com/danisharyanfahim/weather-app-v2"
                    imageUrl="/static/icons/social-media-icons/github-icon.svg"
                  />
                </div>
              </div>
              <div className="background">
                <FaCloudSunRain />
              </div>
            </div>
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
                before implementing the feature into my blog.
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
              <div className="weather-container">
                <div className="tech-container">
                  {movieTech.map((tech, index) => {
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
              </div>
              <div className="button-container">
                <a
                  href="https://infinite-scroll-movies.vercel.app"
                  target="_blank"
                >
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>
                <div className="social-media-icons-container">
                  <IconLink
                    url="https://github.com/danisharyanfahim/infinite-scroll"
                    imageUrl="/static/icons/social-media-icons/github-icon.svg"
                  />
                </div>
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
                This book site serves as an online library, allowing users to
                search through a catalog of books, while also allowing users to
                upload and store their own books.
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
              <div className="tech-container">
                {bookTech.map((tech, index) => {
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
                <a
                  href="https://digital-library-dragondev-feecd0c512b6.herokuapp.com/"
                  target="_blank"
                >
                  <button className="link-button">
                    <p>Visit Site</p>
                  </button>
                </a>
                <div className="social-media-icons-container">
                  <IconLink
                    url="https://github.com/danisharyanfahim/digital-library"
                    imageUrl="/static/icons/social-media-icons/github-icon.svg"
                  />
                </div>
              </div>
              <div className="background">
                <PiBooksFill />
              </div>
            </div>
          </SlideShow>
        </SplitCard>
      </div>
    </section>
  );
};

export default Projects;
