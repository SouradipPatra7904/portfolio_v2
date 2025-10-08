import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../icons/FontAwesomeIcons"

export default function Contact() {


  const contacts = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/souradip-patra-31574a253/", icon: ["fab", "linkedin"] },
    { name: "GitHub", link: "https://github.com/SouradipPatra7904", icon: ["fab", "github"]},
    { name: "LeetCode", link: "https://leetcode.com/u/SouradipPatra/", icon: ["fas", "laptop-code"] },
    { name: "Facebook", link: "https://facebook.com/souradip.patra.982", icon: ["fab", "facebook"] },
    { name: "Instagram", link: "https://www.instagram.com/iblamepatro/", icon: ["fab", "instagram"] },
  ];

  return (
    <section id="contact" className="contact section">

      <div className="contact-content">
        <h2 className="section-title">Connect with Me</h2>
        <p className="section-subtitle">Find me on these platforms:</p>

        <div className="contact-grid">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FontAwesomeIcon icon={contact.icon} className="contact-icon" />
              <span className="contact-name">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
