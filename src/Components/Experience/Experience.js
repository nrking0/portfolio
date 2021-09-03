import React, { useState } from "react";
import Slideshow from "./Slideshow.js";
import "./Experience.css";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";
import { MdExpandMore } from "react-icons/md";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    withStyles,
    Button,
    Card,
    CardContent,
    Typography,
    makeStyles
} from "@material-ui/core";

const MuiAccordionSummary = withStyles({
    content: {
        justifyContent: "center"
    }
})(AccordionSummary);

const useStyles = makeStyles({
    root: {
        marginBottom: 10,
        backgroundColor: "white"
    },
    title: {
        fontSize: 14,
        color: "black"
    },
    pos: {
        marginBottom: 10,
        color: "black"
    }
});

const activities = [
    {
        type: "Work",
        title: "State Farm Insurance Company",
        role: "Information Secuirty Intern",
        date: "May 2021 - Present",
        description:
            "Over the Summer of 2021 I worked as an intern for State Farm Insurance in the Information Security Department. More specifically, I worked on the Vulnerability Response and Reporting Team. With my team I identified, analyzed, and remediated Enterprise-Wide vulnerabilities and worked on a variety of projects. Additionally, I was asked to stay on as an Intern during the school year, and I will continuing my role on the same team for Fall 2021."
    },
    {
        type: "Work",
        title: "Honors Introduction to Computer Science",
        role: "Project Manager and Course Assistant",
        date: "January 2021 – May 2021",
        description:
            "For Spring semester 2021, I was selected to be a project manager for the honors section of introduction to computer science (CS 196). I am managing a small project group to build a full stack application that analyzes stock data. Additionally, I help out with the course by running office hours and helping students."
    },
    {
        type: "Work",
        title: "Gene's Ice Cream",
        role: "Shift Lead",
        date: "March 2018 – August 2020",
        description:
            "Over the past three years, I worked at an ice cream shop while I was in high school. I worked across all roles in the stores, while maintaining an important focus on customer service. I eventually moved towards a leadership role, where I have helped manage shifts and lead different tasks during our work. I have counted the cash in the drawers at the end shifts, and I helped look into new items that we could sell at the store."
    },
    {
        type: "Curriculars",
        title: "Association for Computing Machinery",
        role: "Special Interest Group for Information Security Member",
        date: "August 2020 – Present",
        description:
            "Throughout ACM I have had many opportunities to learn more about the amazing world of Computer Science! Within the special interest group for information security I have learned a lot about best practices and vulnerabilities within our current technologies. Additionally, I have been able to work on projects with other students for things we care about. For example, this Fall I am working with a team within ACM to build an Android App that can help communicate important voter information to students and help them register to vote."
    },
    {
        type: "Curriculars",
        title: "Marching Illini",
        role: "Trumpet Section Member",
        date: "August 2020 – Present",
        description:
            "In the Summer of 2020 I auditioned for, and eventually was accepted into, the Marching Illini. While our season looks a little different due to COVID-19, we still have many responsibilities. We learn a large repertoire, which we would normally play at each football game. Beyond that, we work on marching fundamentals, leadership development, and simply bonding more as a band."
    },
    {
        type: "Curriculars",
        title: "Campus Honors Program Honors Student Council",
        role: "Academic Engagement Committee Member",
        date: "August 2020 – Present",
        description:
            "At the beginning of the 2020 school year I decided to join the Honors Student Council. Through the Academic Engagement Committee I have planned events to help bring students academic resources and help them meet professors. I have set up meet-and-greets and talks between students and professors and publicized the events to garner wider engagement."
    },
    {
        type: "Curriculars",
        title: "University High School Student Senate",
        role: "Student Body Vice President",
        date: "August 2016 - May 2020",
        description:
            "Throughout all four years in high school I was elected to my school's Student Senate. In my senior year I was elected as Student Body Vice President. I organized many events during my time in Senate including dances, fundraisers, and school spirit events. Additionally, in my senior year I became the coordinator of our biannual Red Cross blood drive. I helped organize the event and get as many donors as possible. We ended up getting more donors than the past two years combined my senior year!"
    },
    {
        type: "Curriculars",
        title: "University High School Speech Team",
        role: "Captain",
        date: "August 2016 – May 2020",
        description:
            "As a member of the Speech team I competed mainly in impromptu and extemporaneous speaking. I competed across the national circuit where I performed in a national final, two state finals, a tournament of champions final, and a tournament of champions semifinal. In my senior year, I worked to introduce the team culture to new members and bring more people into my events. During my senior year our team finished as a top twenty school in the nation at the national tournament."
    },
    {
        type: "Courses",
        title: "Software Design Studio",
        role: "CS126",
        date: "Spring 2021",
        description:
            "Project-based course focused on teaching programing techniques and style fundamentals for creating larger projects."
    },
    {
        type: "Courses",
        title: "Discrete Structures",
        role: "CS173",
        date: "Spring 2021",
        description:
            "Course examining important mathematical fundamentals of Computer Science and their applications."
    },
    {
        type: "Courses",
        title: "Statistics and Probability",
        role: "STAT400",
        date: "Spring 2021",
        description:
            "Advanced introduction course for statistics and probability."
    },
    {
        type: "Courses",
        title: "Applied Linear Algebra",
        role: "MATH415",
        date: "Fall 2020",
        description:
            "Advanced Math course covering Linear Algebra with a special coding lab in python to apply linear algebra principles in computer science."
    },
    {
        type: "Courses",
        title: "Introduction to Computer Science (Java)",
        role: "CS125",
        date: "Fall 2020",
        description:
            "Introduction course to programing and computer science principles taught in java."
    }
];

const Experience = () => {
    const classes = useStyles();

    function handleClick(s) {
        setTimeout(() => {
            setSection(s);
        }, 250);
    }

    const [section, setSection] = useState("Work");

    return (
        <Element id="Experience">
            <Fade bottom cascade>
                <h1>What I Have Done</h1>
                <div className="descrip">
                    <h4>
                        Throughout my time in high school, and now in college, I
                        have participated in a wide variety of extracurriculars,
                        volunteering, and work experiences. I always have loved
                        trying new things, and that mantra has followed through
                        to many of my extracurriculars. While I do have a strong
                        foundation with activities in Computer Science, I have
                        always loved having experiences in a wide variety of
                        disciplines. Whether it is working on a new project or
                        serving ice cream, I always put my all into whatever I
                        do!
                    </h4>
                </div>
            </Fade>
            <Fade bottom>
                {section === "Work" ? (
                    <div className="toggleBar">
                        <Button
                            style={{ margin: "1%" }}
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                handleClick("Work");
                            }}>
                            Work Experience
                        </Button>
                        <Button
                            style={{ margin: "1%" }}
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                                handleClick("Curriculars");
                            }}>
                            Extra-Curriculars
                        </Button>
                        <Button
                            style={{ margin: "1%" }}
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                                handleClick("Courses");
                            }}>
                            Relevant Coursework
                        </Button>
                    </div>
                ) : (
                    <>
                        {section === "Curriculars" ? (
                            <div className="toggleBar">
                                <Button
                                    style={{ margin: "1%" }}
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        handleClick("Work");
                                    }}>
                                    Work Experience
                                </Button>
                                <Button
                                    style={{ margin: "1%" }}
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        handleClick("Curriculars");
                                    }}>
                                    Extra-Curriculars
                                </Button>
                                <Button
                                    style={{ margin: "1%" }}
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        handleClick("Courses");
                                    }}>
                                    Relevant Coursework
                                </Button>
                            </div>
                        ) : (
                            <>
                                {section === "Courses" ? (
                                    <div className="toggleBar">
                                        <Button
                                            style={{ margin: "1%" }}
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => {
                                                handleClick("Work");
                                            }}>
                                            Work Experience
                                        </Button>
                                        <Button
                                            style={{ margin: "1%" }}
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => {
                                                handleClick("Curriculars");
                                            }}>
                                            Extra-Curriculars
                                        </Button>
                                        <Button
                                            style={{ margin: "1%" }}
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                                handleClick("Courses");
                                            }}>
                                            Relevant Coursework
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="toggleBar">
                                        <Button
                                            style={{ margin: "1%" }}
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => {
                                                handleClick("Work");
                                            }}>
                                            Work Experience
                                        </Button>
                                        <Button
                                            style={{ margin: "1%" }}
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => {
                                                handleClick("Curriculars");
                                            }}>
                                            Extra-Curriculars
                                        </Button>
                                        <Button
                                            style={{ margin: "1%" }}
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => {
                                                handleClick("Courses");
                                            }}>
                                            Relevant Coursework
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
                <div className="experienceMain">
                    <div className="slideshow">
                        <Slideshow />
                    </div>

                    <div className="paperList">
                        {activities.map((activity) => (
                            <Fade collapse when={section === activity.type}>
                                <div style={{ marginBottom: "2%" }}>
                                    <Card
                                        className={classes.root}
                                        elevation={3}>
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                component="h2">
                                                {activity.title}
                                            </Typography>
                                            <Typography
                                                className={classes.pos}
                                                color="inherit">
                                                {activity.role}
                                            </Typography>
                                            <Typography
                                                className={classes.pos}
                                                color="inherit">
                                                {activity.date}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                component="p">
                                                {activity.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Fade>
                        ))}
                    </div>

                    <div className="accordion">
                        {activities.map((activity) => (
                            <>
                                {activity.type === "Courses" ? (
                                    <></>
                                ) : (
                                    <Accordion>
                                        <MuiAccordionSummary
                                            expandIcon={<MdExpandMore />}>
                                            {activity.title}
                                        </MuiAccordionSummary>
                                        <AccordionDetails
                                            style={{
                                                display: "flex",
                                                flexDirection: "column"
                                            }}>
                                            <h4>
                                                {activity.role}
                                                <br />
                                                {activity.date}
                                            </h4>
                                            <p>{activity.description}</p>
                                        </AccordionDetails>
                                    </Accordion>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </Fade>
        </Element>
    );
};

export default Experience;
