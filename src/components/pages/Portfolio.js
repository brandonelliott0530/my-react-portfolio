import React from "react";
import "../../App.css";
import customHomePage from "../images/customhomepage.png";
import employeeTracker from "../images/employeeTracker.png";
import jate from "../images/jate.png";
import pantrypal from "../images/pantrypal.png";
import sociallyNetworked from "../images/sociallyNetworked.png";
import techshop from "../images/techshop.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Portfolio() {
  return (
    <>
      <h2 className="text-center" id="portfolio-title">
        My Portfolio
      </h2>
      <p className="text-center" id="portfolio-subtitle">
        Here are a few of my latest projects
      </p>
      <div className="portfolio-container container-fluid ">
        <div className="card portfolio-card">
          <img className="card-img-top" src={pantrypal} alt="pantrypal"></img>
          <div className="card-body text-center">
            <h5 className="card-text mb-3 ">Pantry-Pal</h5>
            <a
              href="https://github.com/brandonelliott0530/Pantry-Pal"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faGithub} />
            </a>
            <a href="https://pantry-pal1.herokuapp.com/" target="_blank">
              {" "}
              <FontAwesomeIcon className="svg" icon={faDesktop} />
            </a>
          </div>
        </div>
        <div className="card portfolio-card">
          <img className="card-img-top" src={jate} alt="Jate"></img>
          <div className="card-body text-center">
            <h5 className="card-text mb-3 ">Just Another Text Editor</h5>
            <a
              href="https://github.com/brandonelliott0530/Text-editor-pwa"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faGithub} />
            </a>
            <a
              href="https://my-text-editor-jate.herokuapp.com/"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faDesktop} />
            </a>
          </div>
        </div>{" "}
        <div className="card portfolio-card">
          <img
            className="card-img-top"
            src={customHomePage}
            alt="Custom Home Page"
          ></img>
          <div className="card-body text-center">
            <h5 className="card-text mb-3 ">Custom Home Page</h5>
            <a
              href="https://github.com/brandonelliott0530/custom-homepage"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faGithub} />
            </a>
            <a
              href="https://brandonelliott0530.github.io/custom-homepage/"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faDesktop} />
            </a>
          </div>
        </div>
        <div class="card portfolio-card">
          <img
            className="card-img-top"
            src={employeeTracker}
            alt="Employee Tracker"
          ></img>
          <div className="card-body text-center">
            <h5 className="card-text mb-3 ">Employee Tracker</h5>
            <a
              href="https://github.com/brandonelliott0530/employee-tracker"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faGithub} />
            </a>
            <a
              href="https://drive.google.com/file/d/1Zl1-kj19jIwWVI5HMotAtQD3ZKExwccD/view?usp=sharing"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg " icon={faDesktop} />
            </a>
          </div>
        </div>
        <div className="card portfolio-card">
          <img
            className="card-img-top"
            src={sociallyNetworked}
            alt="socially networked"
          ></img>
          <div className="card-body text-center">
            <h5 className="card-text mb-3 ">Socially Networked</h5>
            <a
              href="https://github.com/brandonelliott0530/socially-networked"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faGithub} />
            </a>
            <a
              href="https://drive.google.com/file/d/1eCyEE2SSg6KtZ620ra2TAsy4j3VK3G68/view?usp=sharing"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faDesktop} />
            </a>
          </div>
        </div>{" "}
        <div className="card portfolio-card">
          <img className="card-img-top" src={techshop} alt="pantrypal"></img>
          <div className="card-body text-center">
            <h5 className="card-text mb-3 ">Tech Shop</h5>
            <a
              href="https://github.com/brandonelliott0530/tech-shop"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faGithub} />
            </a>
            <a
              href="https://drive.google.com/file/d/1DSVSkhHwpxCuYDRPL1OXf6bV3l3jFbx4/view?usp=sharing"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon className="svg" icon={faDesktop} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
