import { getStaticFile } from "@/app/api/get-static-file";
import TechCard from "@/app/components/cards/tech-card";
import {
  TechCardProps,
  TechProps,
  TransformedTechProps,
} from "@/app/interfaces/landing";
import { createDoc } from "@/app/lib/client";
import { getTech } from "@/app/utils/server-actions";
import { transformTechData } from "@/app/utils/utility-functions";
import React from "react";
import { IoStar } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { TbH6 } from "react-icons/tb";

const Technologies = async () => {
  const techDataSolid: TechCardProps[] = await getTech("solid");
  const techDataFamiliar: TechCardProps[] = await getTech("familiar");

  return (
    <section className="technologies" id="technologies">
      <div className="section-spacer">
        <h2>Technologies</h2>
        <h3 className="short-description">
          These are the various technologies I've worked with and use in my web
          development projects. Below, you'll find a breakdown of the tools and
          tech I am proficient with, as well as those I am familiar with.
        </h3>
        <div className="ticker" id="programming-languages">
          Ticker
        </div>
        <div className="ticker" id="web-dev-technology">
          Ticker
        </div>
        <div className="ticker" id="other-software">
          Ticker
        </div>
        <div className="window">
          <section className="page" id="programming-languages">
            <section className="page-section" id="programming-languages">
              <h4>Programming Languages I am skilled with</h4>
              <h5>
                These are the programming languages I am proficient in, each one
                used in various capacities to build reliable, high-performance
                websites and applications
              </h5>
              <ul className="accordion" id="proficient-languages">
                <li className="programming-language" id="html5">
                  <h6>HTML5</h6>
                  <p>
                    The backbone of the web, HTML5 is the foundation of all my
                    web development projects, ensuring structured, accessible,
                    and semantic content.
                  </p>
                </li>
                <li className="programming-language" id="css-scss">
                  <h6>CSS & SCSS</h6>
                  <p>
                    CSS is crucial for styling and laying out web pages. I use
                    modern techniques like Flexbox, Grid, and SCSS (Sass) to
                    create responsive, maintainable, and visually appealing
                    designs with a focus on modularity and efficiency.
                  </p>
                </li>
                <li className="programming-language" id="javascript-es6">
                  <h6>JavaScript & ES6</h6>
                  <p>
                    JavaScript is essential for building dynamic web
                    applications. I use ES6+ features like arrow functions,
                    promises, async/await, and destructuring for cleaner and
                    more efficient code.
                  </p>
                </li>
                <li className="programming-language" id="typescript">
                  <h6>TypeScript</h6>
                  <p>
                    TypeScript is my go-to for building scalable, maintainable
                    applications. It adds static typing to JavaScript, making
                    code more reliable and reducing errors.
                  </p>
                </li>
                <li className="programming-language" id="java">
                  <h6>Java</h6>
                  <p>
                    Java is a powerful, object-oriented language that I’ve used
                    to build server-side applications, backend services, and
                    larger-scale systems outside of web development.
                  </p>
                </li>
                <li className="programming-language" id="python">
                  <h6>Python</h6>
                  <p>
                    Python is used for web development with frameworks like
                    Django and Flask, as well as for scripting and automation.
                    I’ve also utilized it in data analysis and machine learning
                    projects.
                  </p>
                </li>
              </ul>
            </section>
            <section className="page-section" id="programming-languages">
              <h4>Familiar Programming Languages</h4>
              <h5>
                These are languages I have used for non-web development
                applications. While I am familiar with them, it would take me a
                small amount of time to re-familiarize myself
              </h5>
              <ul className="accordion" id="familiar-languages">
                <li className="programming-language" id="c-cpp">
                  <h6>C/C++</h6>
                  <p>
                    C and C++ are low-level languages that I’ve used for system
                    programming, performance-critical applications, and embedded
                    systems, focusing on hardware interactions.
                  </p>
                </li>
                <li className="programming-language" id="lua">
                  <h6>Lua</h6>
                  <p>
                    Lua is a lightweight scripting language I’ve used in game
                    development and as an embedded scripting engine for various
                    software applications.
                  </p>
                </li>
                <li className="programming-language" id="sql">
                  <h6>SQL</h6>
                  <p>
                    SQL is my tool of choice for working with databases, and
                    I’ve used it extensively for managing and querying
                    relational databases in various applications beyond web
                    development.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </div>
        <section className="page" id="tech">
          <div className="grid">
            <div className="title-card" id="tech-solid">
              <div className="spacer">
                <div className="badge-container">
                  <IoStar />
                </div>
                <h2>Technology I Am Proficient With</h2>
                <h5 className="short-description no-bold">
                  These cards highlights the technologies I have solid
                  understanding of and use confidently in my daily development
                  work
                </h5>
              </div>
            </div>
            {techDataSolid.map((tech: TechCardProps) => {
              const { id } = tech;
              return <TechCard key={id} {...tech} />;
            })}
            <div className="title-card" id="tech-familiar">
              <div className="spacer">
                <div className="badge-container">
                  <PiStudentFill />
                </div>
                <h2>Technology I Am Familiar With</h2>
                <h5 className="short-description no-bold">
                  These cards showcase the technologies I have either used
                  before or am currently exploring and working to improve my
                  understanding of
                </h5>
              </div>
            </div>
            {techDataFamiliar.map((tech: TechCardProps) => {
              const { id } = tech;
              return <TechCard key={id} {...tech} />;
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Technologies;

/* Window with the following tabs for now:
-Programming Languages 
-Software, Tools and Libraries (Proefficient with)
-Software, Tools and Libraries (familiar with)
-Other software (Photoshop, Illustrator) and other design software (Later)

Use sanityIO for the tech, because there is a lot, so it is better to just enter it in as information and then generate the data as a card
*/
