import React from "react";

const styles = {
  heading: {
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    display: "inline",
  },
  links: {
    color: "white",
    textDecoration: "none",
  }
};

function Navbar({  handlePageChange }) {
  return (
    <div>
      <div style={styles.heading}>
        <a style={styles.links} href="#about" onClick={() => handlePageChange("About")}>
          About Me
        </a>
      </div>
      <div style={styles.heading}>
        <a style={styles.links} href="#projects" onClick={() => handlePageChange("Projects")}>Projects</a>
      </div>
      <div style={styles.heading}>
        <a style={styles.links} href="#contact" onClick={() => handlePageChange("Contact")}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;