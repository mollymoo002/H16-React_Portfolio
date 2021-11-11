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
      <div style={styles.feet}>Portfolio</div>
      <div style={styles.feet}>Github</div>
    </div>
  );
}

export default Footer;