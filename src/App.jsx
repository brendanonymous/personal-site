
import Button from './components/Button/Button';
import CoolCharacter from './components/CoolCharacter/CoolCharacter';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import './App.css'
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App
