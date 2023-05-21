import React from 'react';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <div className="content-container">
        <HomePage />
        <About />
        <Skill />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </div>
  );
}

export default App;
