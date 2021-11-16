import React from 'react';
import photos from '../resources/Photo.jpg'

const styles = {
    titles: {
        textAlign: "center",
        fontSize: 60
    },
    aboutDesc: {
        textAlign: "center",
        fontSize: 20
    },
    photo: {
        height: 400,
        borderRadius: "60px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: 600
    }
}

export default function About() {
    return (
        <div>
            <h1 style={styles.titles}>Molly Singmaster</h1>
            <p style={styles.aboutDesc}>I am 29 years old studying to become a web developer. I live in Pennsylvania with my husband, Dennis.</p>
            <p style={styles.aboutDesc}>Skills: JavaScript, CSS, HTML, JQuery, React, Web APIs, Express.js, Node.js, SQL, MongoDB, Bootstrap</p>
            <img style={styles.photo}src={photos} alt="Photo of Molly"/>
        </div>
    );
}