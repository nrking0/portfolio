import React, {useState, useEffect} from 'react';
import { Element } from 'react-scroll';
import './About.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import LanguageIcon from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';


const About = (props) => {

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const size = useWindowSize();

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
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <p>August 2020 - Present</p>
                    <p>GPA: 4.0/4.0</p>
                    <h3>University High School, Normal Illinois</h3>
                    <p>August 2016 - May 2020</p>
                    <p>GPA: 4.0/4.0, Valedictorian, National AP Scholar</p>
                </div>
                {(size.width > 1200) ? (
                    <Divider orientation="vertical" flexItem={true}></Divider>
                ):(
                    <Divider orientation="horizontal" ></Divider>
                )}
                <div className="column2">
                    <StarIcon fontSize="large"></StarIcon>
                    <h1>Awards</h1>
                    <p>University of Illinois Campus Honors Program Chancellor's Scholar</p>
                    <p>University of Illinois James Scholar</p>
                    <p>State Farm Foundations Scholar</p>
                    <p>National Speech and Debate Association <br/>National 5th Place in Impromptu Spekaing</p>
                    <p>National Speech and Debate Association Academic All-American</p>
                </div>
                {(size.width > 1200) ? (
                    <Divider orientation="vertical" flexItem={true}></Divider>
                ):(
                    <Divider orientation="horizontal"></Divider>
                )}
                <div className="column3">
                    <LanguageIcon fontSize="large"></LanguageIcon>
                    <h1>Skills</h1>
                    <h3>Languages</h3>
                    <p>Spanish, Java, HTML/CSS, SQL, Python, JavaScript, Bash</p>
                    <h3>Frameworks</h3>
                    <p>Django, React, Node.js, Express.js, PostgreSQL, Heroku</p>
                </div>
            </div>
        </Element>
    )
};

export default About;