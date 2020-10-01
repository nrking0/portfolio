import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import { FormatAlignJustify } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const Projects = (props) => {

    return (
        <Element id="Projects" name="Projects">
            <h1>What I Have Worked On</h1>
            <section style={{margin: 'auto', justifyContent: 'center'}}class="main items">
                    <article style={{width: '40vh', marginBottom: '5%'}} class="item">
                        <header>
                            <a href="https://voteuhigh.herokuapp.com" target="_blank"><img className="voteImage" src={require('../../Images/voteuhigh.png')} alt="" /></a>
                            <h3>Vote U-High</h3>
                        </header>
                        <p>This is a project about... ajfhald;hfjakls;hlk;dasfh fkdlhdfjalk;dsfkl;sdfhkl ;dsfanjdsf kl;fdcvjndksla;jfkl ;sdnfkml,sdaf; nklas;nfkl;</p>
                        <Button href="https://voteuhigh.herokuapp.com" variant="contained" color="primary" target="_blank">Visit Site</Button>
                        
                    </article>
                
                    <article style={{width: '40vh', marginBottom: '5%'}} className="item">
                        <header>
                            <a href="https://studentsmeet.herokuapp.com" target="_blank"><img className="voteImage" src={require('../../Images/studentsmeet.png')} alt="" /></a>
                            <h3>Students Meet</h3>
                        </header>
                        <p>This is a project about... ajfhald;hfjakls;hlk;dasfh fkdlhdfjalk;dsfkl;sdfhkl ;dsfanjdsf kl;fdcvjndksla;jfkl ;sdnfkml,sdaf; nklas;nfkl;</p>

                        <Button href="https://studentsmeet.herokuapp.com" variant="contained" color="primary" target="_blank">Visit Site</Button>
                    </article>
            </section>
            <Button href="https://www.github.com/nrking0" variant="contained" color="primary" target="_blank">View Source Code on GitHub</Button>
        </Element>
    )
};

export default Projects;