import { useState, useEffect } from 'react';

export default function Navbar() {

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
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Reach out</a>
            <button onClick={toggleTheme} className='theme-toggle-btn'>
            <img src="/personal-site/day-and-night.svg" alt="Toggle Theme" width="20" height="20" />
            </button>
        </nav>
    )
}