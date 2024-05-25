// Saudacao 
function saudacao() {
    var data = new Date();
    var hora = data.getHours();
    var saudacao;

    if (hora < 12) {
        saudacao = 'Bom dia!';
    } else if (hora < 18) {
        saudacao = 'Boa tarde!';
    } else {
        saudacao = 'Boa noite!';
    }

    document.getElementById('saudacao').innerText = saudacao;
}



document.addEventListener("DOMContentLoaded", function() {
    // Toggle dark mode
    const toggleSwitch = document.getElementById('toggle-switch');
    const body = document.body;
    
    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');
    });

    // Typed.js initialization
    new Typed('.typedText', {
        strings: ["Sou o Arthur, Web Developer.", "Trabalho com Front end", "Vamos criar algo incrível juntos."],
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
