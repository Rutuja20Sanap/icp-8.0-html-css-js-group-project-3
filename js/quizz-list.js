
 // Dark/Light Theme Toggle
    function toggleTheme() {
        const body = document.getElementById('body');
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    }

    // Load the theme from localStorage
    document.addEventListener('DOMContentLoaded', (event) => {
        const body = document.getElementById('body');
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme + '-theme');
        } else {
            body.classList.add('light-theme'); 
        }
    });

    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const menuOpenBtn = document.getElementById('menu-open');
    const closeBtn = document.getElementById('close-btn');

    menuOpenBtn.addEventListener('click', function() {
        sidebar.style.width = '250px';
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
    });

