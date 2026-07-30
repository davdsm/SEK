import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/page-transition.css';

const PageTransitionContext = createContext({
  phase: 'idle',
  contentVisible: true,
  isTransitioning: false,
  notifyPageReady: () => {},
  startTransition: () => {},
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

const COVER_MS = 700;
const REVEAL_MS = 750;
const MIN_COVERED_MS = 320;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isInternalPath(href) {
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return null;
  }
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    return url.pathname + url.search + url.hash;
  } catch {
    return null;
  }
}

export function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [phase, setPhase] = useState('idle'); // idle | covering | waiting | revealing
  const pendingRef = useRef(null);
  const coveredAtRef = useRef(0);
  const revealScheduledRef = useRef(false);
  const timersRef = useRef([]);
  const locationKey = location.pathname + location.search;

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const later = useCallback((fn, ms) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const startTransitionTo = useCallback(
    (to) => {
      if (phase !== 'idle') return;
      if (to === locationKey) return;

      if (prefersReducedMotion()) {
        navigate(to);
        return;
      }

      pendingRef.current = to;
      revealScheduledRef.current = false;
      clearTimers();
      setPhase('covering');
      document.body.classList.add('is-page-transitioning');
    },
    [phase, locationKey, navigate, clearTimers]
  );

  // Intercept in-app link clicks.
  useEffect(() => {
    function onClick(event) {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest?.('a[href]');
      if (!anchor) return;
      if (anchor.hasAttribute('download')) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.dataset.noTransition != null) return;

      const to = isInternalPath(anchor.getAttribute('href'));
      if (!to) return;

      const nextPath = to.split('#')[0];
      const currentPath = location.pathname + location.search;
      if (nextPath === currentPath) return;

      event.preventDefault();
      event.stopPropagation();
      startTransitionTo(to);
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [location.pathname, location.search, startTransitionTo]);

  // Cover finished → navigate and wait for the next page to mount.
  useEffect(() => {
    if (phase !== 'covering') return undefined;

    const id = setTimeout(() => {
      const to = pendingRef.current;
      if (!to) {
        setPhase('idle');
        document.body.classList.remove('is-page-transitioning');
        return;
      }
      coveredAtRef.current = performance.now();
      setPhase('waiting');
      navigate(to);
    }, COVER_MS);

    return () => clearTimeout(id);
  }, [phase, navigate]);

  // Called from inside Suspense once the destination page has loaded.
  const notifyPageReady = useCallback(() => {
    if (phase !== 'waiting') return;
    if (revealScheduledRef.current) return;
    revealScheduledRef.current = true;

    const elapsed = performance.now() - coveredAtRef.current;
    const wait = Math.max(0, MIN_COVERED_MS - elapsed);

    later(() => setPhase('revealing'), wait);
  }, [phase, later]);

  // Reveal finished → idle.
  useEffect(() => {
    if (phase !== 'revealing') return undefined;

    const id = setTimeout(() => {
      pendingRef.current = null;
      setPhase('idle');
      document.body.classList.remove('is-page-transitioning');
    }, REVEAL_MS);

    return () => clearTimeout(id);
  }, [phase]);

  useEffect(
    () => () => {
      clearTimers();
      document.body.classList.remove('is-page-transitioning');
    },
    [clearTimers]
  );

  // Outgoing page stays visible while the curtain drops.
  // Incoming page fades up as the curtain lifts.
  const contentVisible = phase === 'idle' || phase === 'covering' || phase === 'revealing';
  const isTransitioning = phase !== 'idle';

  const value = useMemo(
    () => ({
      phase,
      contentVisible,
      isTransitioning,
      notifyPageReady,
      startTransition: startTransitionTo,
    }),
    [phase, contentVisible, isTransitioning, notifyPageReady, startTransitionTo]
  );

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
      <div
        className={[
          'page-curtain',
          phase === 'covering' || phase === 'waiting' ? 'is-covering' : '',
          phase === 'waiting' ? 'is-covered' : '',
          phase === 'revealing' ? 'is-revealing' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-hidden="true"
      >
        <div className="page-curtain__panel" />
      </div>
    </PageTransitionContext.Provider>
  );
}

/** Mount inside Suspense so it only fires after the lazy page has loaded. */
export function PageReadySignal() {
  const { pathname, search } = useLocation();
  const { notifyPageReady, phase } = usePageTransition();

  useEffect(() => {
    if (phase === 'waiting') {
      notifyPageReady();
    }
  }, [pathname, search, phase, notifyPageReady]);

  return null;
}
