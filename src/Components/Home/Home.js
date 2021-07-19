import React from "react";
import "./Home.css";
import { Element } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-scroll";

const Home = () => (
    <Element id="Home">
        <div className="base">
            <h1>Hello, I am Nick!</h1>
            <p>Student and Developer</p>
            <div className="arrow">
                <Link
                    className="arrows"
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={1200}>
                    <ExpandMoreIcon
                        className="arrows"
                        fontSize="large"
                        color="inherit"
                    />
                </Link>
            </div>
        </div>
    </Element>
);

export default Home;
