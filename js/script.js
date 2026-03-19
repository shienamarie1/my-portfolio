// Example: click on a project card
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert('You clicked ' + card.querySelector('h3').textContent);
  });
});