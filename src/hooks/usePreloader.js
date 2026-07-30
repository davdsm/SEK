import { useEffect, useState } from 'react';

/** Survives SPA navigations; resets on a full page load. */
let hasPlayedIntro = false;

/**
 * Preloader sequence:
 * 1. White page
 * 2. Icon fade-in-right
 * 3. When ready → icon fade-out-right
 * 4. White panel slides up, site revealed
 *
 * Runs only on the first home visit of a page load — not when
 * navigating back to home from another route.
 */
export default function usePreloader({ videoRef, imageRef }) {
  const skip = hasPlayedIntro;
  const [phase, setPhase] = useState(skip ? 'done' : 'boot'); // boot | icon | exit | lift | done
  const [removed, setRemoved] = useState(skip);

  useEffect(() => {
    if (skip) {
      document.body.classList.remove('is-loading');
      return undefined;
    }

    const video = videoRef.current;
    const room = imageRef.current;

    const ICON_ENTER_DELAY = 120;
    const ICON_ENTER_MS = 650;
    const MIN_HOLD_MS = 1800;
    const ICON_EXIT_MS = 550;
    const LIFT_MS = 900;

    const start = performance.now();
    let videoReady = false;
    let imageReady = false;
    let cancelled = false;
    let exitStarted = false;
    const timers = [];

    const later = (fn, ms) => {
      const id = setTimeout(fn, ms);
      timers.push(id);
      return id;
    };

    function markPlayed() {
      hasPlayedIntro = true;
    }

    function beginExit() {
      if (cancelled || exitStarted) return;
      exitStarted = true;

      setPhase('exit');

      later(() => {
        if (cancelled) return;
        setPhase('lift');
        document.body.classList.remove('is-loading');

        later(() => {
          if (cancelled) return;
          markPlayed();
          setPhase('done');
          setRemoved(true);
        }, LIFT_MS);
      }, ICON_EXIT_MS);
    }

    function tryFinish() {
      if (!videoReady || !imageReady || exitStarted) return;

      const elapsed = performance.now() - start;
      const minVisible = ICON_ENTER_DELAY + ICON_ENTER_MS + MIN_HOLD_MS;
      const wait = Math.max(0, minVisible - elapsed);

      later(beginExit, wait);
    }

    // 1 → 2: white page, then icon enters
    later(() => {
      if (cancelled) return;
      setPhase('icon');
    }, ICON_ENTER_DELAY);

    if (room) {
      if (room.complete && room.naturalWidth) {
        imageReady = true;
      } else {
        room.addEventListener(
          'load',
          () => {
            imageReady = true;
            tryFinish();
          },
          { once: true }
        );
        room.addEventListener(
          'error',
          () => {
            imageReady = true;
            tryFinish();
          },
          { once: true }
        );
      }
    } else {
      imageReady = true;
    }

    let fallbackTimer;
    if (video) {
      const ready = () => {
        if (videoReady) return;
        videoReady = true;
        tryFinish();
      };

      if (video.readyState >= 3) {
        ready();
      } else {
        video.addEventListener('canplaythrough', ready, { once: true });
        video.addEventListener('canplay', ready, { once: true });
        fallbackTimer = later(ready, 6000);
      }
    } else {
      videoReady = true;
    }

    tryFinish();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      clearTimeout(fallbackTimer);
      document.body.classList.remove('is-loading');
      // Leaving home after the intro has been seen (ignore Strict Mode remounts).
      if (exitStarted || performance.now() - start > 400) {
        markPlayed();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (skip) return;
    if (phase === 'boot' || phase === 'icon' || phase === 'exit') {
      document.body.classList.add('is-loading');
    }
  }, [phase, skip]);

  return { phase, removed };
}
