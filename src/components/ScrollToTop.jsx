import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Client-side routing doesn't reset scroll like full page loads used to. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis?.scrollTo) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
