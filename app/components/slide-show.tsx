"use client";
import React, { useEffect, useMemo, useState } from "react";
import Slide from "./cards/slide";

/* 
// -infinite/wrapping
// -left/right buttons
// -autoplay + button
// -reverse
// -position indicators
// -position buttons
-smooth sliding transition effect 
-appearing and disappearing slide animations such as fading
-mouse over pause/autoPause
*/

const SlideShow = ({
  children,
  infinite = true,
  autoPlay = true,
  delay = 1000,
  direction = "forward",
  initialSlide,
  showPlayButton = true,
  showPositionButtons = false,
  showControlButtons = true,
  showPositionIndicator = true,
}: {
  children: React.ReactNode[];
  infinite: boolean;
  autoPlay?: boolean;
  delay?: number;
  direction?: "forward" | "reverse";
  initialSlide?: number;
  showPlayButton?: boolean;
  showControlButtons?: boolean;
  showPositionIndicator?: boolean;
  showPositionButtons?: boolean;
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(initialSlide ?? 0);
  const [isPaused, setIsPaused] = useState<boolean | undefined>(
    autoPlay && delay !== undefined ? false : undefined
  );

  const slides = useMemo(() => {
    return children.map((child, index) => {
      return (
        <li className="slide-container" key={index}>
          <Slide>{child}</Slide>
        </li>
      );
    });
  }, [children]);

  const clamp = (nextSlide: number): number => {
    if (infinite) {
      if (nextSlide < 0) {
        nextSlide = slides.length - 1;
      } else if (nextSlide > slides.length - 1) {
        nextSlide = 0;
      }
    } else {
      if (nextSlide < 0) {
        nextSlide = 0;
      } else if (nextSlide > slides.length - 1) {
        nextSlide = slides.length - 1;
      }
    }
    return nextSlide;
  };

  const toggleSlide = (nextSlide: number) => {
    nextSlide = clamp(nextSlide);
    setCurrentSlide(nextSlide);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay && !isPaused) {
        if (direction === "forward") {
          toggleSlide(currentSlide + 1);
        } else {
          toggleSlide(currentSlide - 1);
        }
      }
    }, delay);
    return () => clearInterval(interval);
  }, [currentSlide, autoPlay, isPaused, delay]);

  return (
    <section className="slide-show">
      <div className="controls-container">
        {showControlButtons && (
          <div className="control-buttons">
            <button
              className="prev-button"
              onClick={() => toggleSlide(currentSlide - 1)}
            >
              ❮
            </button>
            <button
              className="next-button"
              onClick={() => toggleSlide(currentSlide + 1)}
            >
              ❯
            </button>
          </div>
        )}
        {showPositionIndicator && (
          <div className="position-indicator">
            {currentSlide + 1}/{slides.length}
          </div>
        )}
        {showPositionButtons && (
          <ul className="position-buttons">
            {slides.map((_, index) => (
              <li
                key={index}
                onClick={() => toggleSlide(index)}
                style={{
                  display: "inline-block",
                  backgroundColor:
                    currentSlide === index
                      ? "white"
                      : "rgba(255, 255, 255, 0.5)",
                  borderRadius: "50%",
                  height: "25px",
                  width: "25px",
                  cursor: "pointer",
                  margin: "0.5rem",
                  color: "black",
                }}
              >
                <p>{index + 1}</p>
              </li>
            ))}
          </ul>
        )}
        {autoPlay && showPlayButton && (
          <div className="play-button-container">
            <button className="play-button" onClick={togglePause}>
              {isPaused ? "Resume" : "Pause"}
            </button>
          </div>
        )}
      </div>
      <div className="slide-container">
        <ul className="slides">{slides[currentSlide]}</ul>
      </div>
    </section>
  );
};

export default SlideShow;
