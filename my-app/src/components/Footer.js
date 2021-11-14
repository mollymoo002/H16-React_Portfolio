import React from 'react';

const styles = {
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#219ade',
        color: 'white',
        textAlign: 'center',
        padding: 30,
      },
      feet: {
        fontSize: '1.2rem',
        display: 'inline',
        padding: 30,
      },
      feetLinks: {
        color: "white",
        textDecoration: "none",
      }
};

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.feet} ><a style={styles.feetLinks} href="https://mollymoo002.github.io/H2-Portfolio/" target="_blank">Portfolio</a></div>
      <div style={styles.feet}><a style={styles.feetLinks} href="https://github.com/mollymoo002" target="_blank">Github</a></div>
    </div>
  );
}

export default Footer;