import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import { FormatAlignJustify } from '@material-ui/icons';

const Projects = (props) => {

    return (
        <Element id="Projects" name="Projects">
            <h1>What I Have Worked On</h1>
            <section style={{margin: 'auto', justifyContent: 'center'}}class="main items">
                    <article style={{width: '40vh', marginBottom: '5%'}} class="item">
                        <header>
                            <a href="https://voteuhigh.herokuapp.com"><img className="voteImage" src={require('../../Images/voteuhigh.png')} alt="" /></a>
                            <h3>Vote U-High</h3>
                        </header>
                        <p>This is a project about... ajfhald;hfjakls;hlk;dasfh fkdlhdfjalk;dsfkl;sdfhkl ;dsfanjdsf kl;fdcvjndksla;jfkl ;sdnfkml,sdaf; nklas;nfkl;</p>

                        <a href="https://voteuhigh.herokuapp.com" class="button">Learn More</a>
                    </article>
                
                    <article style={{width: '40vh', marginBottom: '5%'}} className="item">
                        <header>
                            <a href="https://studentsmeet.herokuapp.com"><img src={require('../../Images/headshot2.jpeg')} alt="" /></a>
                            <h3>Students Meet</h3>
                        </header>
                        <p>This is a project about... ajfhald;hfjakls;hlk;dasfh fkdlhdfjalk;dsfkl;sdfhkl ;dsfanjdsf kl;fdcvjndksla;jfkl ;sdnfkml,sdaf; nklas;nfkl;</p>

                        <a href="https://studentsmeet.herokuapp.com" class="button">Learn More</a>
                    </article>
            </section>
        </Element>
    )
};

export default Projects;