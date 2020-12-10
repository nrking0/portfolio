import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import Fade from 'react-reveal/Fade';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const Slideshow = (props) => {

    let imgLen = 2;
    
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
                <Fade left opposite when={image === 0}><img className="test" src={require('../../Images/voteuhigh.png')} alt="" /></Fade>
                <div className="testDiv">
                    <Fade left opposite when={image === 1}><img className="test" src={require('../../Images/hackillinois.png')} alt="" /></Fade>
                </div>
                <div className="testDiv">
                    <Fade left opposite when={image === 2}><img className="test2" src={require('../../Images/headshot.jpeg')} alt="" /></Fade>
                </div>
            </div>
            ) : (
            <div className="slides">
                <Fade right opposite when={image === 0}><img className="test" src={require('../../Images/voteuhigh.png')} alt="" /></Fade>
                <div className="testDiv">
                    <Fade right opposite when={image === 1}><img className="test" src={require('../../Images/hackillinois.png')} alt="" /></Fade>
                </div>
                <div className="testDiv">
                    <Fade right opposite when={image === 2}><img className="test2" src={require('../../Images/headshot.jpeg')} alt="" /></Fade>
                </div>
            </div>
            )}
            <IconButton onClick={() => handleClick(1)}><ArrowForwardIosIcon /></IconButton>
        </div>
    );
};

export default Slideshow;