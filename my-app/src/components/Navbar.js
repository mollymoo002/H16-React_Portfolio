import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    display: "inline",
  },
};

function Navbar({  handlePageChange }) {
  return (
    <div>
      <div style={styles.heading}>
        <a href="#about" onClick={() => handlePageChange("About")}>
          About Me
        </a>
      </div>
      <div style={styles.heading}>
        <a href="#projects" onClick={() => handlePageChange("Projects")}>Projects</a>
      </div>
      <div style={styles.heading}>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;