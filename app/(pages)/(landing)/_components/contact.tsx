import SplitCard from "@/app/components/cards/split-card";
import ContactForm from "@/app/components/ui/contact-form";
import React from "react";
import { HiPhone } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-spacer">
        <SplitCard id="contact-section">
          <div className="contact-section">
            <section className="text-section">
              <h1>
                Get In Touch
                <HiPhone className="icon" />
              </h1>
              <h4 className="no-bold">
                I'm always open to discussing new projects, collaborations, or
                answering any questions you may have. Looking forward to hearing
                from you!
              </h4>
              <figure className="image-container">
                <img src="/static/icons/paper-plane.svg" alt="paper-plane" />
              </figure>
            </section>

            <ContactForm />
          </div>
        </SplitCard>
      </div>
    </section>
  );
};

export default Contact;
