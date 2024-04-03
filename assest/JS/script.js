

// Btns Animation script
document.addEventListener("DOMContentLoaded", function() {
    const animatebuttons = document.querySelectorAll(".btn-animation");

    animatebuttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            button.classList.add("animate");
            setTimeout(() => {
                button.classList.remove("animate");
            }, 600);
        });
    });
});

// -----------------  Dark mode -----------------------

// Get the theme button element
const themeBtn = document.querySelector('.theam');

// Add click event listener to the theme button
themeBtn.addEventListener('click', function() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Toggle moon/sun icon
    if (document.body.classList.contains('dark-mode')) {
        // If dark mode is enabled, change theme button to sun icon
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        // If light mode is enabled, change theme button to moon icon
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Check local storage for theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Save theme preference to local storage
themeBtn.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
});
