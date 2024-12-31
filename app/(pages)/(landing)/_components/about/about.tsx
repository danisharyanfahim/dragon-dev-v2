import SplitCard from "@/app/components/cards/split-card";
import React from "react";
import AboutSection from "./about-section";
import { MdDesignServices } from "react-icons/md";
import { SlSpeech } from "react-icons/sl";
import {
  BsFileEarmarkCodeFill,
  BsFillFileEarmarkRichtextFill,
  BsFillInfoSquareFill,
  BsFillLightningFill,
  BsGraphUpArrow,
  BsReverseLayoutTextWindowReverse,
  BsTools,
  BsWrenchAdjustable,
} from "react-icons/bs";
import { IoLibrary, IoMedal } from "react-icons/io5";
import { ImEnlarge } from "react-icons/im";
import { AiFillFormatPainter, AiFillPicture } from "react-icons/ai";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { SiGnometerminal } from "react-icons/si";
import { GiBrain, GiThreeFriends } from "react-icons/gi";
import { LuSpeech } from "react-icons/lu";
import { FaFolderTree, FaRegHandshake } from "react-icons/fa6";

export const designIcons = [
  <BsWrenchAdjustable />,
  <BsFillFileEarmarkRichtextFill />,
  <ImEnlarge />,
  <BsReverseLayoutTextWindowReverse />,
  <AiFillFormatPainter />,
  <AiFillPicture />,
];

export const devIcons = [
  <BsTools />,
  <IoLibrary />,
  <IoMedal />,
  <TbAdjustmentsSearch />,
  <PiProjectorScreenChartFill />,
  <BsFillLightningFill />,
  <SiGnometerminal />,
];

export const softSkillsIcons = [
  <FaFolderTree />,
  <GiBrain />,
  <BsGraphUpArrow />,
  <SlSpeech />,
  <LuSpeech />,
  <GiThreeFriends />,
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-spacer">
        <SplitCard id="about-header" reverse={true}>
          <figure className="image-container">
            <img src="/static/icons/isometric-laptop.svg" alt="laptop" />
          </figure>
          <section className="text-section">
            <h1 className="icon">
              <BsFillInfoSquareFill />
            </h1>
            <h1 className="title">What can I do?</h1>
            <h3 className="no-bold description-1">
              My philosophy is to build websites and web applications that not
              only captivate users with their design but also deliver fast,
              efficient, and optimized performance for the best user experience.
            </h3>
            <h4 className="no-bold description-2">
              I'll work closely with you to ensure every detail is tailored to
              your vision, helping you build the website or web app of your
              dreams
            </h4>
            <h4 className="no-bold description-2">
              —exactly how you envision it.
            </h4>
          </section>
        </SplitCard>
        <AboutSection
          title="Design"
          description="Design is the cornerstone of every project I undertake. I ensure
              that both the functionality and aesthetic aspects of the design
              come together seamlessly to enhance the user experience."
          dataURL="/app/data/design-content.json"
          direction="right-left"
          logos={designIcons}
          mainLogo={<MdDesignServices />}
        />
        <AboutSection
          title="Development"
          description="Efficient development is key to building high-performance websites
              and applications. I focus on delivering cutting-edge
              functionality, performance, and maintainable code to ensure the
              success of your project."
          dataURL="/app/data/development-content.json"
          direction="left-right"
          logos={devIcons}
          mainLogo={<BsFileEarmarkCodeFill />}
        />
        <AboutSection
          title="Soft Skills"
          description="In addition to my technical expertise, I focus on cultivating
              essential soft skills that ensure smooth collaboration and
              effective project execution"
          dataURL="/app/data/soft-skills-content.json"
          direction="right-left"
          logos={softSkillsIcons}
          mainLogo={<FaRegHandshake />}
        />
      </div>
    </section>
  );
};

export default About;
