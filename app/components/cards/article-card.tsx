import React from "react";
import { ArticleCardProps } from "@/app/interfaces/blog";
import { formatTimeDifference } from "../../utils/utility-functions";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import Tag from "../ui/tag";

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
      <div className="card-header">
        <div className="text-container">
          <h6>{title.toUpperCase()}</h6>
        </div>
        <figure className="image-container">
          <img
            src={urlFor(titleImage).url()}
            alt="title-image"
            className="title-image"
            loading="lazy"
          />
        </figure>
      </div>
      <div className="content-container">
        <small className="date-created">
          {formatTimeDifference(dateCreated)}
        </small>
        <h4 className="title">{title}</h4>
        <p className="overview">{overview}</p>
        <div className="category-container">
          {categories.map((category, index) => {
            return <Tag key={index} {...category} />;
          })}
        </div>
        <div className="link-button-container">
          <Link href={`/blog/${currentSlug}`}>
            <button className="link-button">
              <p>Read More</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="background-icon"></div>
    </div>
  );
};

export default ArticleCard;
