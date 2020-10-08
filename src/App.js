import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/sidebar.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Loading from './Components/Loading/Loading.js';
import Experience from './Components/Experience/Experience.js';
import FadeIn from "react-fade-in";
import Contact from './Components/Contact/Contact.js';
import ReactGA from 'react-ga';


function App() {
  useEffect(() => {
    ReactGA.initialize('UA-180161846-1');
    ReactGA.pageview('/Home');
    // eslint-disable-next-line
  }, []);
  return (

    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div className="appContainer">
        <FadeIn>
          <Home />
          </FadeIn>
          <About />
          <Projects />
          <Experience />
          <Contact />
        
      </div>
    </div>
  );
}

export default Loading(App);
