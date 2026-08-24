const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    // Check current custom theme attribute
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // Switch state directly
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
    }
});
