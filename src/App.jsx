import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import CoolCharacter from './components/CoolCharacter/CoolCharacter';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Hero from './components/Hero/Hero';
import './App.css'
import Contact from './components/Contact/contact';

const myName = "Brendan Lauck"
const aboutTitle = "About me"
const projectsTitle = "Projects"
const contactTitle = "Reach out"

function App() {
  // try to default to user prefered color theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme)
  };

  // this is only invoked when the theme variable is updated
  useEffect(() => {
    document.documentElement.setAttribute("color-theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Reach out</a>
        <button onClick={toggleTheme} className='theme-toggle-btn'>
          <img src="/personal-site/day-and-night.svg" alt="Toggle Theme" width="20" height="20" />
        </button>
      </nav>

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <h1>
          {
            aboutTitle.split("").map((char, index) => (
              <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
            ))
          }
        </h1>
        <div className="about-me-section">
          <p className="about-me-summary">
            I'm a software engineer with 7+ years of experience building backend services, cloud infrastructure, and full-stack applications. I'm particularly interested in distributed systems, reliability, and designing software that continues to perform under scale. Outside of engineering, I train Brazilian Jiu-Jitsu, travel, and build side projects to explore new technologies and sharpen my skills.
          </p>
          <img className="about-me-image" src={`${import.meta.env.BASE_URL}/me.jpeg`} alt="A picture of a pensive Brendan" />
        </div>
      </section>

      <section id="projects">
        <h1>
          {
            projectsTitle.split("").map((char, index) => (
              <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
            ))
          }
        </h1>
        <ProjectCard
          title="JobFlow (🚧 In Progress)"
          description="A web app for visualizing application pipeline data."
          tech={["React", "FastAPI", "AWS", "PostgreSQL"]}
          image={`${import.meta.env.BASE_URL}/sankey.png`}
          websiteUrl="https://brendanonymous.github.io/personal-site/"
          sourceUrl="https://github.com/brendanonymous/jobflow"
        />
        <ProjectCard
          title="Pop Topics"
          description="A full-stack web application that aggregates trending topics from Reddit and other online communities, helping users discover emerging discussions and content in real time."
          tech={["React", "Go", "AWS"]}
          image={`${import.meta.env.BASE_URL}/pop-topics-bubbles.png`}
          websiteUrl="https://brendanonymous.github.io/pop-topics/"
          sourceUrl="https://github.com/brendanonymous/pop-topics"
        />
      </section>
        
      <section id="contact">
        <h1>
          {
            contactTitle.split("").map((char, index) => (
              <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
            ))
          }
        </h1>
        <Contact />
      </section>
    </>
  );
}

export default App
