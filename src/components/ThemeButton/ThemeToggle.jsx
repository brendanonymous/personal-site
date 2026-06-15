import "./ThemeToggle.css"

export default function ThemeToggle({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    return (
            <button onClick={toggleTheme} className='theme-toggle-button'>
                <img src={`${import.meta.env.BASE_URL}/day-and-night.svg`} alt="Toggle Theme" width="20" height="20" />
            </button>
        );
}