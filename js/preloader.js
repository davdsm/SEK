/* Preloader — keeps the site hidden until the hero video can play
   through and the room image has decoded, then fades out. */
(() => {
  const preloader = document.getElementById('preloader');
  const fill = document.getElementById('preloaderFill');
  const label = document.querySelector('.preloader-label');
  const video = document.querySelector('.sea');
  const room = document.querySelector('.room');
  if (!preloader) return;

  label?.classList.add('in'); // play the char reveal while we wait

  const MIN_VISIBLE = 900; // ms — avoid a flash on fast connections
  const start = performance.now();
  const weights = { video: 0.7, image: 0.3 };
  const progress = { video: 0, image: 0 };

  function setProgress(key, value) {
    progress[key] = Math.max(progress[key], Math.min(1, value));
    const total = progress.video * weights.video + progress.image * weights.image;
    fill.style.width = `${Math.round(total * 100)}%`;
  }

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
      setProgress('image', 1);
    } else {
      room.addEventListener('load', () => {
        imageReady = true;
        setProgress('image', 1);
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
    video.addEventListener('progress', () => {
      try {
        if (video.buffered.length && video.duration) {
          setProgress('video', video.buffered.end(0) / video.duration);
        }
      } catch (e) {}
    });

    const ready = () => {
      if (videoReady) return;
      videoReady = true;
      setProgress('video', 1);
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
