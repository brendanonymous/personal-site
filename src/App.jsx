
import Button from './components/Button/Button';
import CoolCharacter from './components/CoolCharacter/CoolCharacter';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Toolbox from './components/Toolbox/Toolbox'
import { useState, useEffect } from 'react';
import './App.css'
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <About />
      <Projects />
      <Toolbox theme={theme} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
