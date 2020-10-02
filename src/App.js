import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Loading from './Components/Loading/Loading.js';
import FadeIn from "react-fade-in";

function App() {
  return (

    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div className="appContainer">
        <FadeIn>
          <Home />
          <About />
          <Projects />
        </FadeIn>
      </div>
    </div>
  );
}

export default Loading(App);
