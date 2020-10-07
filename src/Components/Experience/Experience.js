import React from 'react';
import './Experience.css';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import { MdExpandMore } from 'react-icons/md';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

const Experience = (props) => {

    return (
        <Element id="Experience">
            <Fade bottom cascade>
                <h1>What I Have Done</h1>
            </Fade>
            <div className="accordion">
            <Accordion>
                <AccordionSummary  expandIcon={<MdExpandMore />} > Chemistry</AccordionSummary>
                <AccordionDetails>
                    <p>Hello!</p>
                </AccordionDetails>
            </Accordion>
            </div>
        </Element>
    )
};

export default Experience;