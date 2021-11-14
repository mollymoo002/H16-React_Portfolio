import React from 'react';
import fitness from '../resources/fitness.JPG';
import newTown from '../resources/newtotown.JPG';
import movie from '../resources/moviemeal.JPG';
import scheduler from '../resources/scheduler.JPG';
import note from '../resources/notetaker.JPG';

const styles = {
    title: {
        textAlign: "center",
        textDecoration: "underline",
        paddingTop: 30
    },
    projectImg: {
        height: "300px",
        width: "500px"
    },
}

export default function Projects() {
    return (
        <div>
            <h1 style={styles.title}>New 2 Town</h1>
            <img style={styles.projectImg} src={newTown}/>
            <p><a href="https://github.com/mollymoo002/new2town" target="_blank">Github repo</a></p>
            <p><a href="https://polar-garden-81010.herokuapp.com/login">Deployed App</a></p>

            <h1 style={styles.title}>Movie & Meal</h1>
            <img style={styles.projectImg} src={movie}/>
            <p><a href="https://github.com/mollymoo002/movie_meal" target="_blank">Github repo</a></p>
            <p><a href="https://mollymoo002.github.io/movie_meal/">Deployed App</a></p>

            <h1 style={styles.title}>Calendar App</h1>
            <img style={styles.projectImg} src={scheduler}/>
            <p><a href="https://github.com/mollymoo002/H5-Calendar" target="_blank">Github repo</a></p>
            <p><a href="https://mollymoo002.github.io/H5-Calendar/">Deployed App</a></p>

            <h1 style={styles.title}>Workout Tracker</h1>
            <img style={styles.projectImg} src={fitness}/>
            <p><a href="https://github.com/mollymoo002/H13-Workout_Tracker" target="_blank">Github repo</a></p>
            <p><a href="https://still-spire-04046.herokuapp.com/?id=61829627a420cd0016a7e68e" target="_blank">Deployed App</a></p>

            <h1 style={styles.title}>Note Taker</h1>
            <img style={styles.projectImg} src={note}/>
            <p><a href="https://github.com/mollymoo002/H9-Note-Taker-App" target="_blank">Github repo</a></p>
            <p><a href="https://aqueous-lake-69323.herokuapp.com/" target="_blank">Deployed App</a></p>

            <h1>Readme Generator</h1>
            <p><a href="https://github.com/mollymoo002/H7_README_Generator" target="_blank">Github repo</a></p>
        </div>
    )  
}