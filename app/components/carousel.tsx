"use client";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { addToFrontAndEnd } from "../utils/utility-functions";
import CarouselCard from "./cards/carousel-card";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa6";
import { GiPauseButton } from "react-icons/gi";

const gridGap = 16;

const Carousel = ({
  children,
  infinite = true,
  autoPlay = false,
  delay = 1000,
  direction = "forward",
  initialSlide,
  showPlayButton = false,
  showControlButtons = true,
  showPositionIndicator = true,
}: {
  children: React.ReactNode[];
  infinite?: boolean;
  autoPlay?: boolean;
  delay?: number;
  direction?: "forward" | "reverse";
  initialSlide?: number;
  showPlayButton?: boolean;
  showControlButtons?: boolean;
  showPositionIndicator?: boolean;
}) => {
  const scrollBehavior = useRef<"smooth" | "auto">("auto");
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const carouselRef = useRef<HTMLOListElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const cardsBefore = useMemo<number>(
    () => (infinite ? Math.floor(children.length / 2) : 0),
    [children?.length]
  );
  const cardsAfter = useMemo<number>(
    () => (infinite ? Math.ceil(children.length / 2) : 0),
    [children?.length]
  );

  const cards = useMemo(() => {
    if (infinite) {
      children = addToFrontAndEnd(cardsBefore, cardsAfter, children);
    }
    let cards = children.map((child, index) => {
      return (
        <li
          className="card-container"
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          key={index}
        >
          <CarouselCard>{child}</CarouselCard>
        </li>
      );
    });
    return cards;
  }, [children]);

  const scrollTo = (nextSlide: number) => {
    const firstCardWidth = cardRefs.current[0]?.offsetWidth;
    if (firstCardWidth === undefined) return;
    setCurrentSlide(nextSlide);
    carouselRef.current?.scrollTo({
      left: (firstCardWidth + gridGap) * nextSlide,
      behavior: scrollBehavior.current,
    });
  };

  const getVisibleCards = (): number | undefined => {
    const firstCardWidth = cardRefs.current[0]?.offsetWidth;
    const carouselWidth = carouselRef.current?.offsetWidth;
    if (firstCardWidth === undefined || carouselWidth === undefined) return;
    return Math.round(carouselWidth / firstCardWidth);
  };

  const toggleSlide = (nextSlide: number) => {
    if (infinite) {
      const visibleCards = getVisibleCards();
      if (visibleCards === undefined) return;
      if (nextSlide > cards.length - visibleCards) {
        scrollBehavior.current = "auto";
        nextSlide -= children.length + 1;
      } else if (nextSlide < 0) {
        scrollBehavior.current = "auto";
        nextSlide = children.length;
      }
      scrollTo(nextSlide);
    } else if (nextSlide <= children.length - 1 && nextSlide >= 0) {
      scrollTo(nextSlide);
    }
  };

  const [currentCard, setCurrentSlide] = useState<number>(0);

  const setFirstSlide = (
    initialSlide: number,
    infinite: boolean,
    cardsBefore: number
  ) => {
    if (infinite) {
      initialSlide = cardsBefore + initialSlide;
    }
    scrollTo(initialSlide);
    return initialSlide;
  };

  //Sets the slider position to the scroll position of the initial card, regardless of whether or not the carousel wraps
  useLayoutEffect(() => {
    setFirstSlide(initialSlide ?? 0, infinite, cardsBefore);
  }, []);

  //If the scroll is set to auto, which happens when one end of the slides has been reached when the slides are set to infinite mode, then it will reenable smooth scrolling and go to the target slide
  useEffect(() => {
    if (scrollBehavior.current === "auto") {
      scrollBehavior.current = "smooth";
      const visibleCards = getVisibleCards();
      if (visibleCards === undefined) return;
      if (currentCard === cardsBefore + (3 - visibleCards)) {
        //3 Is the highest number of visible cards
        toggleSlide(currentCard + 1);
      } else if (currentCard === children.length) {
        toggleSlide(currentCard - 1);
      }
    }
  }, [currentCard]);

  //Controls the autoPlaying of the slides, after the delay duration has been reached it will go to the next or previous slide
  useEffect(() => {
    if (!autoPlay || !isPlaying) return;
    const interval = setInterval(() => {
      if (direction === "forward") {
        toggleSlide(currentCard + 1);
      } else {
        toggleSlide(currentCard - 1);
      }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [currentCard, delay, direction, isPlaying]);

  return (
    <div className="carousel" style={{ "--grid-gap": gridGap + "px" }}>
      {showPositionIndicator && (
        <div className="position-indicator">
          <p>
            {currentCard + 1 > children.length
              ? currentCard - children.length + 1
              : currentCard + 1}
            /{children.length}
          </p>
        </div>
      )}
      {autoPlay && showPlayButton && (
        <button
          className="play-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <h3>{isPlaying ? <GiPauseButton /> : <FaPlay />}</h3>
        </button>
      )}
      {showControlButtons && (
        <>
          <button
            className="prev-button"
            onClick={() => toggleSlide(currentCard + 1)}
          >
            <FaChevronRight />
          </button>
          <button
            className="next-button"
            onClick={() => toggleSlide(currentCard - 1)}
          >
            <FaChevronLeft />
          </button>
        </>
      )}
      <ol className="cards-container" ref={carouselRef}>
        {cards}
      </ol>
    </div>
  );
};

export default Carousel;

/* Make position buttons later, they are basically mini slides
 which also scroll left and right, and which ever one you click
 on will scroll both the positions buttons and the slider to
 the left or the right depending on the amount  */
