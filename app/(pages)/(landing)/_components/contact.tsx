import SplitCard from "@/app/components/cards/split-card";
import ContactForm from "@/app/components/contact-form";
import React from "react";
import { HiPhone } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-spacer">
        <SplitCard id="contact-section">
          <div className="contact-section">
            <section className="text-section">
              <h1 className="icon">
                <HiPhone />
              </h1>
              <h1>Get In Touch</h1>
              <h4 className="no-bold">
                I'm always open to discussing new projects, collaborations, or
                answering any questions you may have. I'll do my best to respond
                as soon as possible. Looking forward to hearing from you!
              </h4>
            </section>
            <ContactForm />
          </div>
        </SplitCard>
      </div>
    </section>
  );
};

export default Contact;
