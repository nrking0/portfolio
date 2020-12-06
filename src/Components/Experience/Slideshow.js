import React, { useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';


const Slideshow = (props) => {

    let imgLen = 5;
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


    return(
        <h1>{image}</h1>
    );
};

export default Slideshow;