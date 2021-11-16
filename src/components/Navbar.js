import React from "react";
import '../styles/Navbar.css';
import resume from './resources/Resume.pdf';

function Navbar({  handlePageChange }) {
  return (
    <div>
      <div className="heading">
        <a className="links" href="#about" onClick={() => handlePageChange("About")}>
          About Me
        </a>
      </div>
      <div className="heading">
        <a className="links" href="#projects" onClick={() => handlePageChange("Projects")}>Projects</a>
      </div>
      <div className="heading">
        <a className="links" href="#contact" onClick={() => handlePageChange("Contact")}>Contact</a>
      </div>
      <div className="heading">
        <a className="links" href={resume} target="_blank">Resume</a>
      </div>
    </div>
  );
}

export default Navbar;