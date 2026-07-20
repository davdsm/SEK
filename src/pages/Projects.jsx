import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/projects-list.css';
import '../../css/footer.css';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'interiors', label: 'Interiors' },
  { key: 'cultural', label: 'Cultural' },
];

// All project links share the single project-detail template that
// exists in this build, exactly like the original project.html demo.
const DETAIL_ROUTE = '/projects/the-meridian-residence';

const PROJECTS = [
  { img: '/sections/images/portfolio1.jpg', alt: 'The Meridian Residence', category: 'residential', code: 'R01', name: 'The Meridian Residence', badge: 'Private Estate' },
  { img: '/sections/images/portfolio2.jpg', alt: 'Arcadia Tower', category: 'commercial', code: 'C08', name: 'Arcadia Tower', badge: 'Commercial' },
  { img: '/sections/images/portfolio3.jpg', alt: 'Vale House', category: 'interiors', code: 'R14', name: 'Vale House', badge: 'Interior Build' },
  { img: '/sections/images/portfolio4.jpg', alt: 'The Sterling Pavilion', category: 'cultural', code: 'C12', name: 'The Sterling Pavilion', badge: 'Cultural' },
  { img: '/sections/images/master.jpg', alt: 'Hillside Estate', category: 'residential', code: 'R22', name: 'Hillside Estate', badge: 'Private Estate' },
  { img: '/sections/images/detail.jpg', alt: 'Foundry Lofts', category: 'commercial', code: 'C19', name: 'Foundry Lofts', badge: 'Mixed Use' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Projects · SEK Construction & Development';
  }, []);

  return (
    <InnerPageLayout>
      <section className="projects-intro" data-section-reveal>
        <div className="inner-wrap">
          <header className="projects-intro__header">
            <h1 className="projects-intro__title section-reveal">Selected<br />Works</h1>
            <p className="projects-intro__desc section-reveal">A curated portfolio of residences, estates, and landmark developments delivered with precision and craft.</p>
          </header>
          <div className="projects-filters section-reveal">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`projects-filter${filter === f.key ? ' is-active' : ''}`}
                data-filter={f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid-wrap" aria-label="Project listing">
        <div className="inner-wrap">
          <div className="projects-grid" data-section-reveal>
            {PROJECTS.map((p) => (
              <Link
                key={p.name}
                to={DETAIL_ROUTE}
                className="projects-card section-reveal"
                data-category={p.category}
                style={{ display: filter === 'all' || filter === p.category ? '' : 'none' }}
              >
                <img src={p.img} alt={p.alt} className="projects-card__img js-parallax" data-parallax="0.1" />
                <div className="projects-card__overlay" aria-hidden="true"></div>
                <span className="projects-card__arrow" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1.5L7 5L3 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="projects-card__content">
                  <span className="projects-card__code">{p.code}</span>
                  <h2 className="projects-card__name">{p.name}</h2>
                  <span className="projects-card__badge">{p.badge}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
