import React from "react";
import { formatTimeDifference } from "../utils/utility-functions";
import { urlFor } from "../lib/client";
import Link from "next/link";
import Tag from "./tag";

const categories = [];

const SkeletonArticleCard = () => {
  return (
    <div className="skeleton-card">
      <div className="image-container"></div>
      <div className="content-container">
        <div className="category-container">
          <div className="tag">Lorem</div>
          <div className="tag">ipsum </div>
          <div className="tag">dolor</div>
          <div className="tag">sit</div>
          <div className="tag">amet</div>
          <div className="tag">animi</div>
        </div>
        <h4 className="title">animi</h4>
        <small className="date-created">Lorem ipsum</small>
        <p className="overview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ad animi iure nobis repudiandae quasi blanditiis, eius
          non culpa ab nemo deserunt voluptates rem nihil quod eligendi est, aut
          reprehenderit.
        </p>
        <div className="link-button-container">
          <button className="link-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SkeletonArticleCard;
