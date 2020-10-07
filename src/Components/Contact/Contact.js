import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));



const Contact = (props) => {
    const classes = useStyles();

    return( 
        <Element id="Contact">
            <Fade bottom cascade>
            <h1>Want to talk more?</h1> 
            <h2>Let's get in touch!</h2> 
            </Fade>  
                <Fade cascade bottom>
            <div className = "buttons">
                <Button variant="contained" color="secondary" className={classes.button} startIcon={<MailIcon />}>E-Mail</Button>
                <Button variant="contained" color="secondary" className={classes.button} startIcon={<LinkedInIcon />}>LinkedIn</Button>
                <Button variant="contained" color="secondary" className={classes.button} startIcon={<GitHubIcon />}>GitHub</Button>
                <Button variant="contained" color="secondary" className={classes.button} startIcon={<DescriptionIcon />}>Resume</Button>
            </div> 
                </Fade>
        </Element>
    )
};

export default Contact;
