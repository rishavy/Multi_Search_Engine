

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
