import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Client-side routing doesn't reset scroll like full page loads used to. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
