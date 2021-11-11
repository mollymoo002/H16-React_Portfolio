import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    display: 'inline',
  },
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading} Link to="/">About Me</div>
      <div style={styles.heading} Link to="/portfolio">Portfolio</div>
      <div style={styles.heading} Link to="/contact">Contact</div>
      <div style={styles.heading} Link to="/resume">Resume</div>
    </div>
  );
}

export default Navbar;
