(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)');
  let manual = false;
  function setTheme(dark) {
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.textContent = dark ? 'Light mode' : 'Dark mode';
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  }
  setTheme(preferred.matches);
  toggle.addEventListener('click', () => {
    manual = true;
    setTheme(root.dataset.theme !== 'dark');
  });
  preferred.addEventListener('change', e => {
    if (!manual) setTheme(e.matches);
  });
})();
