"use client";
import { TechCardProps } from "@/app/interfaces/landing";
import { urlFor } from "@/app/lib/client";
import { findClass } from "@/app/utils/utility-functions";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";

const TechCard = ({
  category,
  icon,
  title,
  features,
  description,
  understanding,
  url,
}: TechCardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [clicked, setClicked] = useState<string>("");
  const handleFlip = (e) => {
    if (findClass(e.target, "link-button-button") === null) {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`grid-card ${isFlipped ? "flipped" : ""}`}
      onClick={(e) => handleFlip(e)}
    >
      <div className="spacer">
        <div className="front">
          <pre>{clicked}</pre>

          <div className="spacer">
            <div className={`badge-container ${understanding}`}>
              {understanding === "solid" ? <IoStar /> : <PiStudentFill />}
            </div>
            <figure className="image-container">
              <img
                src={urlFor(icon).url()}
                alt={`${title}-icon`}
                className="icon"
                loading="lazy"
              />
            </figure>
            <h5>{title}</h5>
            <p className="category">{category}</p>
            <ul className="features"></ul>
          </div>
        </div>
        <div className="back">
          <div className="spacer">
            <div className="text-container">
              <p>{description}</p>
              <ul className="features">
                {features.map((feature: string, index: number) => {
                  return (
                    <li key={index}>
                      <p className="feature" id={feature}>
                        {feature}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="link-button-container">
              <a href={url} className="link-button-url" target="_blank">
                <button className="link-button-button">
                  <p>Visit Site</p>
                </button>
              </a>
            </div>
          </div>
          <div
            className="background-image"
            style={{
              height: "120%",
              aspectRatio: "1 / 1",
              position: "absolute",
              top: "10%",
              left: "25%",
              maskImage: "linear-gradient(135deg, transparent, black)",
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat",
              WebkitMaskImage: `url(${urlFor(icon).url()})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              background: `url(${urlFor(icon).url()})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: -1,
              // backgroundBlendMode: "color",
              filter:
                "grayscale(90%) opacity(10%) brightness(95%) drop-shadow(0px 0px 5px rgba(120 120 120 / 0.6))",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
