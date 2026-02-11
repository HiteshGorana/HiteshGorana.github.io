// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

// Add CSS class for animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        will-change: opacity, visibility;
    }
    .fade-in-section.visible {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(style);

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const icon = themeToggle.querySelector('i');

// Check for saved user preference, if any, on load of the website
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

// Apply the theme
function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update icon
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

applyTheme(savedTheme);

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});

// Typewriter Effect
const typeWriterElement = document.getElementById('typewriter');
if (typeWriterElement) {
    const text = "Hello I am Hitesh, I build Agentic AI Systems for Future.";
    let i = 0;

    setTimeout(() => {
        function type() {
            if (i < text.length) {
                typeWriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50); // Typing speed
            }
        }
        type();
    }, 3000); // Start after other animations
}
