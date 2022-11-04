import React from "react";
import "../../App.css";
import Picture from "../images/IMG_9703 - Edited.png";

// A short biography of me
export default function Bio() {
  return (
    <div id="bio-container" className="container">
      <img id="bio-picture" src={Picture} alt="bio"></img>
      <h2 id="bio-title">About Me</h2>
      <p className="bio-content">
        Hello World! My name is Brandon. I am a full-stack web developer
        transitioning from the automotive industry into the wonderful world of
        web development! After 8 years as a BMW technician, I decided to persue
        a career in something that I've always had an interest in, and that if I
        were to ever have a family, a career as a web developer would help me
        support them. When I'm not behind a keyboard debugging a line of code
        you can find me spending time with my Fianceé, learning Portugese,
        working on my project car, and spending time in the beautiful mountains
        of Colorado. If you have any questions please feel free to either send
        me an email from the Contact Me page, or contact me at my LinkedIn
        profile.
      </p>
      <p id="bio-subtitle" className="bio-content">
        Happy Hacking!
      </p>
    </div>
  );
}
