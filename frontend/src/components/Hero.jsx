import { useState, useEffect } from 'react';
import '../App.css';

const Hero = () => {
    const [currentRole, setCurrentRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const roles = [
        'Frontend Developer',
        'Student',
        'Software Engineer',
        'Web Developer'
    ];

    useEffect(() => {
        const type = () => {
            const currentRoleText = roles[roleIndex];

            if (isDeleting) {
                setCurrentRole(currentRoleText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                setCurrentRole(currentRoleText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }

            if (!isDeleting && charIndex === currentRoleText.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        };

        const timer = setTimeout(type, 1000);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="greeting">Hi, I'm</p>
                        <h1 className="hero-name"><span className="name-highlight">Your Name</span></h1>
                        <h2 className="hero-role">
                            <span className="typing-text">{currentRole}</span>
                            <span className="cursor">|</span>
                        </h2>
                        <p className="hero-description">Passionate about creating beautiful and functional web experiences. I transform ideas into reality through code.</p>
                        <div className="hero-buttons">
                            <a href="#resume" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>
                                <i className="fas fa-download"></i> Download Resume
                            </a>
                            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                                <i className="fas fa-envelope"></i> Contact Me
                            </a>
                        </div>
                        <div className="hero-social">
                            <a href="#" className="hero-social-link" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="hero-social-link" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="hero-social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="hero-social-link" aria-label="Email">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <img 
                                src={`${import.meta.env.BASE_URL}images/profile-photo.jpg`} 
                                alt="Profile Photo" 
                                className="profile-photo" 
                                id="profile-photo" 
                                onError={(e) => { 
                                    console.error('Image failed to load:', e.target.src);
                                    e.target.src = 'https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Your+Photo'; 
                                }}
                                onLoad={() => console.log('Image loaded successfully')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

