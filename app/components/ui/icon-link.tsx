import React from "react";

const IconLink = ({ url, imageUrl }: { url: string; imageUrl: string }) => {
  return (
    <a href={url} target="_blank">
      <div
        className="social-media-icon"
        style={{
          maskImage: `url(${imageUrl})`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      ></div>
    </a>
  );
};

export default IconLink;
