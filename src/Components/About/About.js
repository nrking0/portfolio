import React from 'react';
import { Element } from 'react-scroll';
import './About.css';


const About = (props) => {

    return(
        <Element id="About" name="About">
            <div className="AboutText">
            <h1>About Me</h1>
            </div>
            <div className="description">
                <p>I have always been who has craved trying new things. </p>
            </div>
        </Element>
    )
};

export default About;