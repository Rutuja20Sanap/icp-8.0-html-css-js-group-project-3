function toggleTheme() {
    const body = document.getElementById('body');
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
    }
}

    document.getElementById('menu-open').addEventListener('click', function() {
        document.getElementById('sidebar').classList.add('open');
    });

    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
    });