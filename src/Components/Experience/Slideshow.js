import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import Fade from 'react-reveal/Fade';


const Slideshow = (props) => {

    let imgLen = 2;
    const [image, setImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (image === imgLen) {
                setImage(0);
            } else {
                setImage(image => image + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [image, imgLen]);


    return (
        <div className="slides">
            <Fade right opposite when={image === 0}><img className="voteImage" src={require('../../Images/voteuhigh.png')} alt="" /></Fade>
            <div className="testDiv">
            <Fade right opposite when={image === 1}><img className="test" src={require('../../Images/hackillinois.png')} alt="" /></Fade>
            </div>
        </div>
    );
};

export default Slideshow;