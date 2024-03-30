

// Btns Animation script
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-animation");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            button.classList.add("animate");
            setTimeout(() => {
                button.classList.remove("animate");
            }, 600);
        });
    });
});
