import { useEffect, useRef } from 'react';
import '../App.css';

const Skills = () => {
    const skillsRef = useRef(null);

    const skills = [
        { name: 'HTML', icon: 'fab fa-html5', level: 90 },
        { name: 'CSS', icon: 'fab fa-css3-alt', level: 85 },
        { name: 'JavaScript', icon: 'fab fa-js', level: 80 },
        { name: 'Java', icon: 'fab fa-java', level: 75 },
        { name: 'React', icon: 'fab fa-react', level: 70 },
        { name: 'Git', icon: 'fab fa-git-alt', level: 80 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach((bar) => {
                            const width = bar.style.width;
                            bar.style.width = '0';
                            setTimeout(() => {
                                bar.style.width = width;
                            }, 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid" ref={skillsRef}>
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="skill-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="skill-icon">
                                <i className={skill.icon}></i>
                            </div>
                            <h3>{skill.name}</h3>
                            <div className="skill-level">
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <span className="skill-percent">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;


