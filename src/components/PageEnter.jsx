import { useEffect, useState } from 'react';
import { usePageTransition } from './PageTransition.jsx';
import '../../css/page-enter.css';

/** Smooth fade-in-up when a page mounts or becomes active. */
export default function PageEnter({ children, active = true, className = '' }) {
  const { contentVisible } = usePageTransition();
  const [entered, setEntered] = useState(false);
  const canEnter = active && contentVisible;

  useEffect(() => {
    if (!canEnter) {
      setEntered(false);
      return undefined;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setEntered(true);
      return undefined;
    }

    const timer = setTimeout(() => setEntered(true), 350);

    return () => clearTimeout(timer);
  }, [canEnter]);

  return (
    <div
      className={['page-enter', entered ? 'is-in' : '', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}
