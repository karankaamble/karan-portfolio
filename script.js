// ===== NAVBAR SCROLL EFFECT =====

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 11, 24, 0.98)";
    } else {
        header.style.background = "rgba(8, 11, 24, 0.9)";
    }

});


// ===== CURRENT YEAR =====

console.log("Karan Kaamble Portfolio Loaded Successfully!");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}
// Full Stack Java Developer typing effect

const typingText = document.getElementById("typing-text");

if (typingText) {

    const text = "Full Stack Java Developer";
    let index = 0;
    let deleting = false;

    function typeEffect() {

        if (!deleting) {
            typingText.textContent = text.substring(0, index + 1);
            index++;

            if (index === text.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {
            typingText.textContent = text.substring(0, index - 1);
            index--;

            if (index === 0) {
                deleting = false;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    typeEffect();
}