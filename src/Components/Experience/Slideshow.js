import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import Fade from 'react-reveal/Fade';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const Slideshow = (props) => {

    let imgLen = 6;
    
    const [reverse, setReverse] = useState(false);
    const [image, setImage] = useState(0);

    function handleClick(dir) {
        if (dir < 0) {
            setReverse(true);
            if (image === 0) {
                setImage(imgLen);
            } else {
                setImage(image => image - 1);
            }
        } else {
            if (image === imgLen) {
                setImage(0);
            } else {
                setImage(image => image + 1);
            }
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setReverse(false);
          }, 500);
        const interval = setInterval(() => {
            if (image === imgLen) {
                setImage(0);
            } else {
                setImage(image => image + 1);
            }
        }, 5000);
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        }
    }, [image, imgLen]);


    return (
        <div className="container">
            <IconButton onClick={() => handleClick(-1)}><ArrowBackIosIcon /></IconButton>
            {reverse ? (
            <div className="slides">
                <Fade left opposite when={image === 0}><img className="image" src={require('../../Images/MISection.png')} alt="" /></Fade>
                <div className="imageDiv">
                    <Fade left opposite when={image === 1}><img className="image2" src={require('../../Images/alma.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade left opposite when={image === 2}><img className="image3" src={require('../../Images/genes.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade left opposite when={image === 3}><img className="image4" src={require('../../Images/mathTeam.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade left opposite when={image === 4}><img className="image5" src={require('../../Images/DGSAward.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade left opposite when={image === 5}><img className="image6" src={require('../../Images/speechTOC.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade left opposite when={image === 6}><img className="image7" src={require('../../Images/speechNationals.png')} alt="" /></Fade>
                </div>
            </div>
            ) : (
            <div className="slides">
                <Fade right opposite when={image === 0}><img className="image" src={require('../../Images/MISection.png')} alt="" /></Fade>
                <div className="imageDiv">
                    <Fade right opposite when={image === 1}><img className="image2" src={require('../../Images/alma.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade right opposite when={image === 2}><img className="image3" src={require('../../Images/genes.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade right opposite when={image === 3}><img className="image4" src={require('../../Images/mathTeam.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade right opposite when={image === 4}><img className="image5" src={require('../../Images/DGSAward.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade right opposite when={image === 5}><img className="image6" src={require('../../Images/speechTOC.png')} alt="" /></Fade>
                </div>
                <div className="imageDiv">
                    <Fade right opposite when={image === 6}><img className="image7" src={require('../../Images/speechNationals.png')} alt="" /></Fade>
                </div>
            </div>
            )}
            <IconButton onClick={() => handleClick(1)}><ArrowForwardIosIcon /></IconButton>
        </div>
    );
};

export default Slideshow;