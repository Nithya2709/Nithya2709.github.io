import { useEffect, useRef } from 'react';
import '../App.css';

const PhotoSection = () => {
    const photoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (photoRef.current) {
            observer.observe(photoRef.current);
        }

        return () => {
            if (photoRef.current) {
                observer.unobserve(photoRef.current);
            }
        };
    }, []);

    return (
        <section id="photo" className="photo-section">
            <div className="container">
                <div className="photo-container" ref={photoRef}>
                    <div className="photo-frame">
                        <div className="photo-decoration photo-decoration-1"></div>
                        <div className="photo-decoration photo-decoration-2"></div>
                        <div className="photo-decoration photo-decoration-3"></div>
                        <div className="photo-decoration photo-decoration-4"></div>
                        <div className="photo-circle">
                            <div className="photo-ring photo-ring-1"></div>
                            <div className="photo-ring photo-ring-2"></div>
                            <div className="photo-ring photo-ring-3"></div>
                            <div className="photo-image-wrapper">
                                <img 
                                    src={`${import.meta.env.BASE_URL}images/profile-photo.jpg`} 
                                    alt="Profile Photo" 
                                    className="photo-main" 
                                    id="photo-main"
                                    onError={(e) => { 
                                        console.error('Image failed to load:', e.target.src);
                                        e.target.src = 'https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Your+Photo'; 
                                    }}
                                    onLoad={() => console.log('Photo section image loaded successfully')}
                                />
                                <div className="photo-overlay">
                                    <div className="photo-info">
                                        <h3>Your Name</h3>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;

