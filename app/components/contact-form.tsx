"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { countries } from "countries-list";

const countryCodes = Object.keys(countries);
const countryInfo = countryCodes
  .map((code) => {
    return {
      name: countries[code].name,
      phone: "+" + countries[code].phone[0],
    };
  })
  .sort();

/* This uses a lot of useState variables, just use useReducer instead  */

const ContactForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [privacy, setPrivacy] = useState<boolean>(false);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setJobTitle("");
    setCompanyName("");
    setCountry("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
    setPrivacy(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let problem = false;
    let problemMessage = "";

    const serviceId = "service_hl8jaeq";
    const templateId = "template_pgoctl5";
    const publicKey = "gKf_CDJFpRtI8fkj3";

    const templateParams = {
      from_name: firstName + " " + lastName,
      from_email: email,
      phone_number: phoneNumber,
      jobTitle: jobTitle, //Later have this be an option menu
      companyName: companyName,
      country: country,
      email_subject: subject,
      to_name: "Danish Fahim",
      message: message,
    };

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      subject === "" ||
      message === "" ||
      !privacy
    ) {
      problem = true;
      problemMessage = `
        Sorry, we couldn't send email because you didn't type your:

            ${firstName === "" ? "First Name" : ""}
            ${lastName === "" ? "Last Name" : ""}
            ${email === "" ? "Email" : ""}
            ${subject === "" ? "Subject" : ""}
            ${message === "" ? "Message" : ""}
            `;
    }

    if (!problem) {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        () => {
          alert(
            `Congratulations ${firstName}! Your message has been sent to me successfully.`
          );
          reset();
        },
        (error) => {
          console.log("Error sending email", error.text);
        }
      );
    } else {
      alert(problemMessage);
    }
  };

  return (
    <div className="contact-form container">
      <div className="form container">
        <form onSubmit={handleSubmit} className="email-form container">
          <section>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="country">Country</label>
            <select id="country" onChange={(e) => setCountry(e.target.value)}>
              {countryInfo.map((country, index) => {
                return (
                  <option
                    selected={country.name === "Canada"}
                    key={country.name + index}
                    className="country-option"
                  >
                    {country.name}
                  </option>
                );
              })}
            </select>
          </section>
          <section>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </section>
          <section>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols={30}
              rows={5}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </section>
          <section>
            <div>
              <div className="box-container">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)} // Change to e.target.checked
                />
              </div>
              <div className="policy-text-container">
                <span>
                  By checking this box, you acknowledge that you have read and
                  agree to our Terms and Agreements regarding the collection and
                  use of your personal information. We collect data such as your
                  name and email to process requests, improve our services, and
                  communicate with you. We do not sell or trade your information
                  and take appropriate security measures to protect it. You have
                  the right to access, correct, or delete your personal
                  information at any time. For more details, please see our full
                  policy.
                </span>
              </div>
            </div>
          </section>
          <section>
            <button className="send" type="submit">
              Send
            </button>
            {/* <button className="reset" onClick={() => console.log("H")}>
        Reset
      </button> */}
          </section>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;