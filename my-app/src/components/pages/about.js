import React from 'react';
import resume from '../resources/Resume.pdf';

const styles = {
    titles: {
        textAlign: "center",
    },
    aboutDesc: {
        textAlign: "center",
    }
}

export default function About() {
    return (
        <div>
            <h1 style={styles.titles}>About Me</h1>
            <p style={styles.aboutDesc}>I am 29 years old studying to become a web developer. I live in Pennsylvania with my husband, Dennis</p>
            <p style={styles.aboutDesc}>Skills: JavaScript, CSS, HTML, JQuery, React, Web APIs, Express.js, Node.js, SQL, MongoDB, Bootstrap</p>
            <a href={resume} target="_blank">Resume</a>
        </div>
    );
}