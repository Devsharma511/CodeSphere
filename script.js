const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
darkModeButton.classList.add('dark-mode-btn');
darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log('script.js is connected and running.');