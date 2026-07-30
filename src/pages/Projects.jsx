import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import { usePageTransition } from '../components/PageTransition.jsx';
import { PROJECTS, CATEGORY_LABEL } from '../data/projects.js';
import { useSeo, breadcrumbJsonLd } from '../seo/useSeo.js';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/projects-list.css';
import '../../css/footer.css';

const FILTERS = [
  { key: 'all', label: 'Show All' },
  { key: 'new-construction', label: 'New Construction' },
  { key: 'renovation', label: 'Renovation' },
  { key: 'historic-restoration', label: 'Historic Restoration' },
  { key: 'specialty-structure', label: 'Specialty Structure' },
];

function padIndex(n) {
  return String(n).padStart(2, '0');
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [ready, setReady] = useState(false);
  const [gridWave, setGridWave] = useState(0);
  const searchRef = useRef(null);
  const skipGridWave = useRef(true);
  const { contentVisible } = usePageTransition();

  useSeo({
    title: 'Portfolio',
    description:
      'Explore SEK Construction projects across the French Riviera, new builds, renovations, historic restorations, and specialty structures from Nice to Monaco and beyond.',
    path: '/projects',
    jsonLd: breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Portfolio', path: '/projects' },
    ]),
  });

  useEffect(() => {
    document.body.classList.add('is-portfolio');
    return () => document.body.classList.remove('is-portfolio', 'bg-white');
  }, []);

  useEffect(() => {
    if (!contentVisible) {
      setReady(false);
      return undefined;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setReady(true);
      return undefined;
    }
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setReady(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, [contentVisible]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesFilter = filter === 'all' || p.category === filter;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  useEffect(() => {
    if (skipGridWave.current) {
      skipGridWave.current = false;
      return;
    }
    setGridWave((wave) => wave + 1);
  }, [filter, query]);

  function stairIndex(index) {
    return Math.floor(index / 3) + (index % 3);
  }

  return (
    <InnerPageLayout>
      <section
        className={`portfolio${ready ? ' is-ready' : ''}`}
        aria-label="Portfolio"
      >
        <div className="portfolio__wrap">
          <h1
            className="portfolio__heading portfolio__rise"
            style={{ '--stair': 0 }}
          >
            Portfolio <span className="portfolio__heading-count">({visible.length})</span>
          </h1>

          <div className="portfolio__toolbar">
            <div className="portfolio__filters" role="group" aria-label="Filter projects">
              {FILTERS.map((f, i) => (
                <button
                  key={f.key}
                  type="button"
                  className={`portfolio__filter portfolio__rise${filter === f.key ? ' is-active' : ''}`}
                  style={{ '--stair': i + 1 }}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div
              className={`portfolio__search portfolio__rise${searchOpen ? ' is-open' : ''}`}
              style={{ '--stair': FILTERS.length + 1 }}
            >
              <label className="portfolio__search-field" htmlFor="portfolio-search">
                <span className="visually-hidden">Search projects</span>
                <input
                  ref={searchRef}
                  id="portfolio-search"
                  type="search"
                  className="portfolio__search-input"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onBlur={() => {
                    if (!query) setSearchOpen(false);
                  }}
                />
              </label>
              <button
                type="button"
                className="portfolio__search-btn"
                aria-label={searchOpen ? 'Close search' : 'Search projects'}
                aria-expanded={searchOpen}
                onClick={() => {
                  setSearchOpen((open) => {
                    if (open && query) setQuery('');
                    return !open;
                  });
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="8.5" cy="8.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M13 13l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          <ul className="portfolio__grid">
            {visible.map((p, i) => (
              <li
                key={`${gridWave}-${p.slug}`}
                className="portfolio__item portfolio__rise portfolio__rise--card"
                style={{
                  '--stair':
                    (gridWave === 0 ? FILTERS.length + 2 : 0) + stairIndex(i),
                  '--stair-mobile': (gridWave === 0 ? 1 : 0) + i,
                }}
              >
                <Link to={`/projects/${p.slug}`} className="portfolio__card">
                  <div className="portfolio__media">
                    <img
                      src={p.img}
                      alt={`${p.name}, ${p.location}`}
                      className="portfolio__img"
                    />
                  </div>

                  <div className="portfolio__meta">
                    <div className="portfolio__meta-row">
                      <span className="portfolio__dot" aria-hidden="true" />
                      <h2 className="portfolio__title">{p.name}</h2>
                      <span className="portfolio__index">| {padIndex(i + 1)}</span>
                    </div>
                    <p className="portfolio__detail">
                      {p.year} {CATEGORY_LABEL[p.category]}
                    </p>
                    <p className="portfolio__location">{p.location}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {visible.length === 0 && (
            <p
              className="portfolio__empty portfolio__rise"
              style={{ '--stair': FILTERS.length + 2 }}
            >
              No projects match your search.
            </p>
          )}
        </div>
      </section>
    </InnerPageLayout>
  );
}
