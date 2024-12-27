import SplitCard from "@/app/components/cards/split-card";
import React from "react";
import AboutSection from "./about-section";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-spacer">
        <SplitCard id="about-header">
          <section className="text-section">
            <h1 className="title">Why Choose Me?</h1>
            <h2 className="no-bold">
              My philosophy is to build websites and web applications that not
              only captivate users with their design but also deliver fast,
              efficient, and optimized performance for the best user experience.
            </h2>
            <h4 className="no-bold">
              I'll work closely with you to ensure every detail is tailored to
              your vision, helping you build the website or web app of your
              dreams—exactly how you envision it.
            </h4>
          </section>
          <figure className="image-container"></figure>
        </SplitCard>
        <AboutSection
          title="Design"
          description="Design is the cornerstone of every project I undertake. I ensure
              that both the functionality and aesthetic aspects of the design
              come together seamlessly to enhance the user experience."
          dataURL="/app/data/design-content.json"
          direction="right-left"
        />
        <AboutSection
          title="Development"
          description="Efficient development is key to building high-performance websites
              and applications. I focus on delivering cutting-edge
              functionality, performance, and maintainable code to ensure the
              success of your project."
          dataURL="/app/data/development-content.json"
          direction="left-right"
        />
        <AboutSection
          title="Soft Skills"
          description="In addition to my technical expertise, I focus on cultivating
              essential soft skills that ensure smooth collaboration and
              effective project execution"
          dataURL="/app/data/soft-skills-content.json"
          direction="right-left"
        />
      </div>
    </section>
  );
};

export default About;
