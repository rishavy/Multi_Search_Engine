

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


// gggg
const apiKey = 'AIzaSyCDHeeL9vrctoNnD_3SVV_bqXHvo60ysy0';
    const cx = 'c10187e22a55b452b';