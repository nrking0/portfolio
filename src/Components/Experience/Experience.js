import React, { useState } from 'react';
import Slideshow from './Slideshow.js';
import './Experience.css';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import { MdExpandMore } from 'react-icons/md';
import { Accordion, AccordionSummary, AccordionDetails, withStyles, Button } from '@material-ui/core';


const MuiAccordionSummary = withStyles({
    content: {
        justifyContent: 'center'
    }
})(AccordionSummary);




const Experience = (props) => {

    function handleClick(s){
        setTimeout(() => {
            setSection(s)
        }, 190)
    };

    const [section, setSection] = useState("");

    return (
        <Element id="Experience">
            <Fade bottom cascade>
                <h1>What I Have Done</h1>
                <div className="descrip">
                    <h4>Throughout my time in high school, and now in college, I have participated in a wide variety of extracurriculars, volunteering, and work experiences. I always
                    have loved trying new things, and that mantra has followed through to many of my extracurriculars. While I do have a strong foundation with activities in Computer
                    Science, I have always loved having experiences in a wide variety of disciplines. Whether it is working on a new project or serving ice cream, I always put my all
                            into whatever I do!</h4>
                </div>
            </Fade>
            <Fade bottom>
                {section === "Work" ? (
                    <div className="toggleBar">
                        <Button style={{ margin: '1%' }} variant="contained" color="secondary" onClick={() => { handleClick("Work") }}>Work Experience</Button>
                        <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Curriculars") }}>Extra-Curriculars</Button>
                        <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Volunteer") }}>Volunteering</Button>
                    </div>
                ) : (
                        <>
                            {section === "Curriculars" ? (
                                <div className="toggleBar">
                                    <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Work") }}>Work Experience</Button>
                                    <Button style={{ margin: '1%' }} variant="contained" color="secondary" onClick={() => { handleClick("Curriculars") }}>Extra-Curriculars</Button>
                                    <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Volunteer") }}>Volunteering</Button>
                                </div>
                            ) : (
                                    <>
                                        {section === "Volunteer" ? (
                                            <div className="toggleBar">
                                                <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Work") }}>Work Experience</Button>
                                                <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Curriculars") }}>Extra-Curriculars</Button>
                                                <Button style={{ margin: '1%' }} variant="contained" color="secondary" onClick={() => { handleClick("Volunteer") }}>Volunteering</Button>
                                            </div>
                                        ) : (
                                                <div className="toggleBar">
                                                    <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Work") }}>Work Experience</Button>
                                                    <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Curriculars") }}>Extra-Curriculars</Button>
                                                    <Button style={{ margin: '1%' }} variant="outlined" color="secondary" onClick={() => { handleClick("Volunteer") }}>Volunteering</Button>
                                                </div>
                                            )}
                                    </>
                                )}
                        </>
                    )}
                <div className="experienceMain">
                    <div className="slideshow">
                        <Slideshow></Slideshow>
                    </div>
                    <div className="accordion">
                        <Accordion>
                            <MuiAccordionSummary expandIcon={<MdExpandMore />}>Association for Computing Machinery</MuiAccordionSummary>
                            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Special Interest Group for Information Security Member <br />August 2020 – Present</h4>
                                <p>Throughout ACM I have had many opportunities to learn more about the amazing world of Computer Science! Within the
                                special interest group for information security I have learned a lot about best practices and vulnerabilities within our current technologies.
                                Additionally, I have been able to work on projects with other students for things we care about. For example, this Fall I am working with a team within ACM to
                                build an Android App that can help communicate important voter information to students and help them register to vote.</p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <MuiAccordionSummary expandIcon={<MdExpandMore />}>Marching Illini</MuiAccordionSummary>
                            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Trumpet Section Member<br />August 2020 – Present</h4>
                                <p>In the Summer of 2020 I auditioned for, and eventually was accepted into, the Marching Illini. While our season looks a little different due to COVID-19, we still have many
                                responsibilities. We learn a large repertoire, which we would normally play at each football game. Beyond that, we work on marching fundamentals, leadership development, and
                                simply bonding more as a band.</p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <MuiAccordionSummary expandIcon={<MdExpandMore />}>Campus Honors Program Honors Student Council</MuiAccordionSummary>
                            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Academic Engagement Committee Member<br />August 2020 – Present</h4>
                                <p>At the beginning of the 2020 school year I decided to join the Honors Student Council. Through the Academic Engagement Committee I have planned events to help bring students
                                academic resources and help them meet professors. I have set up meet-and-greets and talks between students and professors and publicized the events to garner wider engagement.</p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <MuiAccordionSummary expandIcon={<MdExpandMore />}>Gene's Ice Cream</MuiAccordionSummary>
                            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Shift Lead<br />March 2018 – August 2020</h4>
                                <p>Over the past three years, I worked at an ice cream shop while I was in high school. I worked across all roles in the stores, while maintaining an important focus on customer
                                service. I eventually moved towards a leadership role, where I have helped manage shifts and lead different tasks during our work. I have counted the cash in the drawers
                                at the end shifts, and I helped look into new items that we could sell at the store.</p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <MuiAccordionSummary expandIcon={<MdExpandMore />}>University High School Student Senate</MuiAccordionSummary>
                            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Student Body Vice President<br />August 2016 - May 2020</h4>
                                <p>Throughout all four years in high school I was elected to my school's Student Senate. In my senior year I was elected as Student Body Vice President. I organized many events
                                during my time in Senate including dances, fundraisers, and school spirit events. Additionally, in my senior year I became the coordinator of our biannual Red Cross blood
                                drive. I helped organize the event and get as many donors as possible. We ended up getting more donors than the past two years combined my senior year!</p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <MuiAccordionSummary expandIcon={<MdExpandMore />}>University High School Speech Team</MuiAccordionSummary>
                            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Captain<br />August 2016 - May 2020</h4>
                                <p>As a member of the Speech team I competed mainly in impromptu and extemporaneous speaking. I competed across the national circuit where I performed in a national final,
                                two state finals, a tournament of champions final, and a tournament of champions semifinal. In my senior year, I worked to introduce the team culture to new members and
                                bring more people into my events. During my senior year our team finished as a top twenty school in the nation at the national tournament.</p>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </Fade>
        </Element>
    )
};

export default Experience;