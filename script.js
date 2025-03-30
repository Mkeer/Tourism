document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  
    // Parallax effect
    window.addEventListener('scroll', () => {
      const parallax = document.querySelector('.parallax');
      let scrollY = window.scrollY;
      parallax.style.transform = `translateY(${scrollY * 0.4}px)`;
    });
  
    // Scroll animation for cards
    const cards = document.querySelectorAll('.card');
    const showCards = () => {
      const trigger = window.innerHeight * 0.85;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < trigger) {
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }
      });
    };
  
    window.addEventListener('scroll', showCards);
    showCards();

    const exploreButton = document.querySelector('.btn');
    exploreButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default jump
        document.querySelector('explore').scrollIntoView({ behavior: 'smooth' });
    });
  });
  