// Optional JavaScript for adding an additional effect or interaction
document.querySelectorAll('.link-button').forEach(button => {
  button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
  });
});
