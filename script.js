/* ================================================
   NITHYA SREE PORTFOLIO — script.js
   Smooth interactions, typing effect, scroll animations
================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Navbar scroll effect ---- */
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
        updateActiveLink();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });


    /* ---- Active nav link on scroll ---- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    }


    /* ---- Hamburger / Mobile menu ---- */
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });


    /* ---- Theme toggle ---- */
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon   = document.getElementById('theme-icon');
    const html        = document.documentElement;

    const savedTheme = localStorage.getItem('ns-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next    = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        themeIcon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('ns-theme', next);
    });


    /* ---- Typing effect ---- */
    const roles = [
        'Front-End Developer',
        'React Enthusiast',
        'B.Tech CSE Student',
        'UI/UX Learner',
        'Problem Solver',
    ];

    const typingEl = document.querySelector('.typing-text');
    if (typingEl) {
        let roleIdx = 0;
        let charIdx = 0;
        let deleting = false;
        let pauseTimer = null;

        function type() {
            const current = roles[roleIdx];
            if (deleting) {
                charIdx--;
                typingEl.textContent = current.substring(0, charIdx);
                if (charIdx === 0) {
                    deleting = false;
                    roleIdx  = (roleIdx + 1) % roles.length;
                    setTimeout(type, 400);
                    return;
                }
                setTimeout(type, 45);
            } else {
                charIdx++;
                typingEl.textContent = current.substring(0, charIdx);
                if (charIdx === current.length) {
                    deleting = true;
                    setTimeout(type, 1800);
                    return;
                }
                setTimeout(type, 90);
            }
        }
        setTimeout(type, 800);
    }


    /* ---- Scroll reveal animations ---- */
    const revealEls = document.querySelectorAll(
        '.about-photo-card, .about-summary, .info-card, ' +
        '.skill-item, .tech-chip, ' +
        '.ach-card, .project-card, .cert-card, ' +
        '.contact-card, .contact-form-side, .resume-cta'
    );

    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));


    /* ---- Skill bar animations ---- */
    const skillFills = document.querySelectorAll('.skill-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill  = entry.target;
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
                skillObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(fill => skillObserver.observe(fill));


    /* ---- Contact form (client-side demo) ---- */
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            /* Simulate network delay — replace with real EmailJS / Formspree */
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                formSuccess.classList.add('show');
                contactForm.reset();
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                    formSuccess.classList.remove('show');
                }, 3000);
            }, 1200);
        });
    }
    // Skills Tab Filter
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tab = btn.dataset.tab;
        document.querySelectorAll('.skill-item').forEach(item => {
            if (tab === 'all' || item.dataset.category === tab) {
                item.classList.remove('hidden');
                // Re-animate fill bar
                const fill = item.querySelector('.skill-fill');
                if (fill) {
                    fill.style.width = '0';
                    setTimeout(() => {
                        fill.style.width = fill.dataset.width + '%';
                    }, 50);
                }
            } else {
                item.classList.add('hidden');
            }
        });
    });
});


    /* ---- Smooth scroll for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = target.getBoundingClientRect().top + window.scrollY - 76;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });


    /* ---- Profile photo fallback ---- */
    const profilePhotos = document.querySelectorAll('#profile-photo, .about-photo-wrap img');
    profilePhotos.forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'https://ui-avatars.com/api/?name=Nithya+Sree&size=400&background=10b981&color=fff&font-size=0.35';
        });
    });

});