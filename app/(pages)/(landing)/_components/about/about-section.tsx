import { getStaticFile } from "@/app/api/get-static-file";
import SplitCard from "@/app/components/cards/split-card";
import Slider from "@/app/components/slider";
import { SlideData } from "@/app/interfaces/landing";
import { formatStringToId } from "@/app/utils/utility-functions";
import React from "react";

const AboutSection = async ({
  title,
  description,
  dataURL,
  direction,
  logos,
  mainLogo,
}: {
  title: string;
  description: string;
  dataURL: string;
  direction: "left-right" | "right-left";
  logos: React.ReactNode[];
  mainLogo: React.ReactNode;
}) => {
  const data: SlideData[] = await getStaticFile(dataURL);
  return (
    <SplitCard
      id={`${formatStringToId(title)}-section`}
      reverse={direction === "left-right"}
    >
      <section className="text-container">
        <h2 className="title">
          {title}
          <span className="icon">{mainLogo}</span>
        </h2>
        <h4 className="no-bold">{description}</h4>
      </section>
      <Slider
        infinite={true}
        delay={2500}
        showPlayButton={true}
        showPositionIndicator={true}
      >
        {data.map((data, index) => {
          const { title, description, points } = data;
          return (
            <div
              className="section-card-container"
              key={formatStringToId(title)}
            >
              <div className="section-card about" id={formatStringToId(title)}>
                <h3 className="icon">{logos[index]}</h3>
                <h3 className="title">{title}</h3>
                <h5 className="description no-bold">{description}</h5>
                <ul className="points">
                  {points.map((point, index) => {
                    return (
                      <li key={index}>
                        <p>{point}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="background">{logos[index]}</div>
            </div>
          );
        })}
      </Slider>
    </SplitCard>
  );
};

export default AboutSection;
