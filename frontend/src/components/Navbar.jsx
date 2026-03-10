import { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <div className="nav-logo">Portfolio</div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                    <li><a href="#photo" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('photo'); }}>Photo</a></li>
                    <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                    <li><a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
                    <li><a href="#achievements" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('achievements'); }}>Achievements</a></li>
                    <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                    <li><a href="#certificates" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>Certificates</a></li>
                    <li><a href="#resume" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>Resume</a></li>
                    <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                </ul>
                <div className="nav-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} id="theme-icon"></i>
                    </button>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


