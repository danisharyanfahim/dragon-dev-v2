import SplitCard from "@/app/components/cards/split-card";
import React from "react";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="section-spacer">
        <SplitCard id="work-section">
          <section className="text-section">
            <h1>Work</h1>
            <h2 className="no-bold">
              Take a look at my past and ongoing projects to see how I approach
              design, functionality, and user experience. Each project is a
              testament to my commitment to creating high-quality, user-friendly
              websites that not only look great but also perform flawlessly.
            </h2>
          </section>
          <div className="tab-menu">
            {/* Will use ol/ul and li instead of divs, one for sdsproperty groups as well, also can use company logo as background image as well, not just for the media and icon */}
            {/* <div className="slide" id="the-solutioners">
            <h5>Role</h5>
            <h3>The Solutioners</h3>
            <h4>Site Description</h4>
            <p className="date">2024</p>
            <img alt="image of  to the right" />
            <ul className="Tasks-completed"></ul>
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
          <div className="slide" id="sds-property-group">
            <h5>Role</h5>
            <h3>SDS Property Group</h3>
            <h4>Site Description</h4>
            <p className="date">2024</p>
            <img alt="image of  to the right" />
            <ul className="Tasks-completed"></ul>
            <ul className="Tech used"></ul>
            <div className="button-container">
              <a href="https://sdspropertygroup.com">
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
          </div> */}
          </div>
        </SplitCard>
      </div>
    </section>
  );
};

export default Work;
