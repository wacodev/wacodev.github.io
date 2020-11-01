// Cambia estilo active a los elementos li al hacer scroll
$('body').scrollspy({ target: '#navigation' });

window.sr = ScrollReveal();
sr.reveal('.profile', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px'
});
sr.reveal('.name', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500
});
sr.reveal('.description', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 1000
});
sr.reveal('.pf-1', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px'
});
sr.reveal('.pf-2', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px',
  delay: 500
});
sr.reveal('.pf-3', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px',
  delay: 500
});
sr.reveal('.pf-4', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px',
  delay: 500
});
sr.reveal('#backend', {
  duration: 2000,
  origin: 'left',
  distance: '100px'
});
sr.reveal('#frontend', {
  duration: 2000,
  origin: 'bottom',
  distance: '30px',
  delay: 500
});
sr.reveal('#database', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 1000
});
sr.reveal('.dsi-img', {
  duration: 2000,
  origin: 'left',
  distance: '200px'
});
sr.reveal('.dsi-text', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 1000
});
sr.reveal('.qf-text', {
  duration: 2000,
  origin: 'left',
  distance: '100px'
});
sr.reveal('.qf-img', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 1000
});
sr.reveal('.ghp-img', {
  duration: 2000,
  origin: 'left',
  distance: '100px'
});
sr.reveal('.ghp-text', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 1000
});
