// ============================================================
// CURSOR FOLLOWER, CLICK RIPPLE & SELECTION COPY EFFECTS
// ============================================================

(function () {
  'use me strict';

  // Only run on desktop/non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // 1. Create Cursor Follower Ring Element
  const follower = document.createElement('div');
  follower.className = 'cursor-dot-follower';
  document.body.appendChild(follower);

  let mouseX = -100;
  let mouseY = -100;
  let currentX = -100;
  let currentY = -100;

  // Track mouse position
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // Smooth RAF physics loop (60 FPS)
  function animateCursor() {
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;
    follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // 2. Interactive Element Hover Detection (Expand Cursor Ring)
  const interactiveSelector = 'a, button, .btn, input, select, textarea, .course-card, .feature-card, .accordion-trigger, .filter-tag, .social-btn, .float-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      follower.classList.add('active');
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      follower.classList.remove('active');
    }
  }, { passive: true });


  // 3. Click Ripple & Particle Sparks Effect
  document.addEventListener('click', (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    // Create expanding ripple wave
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = `${clickX}px`;
    ripple.style.top = `${clickY}px`;
    document.body.appendChild(ripple);

    // Create 6 miniature directional particle sparks
    for (let i = 0; i < 6; i++) {
      const spark = document.createElement('div');
      spark.className = 'click-spark';
      spark.style.left = `${clickX}px`;
      spark.style.top = `${clickY}px`;

      const angle = (i * 60 + Math.random() * 30) * (Math.PI / 180);
      const distance = 25 + Math.random() * 35;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      spark.style.setProperty('--dx', `${dx}px`);
      spark.style.setProperty('--dy', `${dy}px`);

      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 450);
    }

    setTimeout(() => ripple.remove(), 500);
  });


})();
