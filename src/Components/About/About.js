import React from 'react';
import { Element } from 'react-scroll';
import './About.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import LanguageIcon from '@material-ui/icons/Language';



const About = (props) => {

    return (
        <Element id="About" name="About">
            <div className="AboutText">
                <h1>About Me</h1>
            </div>
            <div className="description">
                <p>Ever since I was introduced to computer programming in high school, I have been infatuated with being able to manipulate computers
                and create new programs. Naturally, I decided to follow that enamoration for computers to the Computer Science department at the University
                of Illinois at Urbana-Champaign. Being someone who is still deeply committed to interdisciplinary thinking and the liberal arts, I have been able
                to cross apply the concepts of computer science to the rest of the world through my major of Mathematics and Computer Science. Whether it is examining
                mathematical proofs or using my coursework in economics to write predictive algorithms, I can help bring in concepts of computer science to a wide variety of disceplines.</p>
                <br />
                <p>I have lots of experience in front-end and back-end web-development, and I have worked in areas from basic computers programs all the way to modern information security.
                I am a great communicator and have lots of leadership experience. I would love for you to get to know me more!</p>
            </div>
            <div className="myInfo">
                <div className="column1">
                    <SchoolIcon fontSize="large"></SchoolIcon>
                    <h1>Education</h1>
                </div>
                <div className="column2">
                    <StarIcon fontSize="large"></StarIcon>
                    <h1>Awards</h1>
                </div>
                <div className="column3">
                    <LanguageIcon fontSize="large"></LanguageIcon>
                    <h1>Skills</h1>
                </div>
            </div>
        </Element>
    )
};

export default About;