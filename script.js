document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. BARRA DE PROGRESO DE SCROLL SUPERIOR
  // ==========================================
  const progressBar = document.createElement('div');
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.height = '3px';
  progressBar.style.backgroundColor = 'var(--accent-terra, #B85D43)';
  progressBar.style.width = '0%';
  progressBar.style.zIndex = '9999';
  progressBar.style.transition = 'width 0.1s ease-out';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });

  // ==========================================
  // 2. EFECTO 3D TILT + SPOTLIGHT INTERACTIVO
  // ==========================================
  const tiltCards = document.querySelectorAll('.project-card, .hero-card, .card-column');

  tiltCards.forEach(card => {
    // Configurar estilos necesarios para 3D
    card.style.transformStyle = 'preserve-3d';
    card.style.perspective = '1000px';
    card.style.transition = 'transform 0.15s ease-out, box-shadow 0.25s ease';

    // Capa de brillo / Spotlight
    const spotlight = document.createElement('div');
    spotlight.style.position = 'absolute';
    spotlight.style.top = '0';
    spotlight.style.left = '0';
    spotlight.style.width = '100%';
    spotlight.style.height = '100%';
    spotlight.style.pointerEvents = 'none';
    spotlight.style.borderRadius = 'inherit';
    spotlight.style.opacity = '0';
    spotlight.style.transition = 'opacity 0.3s ease';
    spotlight.style.background = 'radial-gradient(circle 350px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.18), transparent 80%)';
    spotlight.style.zIndex = '10';
    
    // Asegurar que la tarjeta tenga posición relativa
    card.style.position = 'relative';
    card.appendChild(spotlight);

    card.addEventListener('mouseenter', () => {
      spotlight.style.opacity = '1';
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calcular grados de rotación (sutil y elegante)
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      // Posición del halo de luz
      spotlight.style.setProperty('--mouse-x', `${x}px`);
      spotlight.style.setProperty('--mouse-y', `${y}px`);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.boxShadow = '0 20px 40px rgba(29, 42, 50, 0.08)';
    });

    card.addEventListener('mouseleave', () => {
      spotlight.style.opacity = '0';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.boxShadow = '';
    });
  });

  // ==========================================
  // 3. BOTONES MAGNÉTICOS (MAGNETIC EFFECT)
  // ==========================================
  const magneticElements = document.querySelectorAll('.btn-primary, .btn-action, .btn-dark, .nav-link');

  magneticElements.forEach(elem => {
    elem.addEventListener('mousemove', (e) => {
      const rect = elem.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      elem.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      elem.style.transition = 'transform 0.1s ease-out';
    });

    elem.addEventListener('mouseleave', () => {
      elem.style.transform = 'translate(0px, 0px)';
      elem.style.transition = 'transform 0.3s ease';
    });
  });

  // ==========================================
  // 4. TOAST NOTIFICATION FLOTANTE (COPIAR EMAIL)
  // ==========================================
  function showToast(message) {
    let existingToast = document.querySelector('.floating-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'floating-toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EA876" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;

    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%) translateY(40px)',
      backgroundColor: '#1C2A38',
      color: '#FFFFFF',
      padding: '12px 24px',
      borderRadius: '9999px',
      fontSize: '13px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
      zIndex: '10000',
      opacity: '0',
      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease'
    });

    document.body.appendChild(toast);

    // Activar animación de entrada
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    });

    // Desaparecer después de 2.5s
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 2500);
  }

  const copyButtons = document.querySelectorAll('.meta-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('rodrigoaq996@gmail.com');
        showToast('Email copiado al portapapeles con éxito');
      } catch (err) {
        showToast('rodrigoaq996@gmail.com');
      }
    });
  });

  // ==========================================
  // 5. PARALLAX SUTIL AL SCROLL EN LOS PREVIEWS
  // ==========================================
  window.addEventListener('scroll', () => {
    const previews = document.querySelectorAll('.mockup-placeholder, .preview-img');
    previews.forEach(preview => {
      const rect = preview.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.06;
        const yOffset = (window.innerHeight - rect.top) * speed;
        preview.style.transform = `translateY(${yOffset}px)`;
        preview.style.transition = 'transform 0.1s linear';
      }
    });
  });

  // ==========================================
  // 6. SCROLL SUAVE NATIVO
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});