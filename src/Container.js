import React, { useState } from "react";
import Tabs from "./Tabs";
import Bio from "./components/pages/Bio.js";
import Contact from "./components/pages/Contact.js";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio.js";
import Home from "./components/pages/Home.js";
import "./App.css";
import Logo from "./components/images/Clean Modern Programmer Developer Web Designer Logo (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const render = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Bio") {
      return <Bio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <img id="logo" src={Logo} alt="logo"></img>

        <div id="header-container" className="container">
          <h1 className="display-4 text-light ">Brandon Elliott</h1>
          <p className="lead text-light">Full-Stack Web Developer</p>

          <Tabs
            id="navTabs"
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      {render()}
      <footer className="footer">
        <div id="link-container" className="container">
          <a href="https://github.com/brandonelliott0530" target="_blank">
            <FontAwesomeIcon className="svg" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-elliott-751aaa236/"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon className="svg" icon={faLinkedin} />{" "}
          </a>
        </div>
      </footer>
    </>
  );
}
