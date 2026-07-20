import { useEffect, useState } from 'react';

/**
 * Port of js/preloader.js — keeps the site gated behind the preloader
 * until the hero video can play through and the room image has
 * decoded, with a minimum visible time so it never just flashes.
 */
export default function usePreloader({ videoRef, imageRef }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const room = imageRef.current;

    const MIN_VISIBLE = 900;
    const start = performance.now();
    let videoReady = false;
    let imageReady = false;
    let cancelled = false;

    function finish() {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_VISIBLE - elapsed);
      setTimeout(() => {
        if (cancelled) return;
        setIsLoading(false);
        setHidden(true);
        setTimeout(() => {
          if (!cancelled) setRemoved(true);
        }, 800);
      }, wait);
    }

    const maybeFinish = () => {
      if (videoReady && imageReady) finish();
    };

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

    let fallbackTimer;
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
        fallbackTimer = setTimeout(ready, 6000);
      }
    } else {
      videoReady = true;
    }

    maybeFinish();

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-loading', isLoading);
  }, [isLoading]);

  return { hidden, removed };
}
