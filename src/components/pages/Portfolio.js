import React from "react";
import "../../App.css";
import customHomePage from "../images/customhomepage.png";
import employeeTracker from "../images/employeeTracker.png";
import jate from "../images/jate.png";
import pantrypal from "../images/pantrypal.png";
import sociallyNetworked from "../images/sociallyNetworked.png";
import techshop from "../images/techshop.png";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <div className="card">
          <img
            className="card-img-top"
            src={customHomePage}
            alt="customhomepage"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src=".../100px180/?text=Image cap"
            alt="employeeTracker"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src=".../100px180/?text=Image cap"
            alt="jate"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src=".../100px180/?text=Image cap"
            alt="pantrypal"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src=".../100px180/?text=Image cap"
            alt="sociallyNetworked"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src=".../100px180/?text=Image cap"
            alt="techshop"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
