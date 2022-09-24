import React from "react";

export default function Home() {
  return (
    <div id="home-card" class="card">
      <h2 id="home-card-body" class="card-body">
        <pre id="console-log">
          const greeting = () => console.log("Hello World!")
        </pre>
      </h2>
      <p id="home-card-text" class="card-text">
        Welcome to my website that was built using React, Node, and Bootstrap.
        Here you will find a little about me, my Portfolio, as well as how to
        contact me.
      </p>
    </div>
  );
}
