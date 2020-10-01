import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';

function App() {
  return (
    <div className="App">
      <div>
      <Sidebar />
      </div>
      <div className="appContainer">
      <Home />
      <About />
      <Projects />
      </div>
    </div>
  );
}

export default App;
