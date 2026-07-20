(function () {
  const carousel = document.querySelector('[data-portfolio-carousel]');
  if (!carousel) return;

  const viewport = carousel.querySelector('.portfolio__viewport');
  const track = carousel.querySelector('.portfolio__track');
  const prevBtn = carousel.querySelector('.portfolio__nav--prev');
  const nextBtn = carousel.querySelector('.portfolio__nav--next');

  const originals = [...track.querySelectorAll('.portfolio__slide')];
  const total = originals.length;

  const firstClone = originals[0].cloneNode(true);
  const lastClone = originals[total - 1].cloneNode(true);
  firstClone.classList.add('is-clone');
  lastClone.classList.add('is-clone');
  firstClone.classList.remove('is-active');
  lastClone.classList.remove('is-active');
  firstClone.setAttribute('aria-hidden', 'true');
  lastClone.setAttribute('aria-hidden', 'true');

  track.insertBefore(lastClone, originals[0]);
  track.appendChild(firstClone);

  let slides = [...track.querySelectorAll('.portfolio__slide')];
  let current = 1;
  let isDragging = false;
  let hasDragged = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationId = 0;
  let isJumping = false;

  function setActive(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
      if (!slide.classList.contains('is-clone')) {
        slide.setAttribute('aria-hidden', i !== index);
      }
    });
  }

  function getCenterPadding() {
    const viewportWidth = viewport.offsetWidth;
    const slideWidth = slides[0].offsetWidth;
    return Math.max(0, (viewportWidth - slideWidth) / 2);
  }

  function getSlideOffset(index) {
    const slide = slides[index];
    const padding = getCenterPadding();
    return slide.offsetLeft - padding;
  }

  function applyTransform(offset, animate) {
    track.style.transition = animate && !isJumping ? '' : 'none';
    track.style.transform = `translateX(${-offset}px)`;
    currentTranslate = -offset;
    prevTranslate = -offset;
  }

  function goTo(index, animate = true) {
    current = index;
    const offset = getSlideOffset(current);
    applyTransform(offset, animate);
    setActive(current);
  }

  function jumpIfNeeded() {
    if (current === 0) {
      isJumping = true;
      current = total;
      applyTransform(getSlideOffset(current), false);
      setActive(current);
      isJumping = false;
    } else if (current === slides.length - 1) {
      isJumping = true;
      current = 1;
      applyTransform(getSlideOffset(current), false);
      setActive(current);
      isJumping = false;
    }
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function onResize() {
    goTo(current, false);
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }

  function animation() {
    track.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
  }

  function dragStart(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    if (e.target.closest('.portfolio__nav, .portfolio__cta')) return;
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
    const threshold = slides[0].offsetWidth * 0.15;

    if (moved < -threshold) next();
    else if (moved > threshold) prev();
    else goTo(current);
  }

  track.addEventListener('transitionend', () => {
    if (!isDragging) jumpIfNeeded();
  });

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  carousel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (hasDragged) e.preventDefault();
    });
  });

  viewport.addEventListener('mousedown', dragStart);
  viewport.addEventListener('mousemove', dragMove);
  viewport.addEventListener('mouseup', dragEnd);
  viewport.addEventListener('mouseleave', dragEnd);
  viewport.addEventListener('touchstart', dragStart, { passive: true });
  viewport.addEventListener('touchmove', dragMove, { passive: true });
  viewport.addEventListener('touchend', dragEnd);

  window.addEventListener('resize', onResize);
  window.addEventListener('load', () => goTo(current, false));

  document.addEventListener('keydown', (e) => {
    if (!carousel.matches(':hover')) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  goTo(1, false);
})();
