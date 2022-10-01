import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../App.css";

// A simple contact form made with emailjs
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sgjzrvm",
        "template_zadtr6v",
        form.current,
        "DzUG_Rrr1RD0H5Jjn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <h2 id="contact-header">Contact Me</h2>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <label className="contact-label">Name</label>
          <input className="contact-input" type="text" name="user_name" />
          <label className="contact-label">Email</label>
          <input className="contact-input" type="email" name="user_email" />
          <label className="contact-label">Message</label>
          <textarea id="message-input" name="message" />
          <input
            className=" btn btn-primary"
            id="contact-submit"
            type="submit"
            value="Send me an email"
          />
        </form>
      </div>
    </>
  );
}
