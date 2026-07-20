import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';

// Lazy-loaded so each page's CSS (which assumes it owns the document,
// same as when these were separate static HTML pages) is only ever
// injected for the page that's actually mounted.
const Home = lazy(() => import('./pages/Home.jsx'));
const Culture = lazy(() => import('./pages/Culture.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}
