// Saudacao 
function saudacao() {
    var data = new Date();
    var hora = data.getHours();
    var saudacao;

    if (hora >= 5 && hora < 13) {
        saudacao = 'Bom dia!';
    } else if (hora >= 13 && hora < 18) {
        saudacao = 'Boa tarde!';
    } else {
        saudacao = 'Boa noite!';
    }

    document.getElementById('saudacao').innerText = saudacao;
}



document.addEventListener("DOMContentLoaded", function () {
    // Toggle dark mode
    const toggleSwitch = document.getElementById('toggle-switch');
    const body = document.body;

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');
    });

    // Typed.js initialization
    new Typed('.typedText', {
        strings: ["Sou o Arthur, Web Developer.", "Trabalho com Front end", "Vamos criar algo incrível juntos?!"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Toggle navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('myNavMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('responsive');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('responsive');
        }
    });
});

// Scroll animation 
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {})

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

// Menu active 
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrolly = window.scrollY;

    let foundActive = false; 

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        const link = document.querySelector(".nav-menu a[href*='" + sectionId + "']");

        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
            foundActive = true; 
        } else {
            link.classList.remove("active-link");
        }
    });


    const homeLink = document.querySelector(".nav-menu a[href*='home']");
    if (!foundActive) {
        homeLink.classList.add("active-link");
    } else {
        homeLink.classList.remove("active-link");
    }
}

window.addEventListener("scroll", scrollActive);

