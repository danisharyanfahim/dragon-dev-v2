import SplitCard from "@/app/components/cards/split-card";
import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-spacer">
        <SplitCard id="contact-section">
          <section className="text-section">
            <h1>Contact</h1>
            <h2 className="no-bold">
              I'm always open to discussing new projects, collaborations, or
              answering any questions you may have. Whether you're interested in
              working together or just want to connect, feel free to reach out.
              I'll do my best to respond as soon as possible. Looking forward to
              hearing from you!
            </h2>
            <div className="email-button-container">
              <a
                className="email-link"
                href="mailto:danisharyanfahim@gmail.com"
              >
                <button className="email-button">Email Me</button>
              </a>
            </div>
          </section>
          <div className="contact-form"></div>
        </SplitCard>
      </div>
    </section>
  );
};

export default Contact;
