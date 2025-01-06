"use client";
import React, { useEffect, useState } from "react";
import { footerInfo, pageSections } from "../global/variables";
import Link from "next/link";
import { useTheme } from "next-themes";
import IconLink from "./icon-link";

const FooterContent = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="top-section">
        <section className="mission-section">
          <figure className="logo-container">
            <img
              src={
                theme === "dark" || !mounted
                  ? "/static/icons/dragon-dev-night.svg"
                  : "/static/icons/dragon-dev-day.svg"
              }
              alt="logo"
            />
          </figure>
          <p className="mission-text">
            My mission is to create websites and web applications that deliver
            lightning-fast performance, world-class functionality, and flawless
            design.
          </p>
          <div className="social-media-icons-container">
            <IconLink
              url="https://github.com/danisharyanfahim"
              imageUrl="/static/icons/social-media-icons/github-icon.svg"
            />
            <IconLink
              url="https://www.linkedin.com/in/danish-fahim-a56a85191/"
              imageUrl="/static/icons/social-media-icons/linked-in-icon.png"
            />
          </div>
        </section>
        <section className="links-section">
          <div className="links-container">
            <h4>Links</h4>
            {pageSections.map(
              (section: string | { name: string; link: string }, index) => {
                if (typeof section === "object") {
                  return (
                    <Link
                      href={`/${section.link}`}
                      key={index}
                      className="nav-button"
                    >
                      <p>{section.name}</p>
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      href={`/#${section.toLowerCase()}`}
                      key={index}
                      className="nav-button"
                    >
                      <p>{section}</p>
                    </Link>
                  );
                }
              }
            )}
          </div>
        </section>
        <section className="info-section">
          {footerInfo.map((info, index) => {
            return (
              <div className="information-card" key={index}>
                <figure className="icon-container">
                  <div
                    style={{
                      mask: `url(${info.iconUrl})`,
                      maskSize: "contain",
                      maskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMask: `url(${info.iconUrl})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskPosition: "center",
                      WebkitMaskRepeat: "no-repeat",
                    }}
                    className={info.name + " icon"}
                  ></div>
                </figure>
                <div className="content-container">
                  <p className="info-text">{info.text}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <section className="copyright-container">
        <p className="copyright-text">© 2024 DragonDev. All rights reserved.</p>
      </section>
    </>
  );
};

export default FooterContent;
