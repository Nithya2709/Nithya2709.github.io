import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoSection from './components/PhotoSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
    useEffect(() => {
        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('.fade-up, .slide-in, .zoom-in');
        animatedElements.forEach(el => observer.observe(el));

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentScroll > 50) {
                if (currentTheme === 'dark') {
                    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
                } else {
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                }
                navbar.style.boxShadow = currentTheme === 'dark' 
                    ? '0 2px 20px rgba(0, 0, 0, 0.3)' 
                    : '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                if (currentTheme === 'dark') {
                    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                } else {
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                }
                navbar.style.boxShadow = currentTheme === 'dark' 
                    ? '0 2px 10px rgba(0, 0, 0, 0.3)' 
                    : '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <PhotoSection />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
