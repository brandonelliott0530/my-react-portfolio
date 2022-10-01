import React from "react";

// This is the tabs section of the html. I imported the handlePageChange prop from the container file and use it in the buttons here

export default function Tabs({ currentPage, handlePageChange }) {
  return (
    <ul className="tabs">
      <li className="nav-item">
        <a
          href="#bio"
          onClick={() => handlePageChange("Bio")}
          className={currentPage === "Bio" ? "nav-link-active" : "nav-link"}
        >
          Bio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link-active" : "nav-link"}
        >
          My Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}
