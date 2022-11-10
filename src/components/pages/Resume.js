import React from "react";
import "../../App.css";

// this is the layout for the resume component

export default function Resume() {
  return (
    <div id="resume-container">
      <a
        id="resume-link"
        href="resume.pdf"
        download="resume-brandon-elliott.pdf"
      >
        <button id="resume-btn" className="btn btn-primary">
          Download a copy
        </button>
      </a>
      <h2 id="resume-header">Brandon Elliott</h2>
      <h4 className="summary-title">Summary</h4>
      <p id="resume-summary">
        Full-stack web developer looking to leverage the problem solving,
        independent, and self-motivating skills learned in an eight year career
        as a BMW Master Technician, into a career as a Full-Stack web developer
        using the latest technologies to build a better user experience on the
        web. Earned a certificate in Full-Stack Web Development from the
        University of Denver Coding Bootcamp. Strengths in problem solving,
        creativity, teamwork, organization, and time management.
      </p>
      <h4 className="summary-title">Technical Skills:</h4>
      <ul id="skills-list">
        <li className="skill">Javascript ES6+</li>
        <li className="skill">CSS</li>
        <li className="skill">HTML</li>
        <li className="skill">SQL</li>
        <li className="skill">noSQL</li>
        <li className="skill">MongoDB</li>
        <li className="skill">MySql</li>
        <li className="skill">GitHub</li>
        <li className="skill">Express</li>
        <li className="skill">Node</li>
        <li className="skill">React</li>
        <li className="skill">Bootstrap</li>
        <li className="skill">Materialize</li>
        <li className="skill">Material UI</li>
      </ul>
      <h4 className="summary-title">Experience</h4>
      <h6 className="work-title">Master Technician</h6>
      <h6 className="work-duration">2018-Present</h6>
      <h6 className="work-location">BMW of Denver Downtown</h6>
      <p className="work-description">
        Performed repairs and repairs to all models of BMWs and provided
        excellent customer service while meeting deadlines.{" "}
      </p>
      <h6 className="work-accommplishments">Key Accommplishments:</h6>
      <ul id="denver-accommplishments">
        <li className="skill">
          Obtained full alternative drive certifications allowing the repair and
          maintenance to electric and hybrid vehicles.{" "}
        </li>
        <li className="skill">
          Ranked 9th in the nation in the 2019 BMW Profiles In Achievement which
          highlights the nations top technicians.{" "}
        </li>
      </ul>
      <h6 className="work-title">Level 1 Technician</h6>
      <h6 className="work-duration">2014-2018</h6>
      <h6 className="work-location">BMW of San Antonio</h6>
      <p className="work-description">
        Performed repairs and repairs to all models of BMWs and provided
        excellent customer service while meeting deadlines.{" "}
      </p>
      <h6 className="work-accommplishments">Key Accommplishments:</h6>
      <ul id="denver-accommplishments">
        <li className="skill">
          Obtained diesel vehicle certifications allowing for the repair and
          maintenance of Diesel powered vehicles.
        </li>
        <li className="skill">
          Lead a team of technicians. Responsible for dispatching work, and
          increasing productivity of my teammates.
        </li>
      </ul>
      <h4 id="education">Education</h4>
      <h6 className="education-accomplisment">
        Certificate in Full Stack Web Development
      </h6>
      <p className="education-duration">2022</p>
      <p className="school-description">University of Denver</p>{" "}
      <h6 className="education-accomplisment">
        Associates Degree in Automotive Technology
      </h6>
      <p className="education-duration">2012-2014</p>
      <p className="school-description">Universal Technical Institue</p>
    </div>
  );
}
