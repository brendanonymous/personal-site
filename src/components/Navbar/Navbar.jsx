import { useState, useEffect } from 'react';

export default function Navbar({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#toolbox">Toolbox</a>
            <a href="#contact">Contact</a>
            <button onClick={toggleTheme} className='theme-toggle-btn'>
            <img src="/personal-site/day-and-night.svg" alt="Toggle Theme" width="20" height="20" />
            </button>
        </nav>
    );
}