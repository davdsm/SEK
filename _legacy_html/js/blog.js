(function () {
  const carousel = document.querySelector('[data-blog-carousel]');
  if (!carousel) return;

  const viewport = carousel.querySelector('.blog__viewport');
  const track = carousel.querySelector('.blog__track');
  const slides = [...carousel.querySelectorAll('.blog__slide')];
  const dots = [...carousel.querySelectorAll('.blog__dot')];

  let current = 0;
  let isDragging = false;
  let hasDragged = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationId = 0;

  function setActive(index) {
    const total = slides.length;
    current = ((index % total) + total) % total;

    track.style.transform = `translateX(${-current * 100}%)`;
    currentTranslate = -current * viewport.offsetWidth;
    prevTranslate = currentTranslate;

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
      slide.setAttribute('aria-hidden', i !== current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === current);
      dot.setAttribute('aria-selected', i === current);
    });
  }

  function goTo(index) {
    setActive(index);
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }

  function animation() {
    const offset = (currentTranslate / viewport.offsetWidth) * 100;
    track.style.transform = `translateX(${offset}%)`;
    if (isDragging) requestAnimationFrame(animation);
  }

  function dragStart(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    if (e.target.closest('.blog__cta, .blog__dot')) return;
    isDragging = true;
    hasDragged = false;
    startX = getPositionX(e);
    track.style.transition = 'none';
    viewport.classList.add('is-dragging');
    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animation);
  }

  function dragMove(e) {
    if (!isDragging) return;
    const walk = getPositionX(e) - startX;
    if (Math.abs(walk) > 5) hasDragged = true;
    currentTranslate = prevTranslate + walk;
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-dragging');
    track.style.transition = '';

    const moved = currentTranslate - prevTranslate;
    const threshold = viewport.offsetWidth * 0.18;

    if (moved < -threshold) next();
    else if (moved > threshold) prev();
    else goTo(current);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  viewport.addEventListener('mousedown', dragStart);
  viewport.addEventListener('mousemove', dragMove);
  viewport.addEventListener('mouseup', dragEnd);
  viewport.addEventListener('mouseleave', dragEnd);
  viewport.addEventListener('touchstart', dragStart, { passive: true });
  viewport.addEventListener('touchmove', dragMove, { passive: true });
  viewport.addEventListener('touchend', dragEnd);

  window.addEventListener('resize', () => goTo(current));

  document.addEventListener('keydown', (e) => {
    if (!carousel.matches(':hover')) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  goTo(0);
})();
