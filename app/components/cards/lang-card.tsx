"use client";
import { LangProps } from "@/app/interfaces/landing";
import { urlFor } from "@/app/lib/client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";

const LangCard = ({
  icon,
  title,
  usedFor,
  description,
  understanding,
  yearCreated,
}: LangProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`grid-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => handleFlip()}
    >
      <div className="spacer">
        <div className="front">
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
            <p className="yearCreated">{yearCreated}</p>
            <ul className="features"></ul>
          </div>
        </div>
        <div className="back">
          <div className="spacer">
            <div className="text-container">
              <p>{description}</p>
              <ul className="features">
                {usedFor.map((use: string, index: number) => {
                  return (
                    <li key={index}>
                      <p className="feature" id={use}>
                        {use}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className="background-image"
            style={{
              height: "100%",
              aspectRatio: "1 / 1",
              position: "absolute",
              top: "33%",
              left: "33%",
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
                "grayscale(85%) opacity(10%) brightness(95%) drop-shadow(0px 0px 5px rgba(125 125 140 / 0.6))",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LangCard;
