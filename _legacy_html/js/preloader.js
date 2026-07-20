/* Preloader — keeps the site hidden until the hero video can play
   through and the room image has decoded, then fades out. */
(() => {
  const preloader = document.getElementById('preloader');
  const video = document.querySelector('.sea');
  const room = document.querySelector('.room');
  if (!preloader) return;

  const MIN_VISIBLE = 900; // ms — avoid a flash on fast connections
  const start = performance.now();

  function finish() {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_VISIBLE - elapsed);
    setTimeout(() => {
      preloader.classList.add('is-hidden');
      document.body.classList.remove('is-loading');
      setTimeout(() => preloader.remove(), 800);
    }, wait);
  }

  let videoReady = false;
  let imageReady = false;
  const maybeFinish = () => {
    if (videoReady && imageReady) finish();
  };

  // Room image
  if (room) {
    if (room.complete && room.naturalWidth) {
      imageReady = true;
    } else {
      room.addEventListener('load', () => {
        imageReady = true;
        maybeFinish();
      });
      room.addEventListener('error', () => {
        imageReady = true;
        maybeFinish();
      });
    }
  } else {
    imageReady = true;
  }

  // Sea video
  if (video) {
    const ready = () => {
      if (videoReady) return;
      videoReady = true;
      maybeFinish();
    };

    if (video.readyState >= 3) {
      ready();
    } else {
      video.addEventListener('canplaythrough', ready, { once: true });
      video.addEventListener('canplay', ready, { once: true });
      // Fallback in case the browser never fires canplaythrough
      // (e.g. very long / streamed video) — don't block forever.
      setTimeout(ready, 6000);
    }
  } else {
    videoReady = true;
  }

  maybeFinish();
})();
