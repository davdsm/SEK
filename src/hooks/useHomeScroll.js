import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const easeInOut = (t) => t * t * (3 - 2 * t);

/**
 * Port of js/v2.js — the cinematic scroll intro (room zoom → ocean →
 * logo rise → gold reveal), the horizontal projects carousel, and the
 * manifesto word-fill, plus the black/beige body background toggle.
 */
export default function useHomeScroll(refs) {
  useEffect(() => {
    const {
      scrollyRef,
      roomRef,
      oceanRef,
      logoDarkRef,
      phraseRef,
      scrollHintRef,
      whatwedoRef,
      trackRef,
      manifestoRef,
      manifestoTextRef,
      seaVideoRef,
    } = refs;

    const scrolly = scrollyRef.current;
    const room = roomRef.current;
    const ocean = oceanRef.current;
    const logoDark = logoDarkRef.current;
    const phrase = phraseRef.current;
    const scrollHint = scrollHintRef.current;
    const whatwedo = whatwedoRef.current;
    const track = trackRef.current;
    const manifesto = manifestoRef.current;
    const manifestoText = manifestoTextRef.current;
    if (!scrolly || !whatwedo || !manifesto) return undefined;

    // Locomotive Scroll v5 (Lenis-based) — smooths native scrolling,
    // so position: sticky and window scroll events keep working.
    const locomotive = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.09,
        smoothWheel: true,
      },
    });

    // Split the manifesto into word spans for the scroll-fill effect
    const words = manifestoText.textContent.split(/\s+/).filter(Boolean);
    manifestoText.textContent = '';
    const mwords = words.map((w) => {
      const s = document.createElement('span');
      s.className = 'mword';
      s.textContent = w;
      return s;
    });
    mwords.forEach((s, i) => {
      if (i) manifestoText.appendChild(document.createTextNode(' '));
      manifestoText.appendChild(s);
    });

    function updateIntro() {
      const total = scrolly.offsetHeight - innerHeight;
      const p = clamp01(-scrolly.getBoundingClientRect().top / total);

      // Phase 1 · zoom into the arch (0 → .28)
      const zoom = easeInOut(seg(p, 0, 0.28));
      const scale = 1 + zoom * 5.2;
      room.style.transform = `scale(${scale})`;
      room.style.opacity = 1 - easeInOut(seg(p, 0.05, 0.32));
      room.style.visibility = p > 0.34 ? 'hidden' : 'visible';

      // Scroll hint fades out as soon as scrolling starts
      scrollHint.style.opacity = 1 - seg(p, 0.01, 0.08);

      // Phase 2 · dark logo fades in over the ocean (.26 → .4)
      const fadeIn = easeInOut(seg(p, 0.26, 0.4));
      const fadeOut = seg(p, 0.72, 0.88);
      logoDark.style.opacity = fadeIn * (1 - fadeOut);

      // Phase 3 · ocean slides up revealing gold logo (.58 → .92)
      const lift = easeInOut(seg(p, 0.58, 0.92));
      ocean.style.transform = `translateY(${-lift * 100}vh)`;

      // Phrase sweeps in under the gold logo once the ocean has cleared it
      if (p >= 0.88) phrase._reveal?.play();
      else if (p < 0.7) phrase._reveal?.reverse();
    }

    // Horizontal carousel — vertical scroll drives translateX
    function sizeCarousel() {
      const overflow = Math.max(0, track.scrollWidth - innerWidth);
      whatwedo.style.height = `${innerHeight + overflow}px`;
      return overflow;
    }

    function updateCarousel() {
      const overflow = track.scrollWidth - innerWidth;
      if (overflow <= 0) return;
      const total = whatwedo.offsetHeight - innerHeight;
      const p = clamp01(-whatwedo.getBoundingClientRect().top / total);
      track.style.transform = `translateX(${-p * overflow}px)`;
    }

    // Manifesto — words fill from 0.2 to full opacity as you scroll
    function updateManifesto() {
      const total = manifesto.offsetHeight - innerHeight;
      const p = clamp01(-manifesto.getBoundingClientRect().top / total);
      const fill = seg(p, 0.08, 0.92) * mwords.length;
      for (let i = 0; i < mwords.length; i++) {
        mwords[i].style.opacity = 0.2 + 0.8 * clamp01(fill - i);
      }
    }

    function onScroll() {
      updateIntro();
      updateCarousel();
      updateManifesto();
    }

    function onResize() {
      sizeCarousel();
      onScroll();
    }

    // Page background: beige everywhere, black while the (transparent)
    // "o que fazemos" section straddles the middle of the viewport —
    // so it hands back to beige as soon as the manifesto arrives.
    const bgObserver = new IntersectionObserver(
      ([entry]) => document.body.classList.toggle('bg-dark', entry.isIntersecting),
      { rootMargin: '-50% 0% -50% 0%', threshold: 0 }
    );
    bgObserver.observe(whatwedo);

    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onResize);

    sizeCarousel();
    onScroll();

    // Safari sometimes blocks autoplay until a gesture
    const sea = seaVideoRef.current;
    const tryPlay = () => sea?.play().catch(() => {});
    tryPlay();
    addEventListener('pointerdown', tryPlay, { once: true });

    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onResize);
      removeEventListener('pointerdown', tryPlay);
      bgObserver.disconnect();
      locomotive.destroy();
      document.body.classList.remove('bg-dark');
    };
    // Mount-once: ref objects are stable: identity across renders, and
    // their .current values are only needed at mount time here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
