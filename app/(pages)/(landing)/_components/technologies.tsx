import LangCard from "@/app/components/cards/lang-card";
import SplitCard from "@/app/components/cards/split-card";
import TechCard from "@/app/components/cards/tech-card";
import Window from "@/app/components/ui/window";
import { LangProps, TechCardProps } from "@/app/interfaces/landing";
import { getLang, getSoftware, getTech } from "@/app/utils/server-actions";
import { formatStringToId } from "@/app/utils/utility-functions";
import React from "react";
import { BsFileEarmarkCodeFill, BsPcDisplay } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { RiWindowFill } from "react-icons/ri";

const Technologies = async () => {
  const langDataSolid: LangProps[] = await getLang("solid");
  const langDataFamiliar: LangProps[] = await getLang("familiar");
  const techDataSolid: TechCardProps[] = await getTech("solid");
  const techDataFamiliar: TechCardProps[] = await getTech("familiar");
  const softwareDataSolid: TechCardProps[] = await getSoftware("solid");
  const softwareDataFamiliar: TechCardProps[] = await getSoftware("familiar");

  return (
    <section className="technologies" id="technologies">
      <div className="section-spacer">
        <SplitCard id="tech-header">
          <div className="tech-header">
            <div className="tech-icon-container">
              <GrPersonalComputer className="tech-icon" />
            </div>
            <div className="tech-description">
              <h1>Technologies</h1>
              <h4 className="no-bold">
                These are the various technologies I've worked with and use in
                my web development projects. Below, you'll find a breakdown of
                the tools and tech I am proficient with, as well as those I am
                familiar with.
              </h4>
            </div>
          </div>
        </SplitCard>
        <SplitCard id="tech-window">
          <Window
            buttonInfo={[
              { title: "Languages", icon: <BsFileEarmarkCodeFill /> },
              { title: "Technologies", icon: <BsPcDisplay /> },
              { title: "Software", icon: <RiWindowFill /> },
            ]}
          >
            <div className="page-container">
              <div className="grid">
                <div className="title-card" id="lang-solid">
                  <div className="spacer">
                    <div className="badge-container">
                      <IoStar />
                    </div>
                    <h2>Languages I Know Well</h2>
                    <h5 className="short-description no-bold">
                      These are the programming languages I have extensive
                      experience with and feel confident using for various
                      tasks.
                    </h5>
                  </div>
                </div>
                {langDataSolid.map((lang: LangProps) => {
                  const { id } = lang;
                  return <LangCard key={id} {...lang} />;
                })}
                <div className="title-card" id="lang-familiar">
                  <div className="spacer">
                    <div className="badge-container">
                      <PiStudentFill />
                    </div>
                    <h2>Languages I've Used Before</h2>
                    <h5 className="short-description no-bold">
                      I've worked with these languages in the past but my
                      understanding is more basic when compared to the above.
                    </h5>
                  </div>
                </div>
                {langDataFamiliar.map((lang: LangProps) => {
                  const { id } = lang;
                  return <LangCard key={id} {...lang} />;
                })}
              </div>
            </div>
            <div className="page-container">
              <div className="grid">
                <div className="title-card" id="tech-solid">
                  <div className="spacer">
                    <div className="badge-container">
                      <IoStar />
                    </div>
                    <h2>Technologies I Understand</h2>
                    <h5 className="short-description no-bold">
                      These cards highlights the technologies I have a solid
                      understanding of and use confidently in my daily
                      development work.
                    </h5>
                  </div>
                </div>
                {techDataSolid.map((tech: TechCardProps) => {
                  const { id, title } = tech;
                  return (
                    <TechCard key={id} {...tech} id={formatStringToId(title)} />
                  );
                })}
                <div className="title-card" id="tech-familiar">
                  <div className="spacer">
                    <div className="badge-container">
                      <PiStudentFill />
                    </div>
                    <h2>Technologies I've Utilized</h2>
                    <h5 className="short-description no-bold">
                      These cards showcase the technologies I have either used
                      before or am currently exploring and working to improve my
                      understanding of.
                    </h5>
                  </div>
                </div>
                {techDataFamiliar.map((tech: TechCardProps) => {
                  const { id } = tech;
                  return <TechCard key={id} {...tech} />;
                })}
              </div>
            </div>
            <div className="page-container">
              <div className="grid">
                <div className="title-card" id="software-solid">
                  <div className="spacer">
                    <div className="badge-container">
                      <IoStar />
                    </div>
                    <h2>Software I Am Proficient With</h2>
                    <h5 className="short-description no-bold">
                      These cards showcase the software programs I have a solid
                      understanding of and often use confidently in my daily
                      development work.
                    </h5>
                  </div>
                </div>
                {softwareDataSolid.map((tech: TechCardProps) => {
                  const { id, title } = tech;
                  return (
                    <TechCard key={id} {...tech} id={formatStringToId(title)} />
                  );
                })}
                <div className="title-card" id="software-familiar">
                  <div className="spacer">
                    <div className="badge-container">
                      <PiStudentFill />
                    </div>
                    <h2>Software I Am Familiar With</h2>
                    <h5 className="short-description no-bold">
                      These cards showcase the software programs I have either
                      used before or am currently exploring and working to
                      improve my understanding of.
                    </h5>
                  </div>
                </div>
                {softwareDataFamiliar.map((tech: TechCardProps) => {
                  const { id } = tech;
                  return <TechCard key={id} {...tech} />;
                })}
              </div>
            </div>
          </Window>
        </SplitCard>
      </div>
    </section>
  );
};

export default Technologies;

/* Window with the following tabs for now:
-Programming Languages 
-Software, Tools and Libraries (Proefficient with)
-Software, Tools and Libraries (familiar with)
-Other software (Photoshop, Illustrator) and other design software (Later)

Use sanityIO for the tech, because there is a lot, so it is better to just enter it in as information and then generate the data as a card
*/
