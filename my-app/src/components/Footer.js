import React from 'react';

const styles = {
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
      },
      feet: {
        fontSize: '1.2rem',
        display: 'inline',
        padding: 30,
      }
};

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.feet}><a href="https://mollymoo002.github.io/H2-Portfolio/" target="_blank">Portfolio</a></div>
      <div style={styles.feet}><a href="https://github.com/mollymoo002" target="_blank">Github</a></div>
    </div>
  );
}

export default Footer;