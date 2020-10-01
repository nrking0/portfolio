import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import Button from '@material-ui/core/Button';

const Projects = (props) => {

    return (
        <Element id="Projects" name="Projects">
            <h1>What I Have Worked On</h1>
            <p className="pDescrip">I have worked on a wide variety of projects. My main focus for big projects over the past year has been on web-development. I have utilized multiple frameworks in many different languages. 
            My projects have included front-end and back-end work from myself. Additionally, I am always continuing to find new projects to work on in web-development and in other areas such as information security and machine learning. 
            Here are some of my most recent works!</p>
            <section style={{margin: 'auto', justifyContent: 'center'}}class="main items">
                    <article style={{width: '40vh', marginBottom: '5%'}} class="item">
                        <header>
                            <a href="https://voteuhigh.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="voteImage" src={require('../../Images/voteuhigh.png')} alt="" /></a>
                            <h3>Vote U-High</h3>
                        </header>
                        <p>This is a website I created to run a mock election at my high school. I used Django as the framework for the front and back end and utilized a PostgreSQL database for all of the data. I used a user authentication system to ensure ensure only real students could vote and that they could only vote once.</p>
                        <Button href="https://voteuhigh.herokuapp.com" variant="contained" color="primary" target="_blank">Visit Site</Button>
                    </article>
                
                    <article style={{width: '40vh', marginBottom: '5%'}} className="item">
                        <header>
                            <a href="https://studentsmeet.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="voteImage" src={require('../../Images/studentsmeet.png')} alt="" /></a>
                            <h3>Students Meet</h3>
                        </header>
                        <p>This is a PERN stack web application I created with Amit Sawhney for the 2020 HackIllinois Hackathon. It uses a custom made algorithm to match students with mentors in common areas. We also designed a custom backend with a PostgreSQL database and Express.js app for communication to store and present the data.</p>
                        <Button href="https://studentsmeet.herokuapp.com" variant="contained" color="primary" target="_blank">Visit Site</Button>
                    </article>

                    <article style={{width: '40vh', marginBottom: '5%'}} className="item">
                        <header>
                            <a href="https://nrking0.github.io/HackIllinoisChallenge/" target="_blank" rel="noopener noreferrer"><img className="voteImage" src={require('../../Images/hackillinois.png')} alt="" /></a>
                            <h3>HackIllinois Challenge</h3>
                        </header>
                        <p>This is a project I did for a HackIllinois Front-End Challenge. It is a React Application that takes a JSON from the HackIllinois API and puts it into a scheduler.</p>
                        <br/><br/><br/>
                        <Button href="https://nrking0.github.io/HackIllinoisChallenge/" variant="contained" color="primary" target="_blank">Visit Site</Button>
                    </article>
            </section>
            <Button href="https://nrking0.github.io/HackIllinoisChallenge/" variant="contained" color="primary" target="_blank">View Source Code on GitHub</Button>
        </Element>
    )
};

export default Projects;