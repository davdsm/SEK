import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import { PROJECTS, getProjectBySlug, CATEGORY_LABEL } from '../data/projects.js';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/project.css';
import '../../css/footer.css';

function orientationFromSize(width, height) {
  if (!width || !height) return 'landscape';
  const ratio = width / height;
  if (ratio < 0.9) return 'portrait';
  if (ratio > 1.1) return 'landscape';
  return 'square';
}

function GalleryFigure({ src, alt, className = '' }) {
  const [orientation, setOrientation] = useState('landscape');

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setOrientation(orientationFromSize(img.naturalWidth, img.naturalHeight));
    };
    img.src = src;
    if (img.complete && img.naturalWidth) {
      setOrientation(orientationFromSize(img.naturalWidth, img.naturalHeight));
    }
  }, [src]);

  return (
    <figure
      className={`project-gallery__item project-gallery__item--${orientation} ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        className="project-gallery__img"
        loading="lazy"
      />
    </figure>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  useEffect(() => {
    if (project) document.title = `${project.name} · SEK`;
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const gallery = project.images || [project.img];
  const hero = gallery[0];

  return (
    <InnerPageLayout>
      <section className="project-banner" aria-label={project.name}>
        <img
          src={hero}
          alt={project.name}
          className="project-banner__img js-parallax"
          data-parallax="0.18"
        />
        <div className="project-banner__overlay" aria-hidden="true"></div>
        <div className="project-banner__content">
          <span className="project-banner__code">{String(index + 1).padStart(2, '0')}</span>
          <h1 className="project-banner__title">{project.name}</h1>
          <span className="project-banner__badge">{CATEGORY_LABEL[project.category]}</span>
        </div>
      </section>

      <section className="project-meta" data-section-reveal>
        <div className="inner-wrap">
          <dl className="project-meta__grid">
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Location</dt>
              <dd className="project-meta__value">{project.location}</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Completed</dt>
              <dd className="project-meta__value">{project.year}</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Type</dt>
              <dd className="project-meta__value">{CATEGORY_LABEL[project.category]}</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Studio</dt>
              <dd className="project-meta__value">SEK</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="project-about" data-section-reveal>
        <div className="inner-wrap">
          <div className="project-about__grid">
            <div>
              <p className="project-about__label section-reveal">The story</p>
              <h2 className="project-about__title section-reveal">
                {project.tagline}
              </h2>
            </div>
            <div>
              {(project.description || []).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="project-about__text section-reveal">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-gallery" data-section-reveal>
        <div className="inner-wrap">
          <h2 className="project-gallery__title section-reveal">A visual diary</h2>
          <div className="project-gallery__grid">
            {gallery.map((src, i) => (
              <GalleryFigure
                key={src}
                src={src}
                alt={i === 0 ? `${project.name} main view` : `${project.name} ${i + 1}`}
                className="section-reveal"
              />
            ))}
          </div>
        </div>
      </section>

      <nav className="project-nav" aria-label="Project navigation" data-section-reveal>
        <div className="inner-wrap">
          <div className="project-nav__inner section-reveal">
            <Link to="/projects" className="project-nav__back">
              All works
            </Link>
            {next && (
              <Link
                to={`/projects/${next.slug}`}
                className="project-nav__link project-nav__link--next"
              >
                <span className="project-nav__label">Continue the gallery</span>
                <span className="project-nav__name">{next.name}</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </InnerPageLayout>
  );
}
