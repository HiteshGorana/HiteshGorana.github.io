const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle?.querySelector('i');
const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id]')];

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (!icon) return;

    icon.classList.toggle('fa-circle-half-stroke', theme === 'paper');
    icon.classList.toggle('fa-moon', theme === 'ink');
}

const savedTheme = localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'ink' : 'paper');

applyTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    applyTheme(currentTheme === 'ink' ? 'paper' : 'ink');
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(section => revealObserver.observe(section));

const setActiveNav = id => {
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
};

const navObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;

    visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    setActiveNav(visible[0].target.id);
}, { threshold: [0.3, 0.5, 0.7] });

sections.forEach(section => navObserver.observe(section));
