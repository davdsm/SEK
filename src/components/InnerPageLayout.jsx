import { useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';
import PageEnter from './PageEnter.jsx';
import useSmoothScroll from '../hooks/useSmoothScroll.js';
import useParallax from '../hooks/useParallax.js';
import useSectionReveal from '../hooks/useSectionReveal.js';

/** Shared chrome + behavior for every page except the cinematic Home. */
export default function InnerPageLayout({ children }) {
  const { pathname } = useLocation();

  useSmoothScroll();
  useParallax([pathname]);
  useSectionReveal([pathname]);

  return (
    <PageEnter key={pathname} className="page-enter--inner">
      <main className="inner-main">{children}</main>
      <Footer />
    </PageEnter>
  );
}
