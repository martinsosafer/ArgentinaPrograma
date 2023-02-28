
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


const contactButton = document.getElementById('contact-button');

window.addEventListener('load', () => {
  contactButton.classList.add('animate__animated', 'animate__bounceIn');
});
