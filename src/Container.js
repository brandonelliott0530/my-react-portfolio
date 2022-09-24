import React, { useState } from "react";
import Tabs from "./Tabs";
import Bio from "./components/pages/Bio.js";
import Contact from "./components/pages/Contact.js";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio.js";
import Home from "./components/pages/Home.js";
import "./App.css";
import Logo from "./components/images/Clean Modern Programmer Developer Web Designer Logo (1).png";

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
      <div class="jumbotron jumbotron-fluid">
        <img id="logo" src={Logo} alt="logo"></img>

        <div id="header-container" class="container">
          <h1 class="display-4 text-light ">Brandon Elliott</h1>
          <p class="lead text-light">Full-Stack Web Developer</p>

          <Tabs
            id="navTabs"
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      {render()}
      <footer className="footer"></footer>
    </>
  );
}
