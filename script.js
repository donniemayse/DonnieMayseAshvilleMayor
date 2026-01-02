// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');

function closeNav(){
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Open navigation');
}

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => closeNav());
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeNav();
});

// Demo form handler (no backend by default)
window.handleFormSubmit = function handleFormSubmit(e){
  e.preventDefault();
  const note = document.getElementById('formNote');
  if(note){
    note.textContent = "Message captured locally (demo). To receive emails, set the form 'action' to your Formspree (or similar) endpoint.";
  }
  e.target.reset();
  return false;
};
