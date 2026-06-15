import { useState, useEffect } from 'react';
import "./Navbar.css"
import ThemeToggle from '../ThemeButton/ThemeToggle';

export default function Navbar({ theme, setTheme }) {
    

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#toolbox">Toolbox</a>
                <a href="#contact">Contact</a>
            </div>
            <ThemeToggle />
        </nav>
    );
}