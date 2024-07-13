// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  document.getElementById('theme-toggle').checked = true; // Set toggle button to checked state
} else {
  document.documentElement.classList.remove('dark');
  document.getElementById('theme-toggle').checked = false; // Set toggle button to unchecked state
}

// Toggle dark mode
document.getElementById('theme-toggle').addEventListener('change', function() {
  if(this.checked) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
});
