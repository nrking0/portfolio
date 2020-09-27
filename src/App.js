import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/sidebar.js';
import Home from './Components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <div>
      <Sidebar />
      </div>
      <div className="test">
      <Home />
      </div>
    </div>
  );
}

export default App;
