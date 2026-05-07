const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle?.querySelector('i');

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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
