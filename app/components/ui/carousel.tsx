"use client";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { addToFrontAndEnd } from "../../utils/utility-functions";
import CarouselCard from "../cards/carousel-card";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa6";
import { GiPauseButton } from "react-icons/gi";

const gridGap = 16;

const Carousel = ({
  children,
  infinite = true,
  autoPlay = false,
  delay = 1000,
  direction = "forward",
  initialCard,
  showPlayButton = false,
  showControlButtons = true,
  showPositionIndicator = true,
}: {
  children: React.ReactNode[];
  infinite?: boolean;
  autoPlay?: boolean;
  delay?: number;
  direction?: "forward" | "reverse";
  initialCard?: number;
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

  const scrollTo = (nextCard: number) => {
    const firstCardWidth = cardRefs.current[0]?.offsetWidth;
    if (firstCardWidth === undefined) return;
    setCurrentCard(nextCard);
    carouselRef.current?.scrollTo({
      left: (firstCardWidth + gridGap) * nextCard,
      behavior: scrollBehavior.current,
    });
  };

  const getVisibleCards = (): number | undefined => {
    const firstCardWidth = cardRefs.current[0]?.offsetWidth;
    const carouselWidth = carouselRef.current?.offsetWidth;
    if (firstCardWidth === undefined || carouselWidth === undefined) return;
    return Math.round(carouselWidth / firstCardWidth);
  };

  const toggleCard = (nextCard: number) => {
    if (infinite) {
      const visibleCards = getVisibleCards();
      if (visibleCards === undefined) return;
      if (nextCard > cards.length - visibleCards) {
        scrollBehavior.current = "auto";
        nextCard -= children.length + 1;
      } else if (nextCard < 0) {
        scrollBehavior.current = "auto";
        nextCard = children.length;
      }
      scrollTo(nextCard);
    } else if (nextCard <= children.length - 1 && nextCard >= 0) {
      scrollTo(nextCard);
    }
  };

  const [currentCard, setCurrentCard] = useState<number>(0);

  const setFirstCard = (
    initialCard: number,
    infinite: boolean,
    cardsBefore: number
  ) => {
    if (infinite) {
      initialCard = cardsBefore + initialCard;
    }
    scrollTo(initialCard);
    return initialCard;
  };

  //Sets the carousel position to the scroll position of the initial card, regardless of whether or not the carousel wraps
  useLayoutEffect(() => {
    setFirstCard(initialCard ?? 0, infinite, cardsBefore);
  }, []);

  // If the scroll is set to auto, which happens when one end of the cards has been reached when the cards are set to infinite mode, then it will reenable smooth scrolling and go to the target card
  useEffect(() => {
    if (scrollBehavior.current === "auto") {
      scrollBehavior.current = "smooth";
      const visibleCards = getVisibleCards();
      if (visibleCards === undefined) return;
      if (currentCard === cardsBefore + (3 - visibleCards)) {
        //3 Is the highest number of visible cards
        toggleCard(currentCard + 1);
      } else if (currentCard === children.length) {
        toggleCard(currentCard - 1);
      }
    }
  }, [currentCard]);

  //Controls the autoPlaying of the card, after the delay duration has been reached it will go to the next or previous cards
  useEffect(() => {
    if (!autoPlay || !isPlaying) return;
    const interval = setInterval(() => {
      if (direction === "forward") {
        toggleCard(currentCard + 1);
      } else {
        toggleCard(currentCard - 1);
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
              ? currentCard + 1 - children.length
              : currentCard + 1}
            /{children.length}
            {/* {currentCard + 1}/{children.length} */}
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
            onClick={() => toggleCard(currentCard + 1)}
          >
            <FaChevronRight />
          </button>
          <button
            className="next-button"
            onClick={() => toggleCard(currentCard - 1)}
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
 on will scroll both the positions buttons and the carousel to
 the left or the right depending on the amount, also add touch
 dragging, hover dragging, and mouse dragging, and make it work
 with the infinite scrolling. Play around with the scroll padding
 css property, and also the scrollIntoView, and scrollBy functions
 and see if they work better than scrollTo  */
