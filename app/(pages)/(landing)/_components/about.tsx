import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-spacer">
        <h2>Why Choose Me?</h2>
        <div className="section-description">
          My philosophy is to build websites and web applications that not only
          captivate users with their design but also deliver fast, efficient,
          and optimized performance for the best user experience. Here's why we
          should collaborate.
        </div>
        <div className="design-section">
          <section>
            <h3>Design</h3>
            <h4>
              Design is the cornerstone of every project I undertake. I ensure
              that both the functionality and aesthetic aspects of the design
              come together seamlessly to enhance the user experience.
            </h4>

            <ul>
              <li className="section-card" id="functional-design">
                <h5>Functional Design</h5>
                <p>
                  I create intuitive, usable designs that ensure easy navigation
                  and clear calls-to-action, helping you achieve your business
                  goals.
                </p>
              </li>

              <li className="section-card" id="content-based-design">
                <h5>Content-Based Design</h5>
                <p>
                  I align the design with your content, ensuring that your
                  message is supported by the visual structure, making
                  information easy to digest.
                </p>
              </li>

              <li className="section-card" id="responsiveness">
                <h5>Responsiveness</h5>
                <p>Every site I create is mobile-friendly, using:</p>
                <ul>
                  <li>Media and container queries</li>
                  <li>Min and max values for scalable elements</li>
                  <li>Clamping to ensure text readability</li>
                  <li>Flexbox and Grid for fluid layouts</li>
                  <li>Absolute and relative values for adaptable designs</li>
                </ul>
              </li>

              <li className="section-card" id="ui-design">
                <h5>UI Design</h5>
                <p>
                  I focus on delivering a seamless user experience (UX) by
                  ensuring clean navigation, quick load times, and overall
                  usability.
                </p>
              </li>

              <li className="section-card" id="aesthetic-design">
                <h5>Aesthetic Design</h5>
                <p>Your site will have a striking visual design with:</p>
                <ul>
                  <li>Carefully chosen color schemes and gradients</li>
                  <li>
                    Smooth animations and transitions for engaging interactivity
                  </li>
                  <li>
                    Unique, custom-designed icons and images to elevate your
                    branding
                  </li>
                </ul>
              </li>

              <li className="section-card" id="custom-made-graphics">
                <h5>Custom-Made Graphics</h5>
                <p>
                  I create tailored graphics, including icons, images, and
                  illustrations, using tools like:
                </p>
                <ul>
                  <li>
                    Illustrator, Photoshop, and Figma for creating high-quality
                    custom SVGs and PNGs
                  </li>
                  <li>
                    AI-generated images for creative and dynamic visual elements
                  </li>
                  <li>
                    AI-generated resources like presentations to speed up design
                    processes
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
        <div className="development-section">
          <section>
            <h3>Development</h3>
            <h4>
              Efficient development is key to building high-performance websites
              and applications. I focus on delivering cutting-edge
              functionality, performance, and maintainable code to ensure the
              success of your project.
            </h4>

            <ul>
              <li className="section-card" id="functionality">
                <h5>Functionality</h5>
                <p>
                  I integrate modern features to enhance the user experience:
                </p>
                <ul>
                  <li>Lazy loading for fast page loading</li>
                  <li>Skeleton screens for smooth loading transitions</li>
                  <li>
                    Custom error and loading animations to improve site
                    interactivity
                  </li>
                </ul>
              </li>

              <li className="section-card" id="my-own-ux-library">
                <h5>My Own UX Library</h5>
                <p>
                  I’ve developed a personalized UX library filled with pre-built
                  UI elements, ensuring consistency in design and a seamless
                  user experience across your site:
                </p>
                <ul>
                  <li>Buttons</li>
                  <li>Forms</li>
                  <li>Modals</li>
                  <li>Accordions</li>
                  <li>Drop-downs</li>
                  <li>Pagination</li>
                  <li>Slidershows and Carousels</li>
                  <li>Tickers</li>
                  <li>
                    And many more UI elements to keep your interface functional
                    and visually appealing
                  </li>
                </ul>
              </li>

              <li className="section-card" id="proficient-in-modern-tech">
                <h5>Proficient in Modern Tech</h5>
                <p>
                  I use the latest technologies to create high-performance,
                  scalable web applications:
                </p>
                <ul>
                  <li>React 19 for dynamic and efficient UIs</li>
                  <li>Typescript for clean and maintainable code</li>
                  <li>NextJS 15+ for server-rendered React applications</li>
                  <li>CSS + SCSS for flexible and efficient styling</li>
                  <li>JavaScript + ES6 for modular, modern code</li>
                </ul>
              </li>

              <li className="section-card" id="seo-optimization">
                <h5>SEO Optimization</h5>
                <p>
                  I ensure your website is optimized for search engines and
                  easily discoverable:
                </p>
                <ul>
                  <li>robots.txt to guide search engine bots</li>
                  <li>Accurate alt tags for all images</li>
                  <li>
                    Semantic HTML tags to improve site structure and readability
                  </li>
                  <li>Clean URLs and file structure for efficient indexing</li>
                  <li>Meta tags and titles to enhance click-through rates</li>
                </ul>
              </li>

              <li className="section-card" id="performance-focused-development">
                <h5>Performance-Focused Development</h5>
                <p>
                  I focus on optimizing both user experience and development
                  efficiency to ensure your site performs seamlessly and the
                  development process is smooth and transparent:
                </p>
                <ul>
                  <li>
                    <strong>For Users:</strong>
                    <ul>
                      <li>
                        Lightning-fast load times through media optimization,
                        lazy loading, and performance testing
                      </li>
                      <li>
                        Performance/network testing to ensure the site works
                        flawlessly on various networks and devices, optimizing
                        the browsing experience for all users
                      </li>
                      <li>Server-side rendering (SSR) for fast load times</li>
                    </ul>
                  </li>

                  <li>
                    <strong>For Developers:</strong>
                    <ul>
                      <li>
                        Clean, organized code that is easy to understand,
                        maintain, and reuse, ensuring long-term stability and
                        scalability
                      </li>
                      <li>
                        Detailed comments and explanations to make the code easy
                        to follow, improving collaboration and ease of
                        maintenance
                      </li>
                      <li>
                        Logging, Project Descriptions, and README Files to
                        ensure full transparency in the development process,
                        track performance in production, and provide clear
                        documentation of project structure, dependencies, and
                        setup instructions
                      </li>
                      <li>
                        Project outlines to establish clear goals, timelines,
                        and milestones, keeping the project on track from start
                        to finish
                      </li>
                      <li>
                        Code snippets and Emmet to reduce development time and
                        minimize the chance of typos and syntax errors by
                        quickly generating repetitive or boilerplate code
                      </li>
                      <li>
                        AI and Debugging Tools to streamline development by
                        automating repetitive tasks, generating placeholder
                        assets, and helping identify and fix issues quickly,
                        ensuring smooth development and high-quality, bug-free
                        code
                      </li>
                      <li>
                        Unit testing to ensure code reliability and minimize
                        bugs
                      </li>
                      <li>
                        AGILE, Waterfall, and DevOps CI/CD methods to
                        efficiently plan and execute the development process,
                        ensuring that the final product meets your expectations
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
        <div className="soft-skills-section">
          <h3>Soft Skills</h3>
          <h4>
            In addition to my technical expertise, I focus on cultivating
            essential soft skills that ensure smooth collaboration and effective
            project execution
          </h4>
          <ul>
            <li>
              <h5>Efficiency & Organization</h5>
              <p>
                Always striving to work in the most organized and efficient
                manner to ensure smooth project delivery.
              </p>
            </li>
            <li>
              <h5>Quick Learner</h5>
              <p>
                Continuously exploring new libraries and tools to improve my
                skills and stay up to date with industry trends. As you look
                through my projects, you’ll see how I experiment with new
                technologies and evolve to write faster, more efficient, and
                readable code.
              </p>
            </li>
            <li>
              <h5>Improvement-Oriented</h5>
              <p>
                Constantly working to refine areas where I excel and improve in
                areas where I’m less experienced, ensuring I’m always advancing
                as a developer.
              </p>
            </li>
            <li>
              <h5>Great Communication</h5>
              <p>
                Strong communication skills for collaborating with clients and
                team members, ensuring that all requirements and expectations
                are clearly understood.
              </p>
            </li>
            <li>
              <h5>Leadership & Planning</h5>
              <p>
                Capable of organizing and leading projects, with an eye for
                planning and goal-setting to keep everything on track and ensure
                successful outcomes.
              </p>
            </li>
            <li>
              <h5>Easy-going & Team Player</h5>
              <p>
                I value creating a positive work environment and enjoy working
                with others to achieve shared goals.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
