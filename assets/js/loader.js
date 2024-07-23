  // ScrollReveal Configurations
  ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });

  // Loader Animation
  window.addEventListener('load', function () {
      const loader = document.getElementById('loader');
      anime({
          targets: '.loader-circle',
          translateY: [
              { value: -20, duration: 400 },
              { value: 0, duration: 400 }
          ],
          delay: anime.stagger(100, { start: 0, from: 'center', direction: 'normal' }),
          loop: true
      });
      setTimeout(() => {
          anime({
              targets: '#loader',
              opacity: 0,
              duration: 400,
              easing: 'easeOutExpo',
              complete: function() {
                  loader.style.display = 'none';
              }
          });
      }, 3000); // Ajuste o tempo de exibição do loader conforme necessário
  });