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
}: {
  title: string;
  description: string;
  dataURL: string;
  direction: "left-right" | "right-left";
}) => {
  const data: SlideData[] = await getStaticFile(dataURL);
  const textSection = (
    <section className="text-container">
      <h2>{title}</h2>
      <h3 className="no-bold">{description}</h3>
    </section>
  );
  const slides = (
    <Slider
      infinite={true}
      direction={direction === "left-right" ? "forward" : "reverse"}
      delay={2500}
      showPlayButton={false}
      showPositionIndicator={false}
    >
      {data.map((data) => {
        const { title, description, points } = data;
        return (
          <div
            className="section-card about"
            id={formatStringToId(title)}
            key={formatStringToId(title)}
          >
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
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
        );
      })}
    </Slider>
  );
  return (
    <SplitCard id={`${formatStringToId(title)}-section`}>
      {direction === "left-right"
        ? [textSection, slides]
        : [slides, textSection]}
    </SplitCard>
  );
};

export default AboutSection;
