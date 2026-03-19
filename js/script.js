// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contact Form submission
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const msg = form.message.value;

  if(name && email && msg){
    message.style.color = 'green';
    message.textContent = 'Message sent successfully! ✅';
    form.reset();
  } else {
    message.style.color = 'red';
    message.textContent = 'Please fill in all fields.';
  }
});