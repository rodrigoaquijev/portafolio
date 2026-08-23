document.addEventListener('DOMContentLoaded', () => {
  // 1. Copiar Email con feedback visual suave
  const copyButtons = document.querySelectorAll('.meta-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const email = 'rodrigoaq996@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        
        // Guardar contenido original
        const originalContent = button.innerHTML;
        
        // Cambiar temporalmente a estado copiado
        button.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6EA876" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color: #6EA876; font-weight: 600;">¡Copiado!</span>
        `;

        setTimeout(() => {
          button.innerHTML = originalContent;
        }, 2000);
      } catch (err) {
        console.error('Error al copiar:', err);
      }
    });
  });

  // 2. Scroll suave hacia la sección de proyectos
  const projectLink = document.querySelector('a[href="#proyectos"]');
  if (projectLink) {
    projectLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('proyectos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 3. Efecto Fade-In al hacer scroll en las tarjetas
  const cards = document.querySelectorAll('.project-card, .hero-card');
  
  // Estilo base inicial para la animación
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});