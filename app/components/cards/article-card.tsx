import React from "react";
import { ArticleCardProps } from "@/app/interfaces/blog";
import { formatTimeDifference } from "../../utils/utility-functions";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import Tag from "../tag";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ArticleCard = ({
  title,
  titleImage,
  currentSlug,
  overview,
  dateCreated,
  categories,
}: ArticleCardProps) => {
  return (
    <div className="article-card">
      <figure className="image-container">
        <img
          src={urlFor(titleImage).url()}
          alt="title-image"
          className="title-image"
          loading="lazy"
        />
      </figure>
      <div className="content-container">
        <div className="category-container">
          {categories.map((category, index) => {
            return <Tag key={index} {...category} />;
          })}
        </div>
        <h4 className="title">{title}</h4>
        <small className="date-created">
          {formatTimeDifference(dateCreated)}
        </small>
        <p className="overview">{overview}</p>
        <div className="link-button-container">
          <Link href={`/blog/${currentSlug}`}>
            <button className="link-button">
              <p>Read More</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
