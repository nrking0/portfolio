import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';
import event from '../../utils/analytics';


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
                <Button href="mailto:nrking2@illinois.edu" variant="contained" color="secondary" className={classes.button} startIcon={<MailIcon />} onClick={()=> event({category: "Information", action: "Viewed Email", label: "Email Contact Section"})}>E-Mail</Button>
                <Button href="https://www.linkedin.com/in/nrking0" target="_blank" variant="contained" color="secondary" className={classes.button} startIcon={<LinkedInIcon />} onClick={()=> event({category: "Information", action: "Viewed LinkedIn", label: "LinkedIn Contact Section"})}>LinkedIn</Button>
                <Button href="https://github.com/nrking0" target="_blank" variant="contained" color="secondary" className={classes.button} startIcon={<GitHubIcon />} onClick={()=> event({category: "Information", action: "Viewed GitHub", label: "GitHub Contact Section"})}>GitHub</Button>
                <Button href="https://drive.google.com/file/d/1L2j00rdrF8nt2qiMFN22BBhOaMH77kVB/view?usp=sharing" target="_blank" variant="contained" color="secondary" className={classes.button} startIcon={<DescriptionIcon />} onClick={()=> event({category: "Information", action: "Viewed Resume", label: "Resume Contact Section"})}>Resume</Button>
            </div> 
                </Fade>
        </Element>
    )
};

export default Contact;
