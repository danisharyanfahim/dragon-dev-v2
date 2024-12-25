import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-spacer">
        <h2>Contact</h2>
        <div className="short-description">
          I'm always open to discussing new projects, collaborations, or
          answering any questions you may have. Whether you're interested in
          working together or just want to connect, feel free to reach out. I'll
          do my best to respond as soon as possible. Looking forward to hearing
          from you!
        </div>
        <div className="email-button-container">
          <a className="email-link" href="mailto:danisharyanfahim@gmail.com">
            <button className="email-button">Email Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
