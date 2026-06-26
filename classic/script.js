const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,10,10,0.7)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.transition = ".3s";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";

    }

});
const heroContent = document.querySelector(".hero-content");

window.addEventListener("load", () => {

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    setTimeout(() => {

        heroContent.style.transition = "1s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(-50%)";

    }, 200);

});
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    heroBg.style.transform = `scale(1.08) translateY(${value * 0.2}px)`;

});