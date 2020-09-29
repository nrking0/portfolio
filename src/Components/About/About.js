import React from 'react';
import { Element } from 'react-scroll';
import './About.css';


const About = (props) => {

    return(
        <Element id="About" name="About">
            <div className="AboutText">
            <h1>About Me</h1>
            </div>
        </Element>
    )
};

export default About;