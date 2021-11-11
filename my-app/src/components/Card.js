import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        `My name is Molly and I am a 29 year old web developer. I have a husband Dennis that I married
        right in the beginning of 2019. I am an avid learner and an even more avid video game player.`
      </div>
    </div>
  );
}

export default Card;
