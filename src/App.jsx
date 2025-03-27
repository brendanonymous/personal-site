import { useState, useEffect } from 'react';
import Button from './components/Button';
import CoolCharacter from './components/CoolCharacter';
import './App.css'

const myName = "Brendan Lauck"

function App() {
  // try to default to user prefered color theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

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
      <div className="container">
        <h1>
          {
          myName.split("").map((char, index) => (
            <CoolCharacter className="cool-char" key={index} character={char === " " ? '\u00A0' : char} />
          ))
          }
        </h1>
        <button onClick={toggleTheme} className='theme-toggle-btn'>
          <img src="personal-site/day-and-night.svg" alt="Toggle Theme" width="24" height="24" />
        </button>
        <div className="button-row">
          <Button text="Resumé" link="resume.pdf" />
          <Button text="Github" link="https://github.com/brendanonymous" />
          <Button text="LinkedIn" link="https://linkedin.com/in/brendanlauck" />
          <Button text="Email Me" link="mailto:brendanlauck@yahoo.com" />
          <Button text="Instagram" link="https://www.instagram.com/brendanonymouss" />
          <Button text="Stay at My Place" link="https://airbnb.com/h/mountain-view-scottsdale" />
        </div>
      </div>

    </>
  );
}

export default App
