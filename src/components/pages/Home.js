import React from "react";
import Tabs from "../../Tabs";
import { ReactDOM, useState } from "react";
import handlePageChange from 

export default function Home() {
  return (
    <div id="home-card" className="card">
      <h2 id="home-card-body" className="card-body">
        <pre id="console-log">const greeting = () => return "Hello World!"</pre>
      </h2>
      <p id="home-card-text" className="card-text">
        Welcome to my website that was built using React, Node, and Bootstrap.
        Here you will find a little about me, my Portfolio, as well as how to
        contact me.
      </p>
      <button
        id="portfolio-button"
        className="btn btn-primary mb-5"
        onClick={() => {handlePageChange()}}
      >
        My Portfolio
      </button>
    </div>
  );
}
