import { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import { PROJECTS, getProjectBySlug, localizeProject } from '../data/projects.js';
import { useLocale } from '../i18n/LocaleContext.jsx';
import {
  useSeo,
  breadcrumbJsonLd,
  projectJsonLd,
} from '../seo/useSeo.js';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/project.css';
import '../../css/footer.css';

function GalleryFigure({ src, alt, className = '' }) {
  return (
    <figure className={`project-gallery__item ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        className="project-gallery__img"
        loading="lazy"
      />
    </figure>
  );
}

function ProjectSeo({ project }) {
  const { t } = useLocale();
  const description = useMemo(() => {
    if (Array.isArray(project.description) && project.description[0]) {
      return project.description[0];
    }
    return `${project.name} · ${project.location}`;
  }, [project]);

  useSeo({
    title: `${project.name} · ${project.location}`,
    description,
    path: `/projects/${project.slug}`,
    image: project.img || '/og.jpg',
    imageAlt: `${project.name} · ${project.location}`,
    type: 'article',
    jsonLd: [
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: t('portfolio.title'), path: '/projects' },
        { name: project.name, path: `/projects/${project.slug}` },
      ]),
      projectJsonLd(project),
    ],
  });

  return null;
}

export default function ProjectDetail() {
  const { t, locale } = useLocale();
  const { slug } = useParams();
  const raw = getProjectBySlug(slug);
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const nextRaw = PROJECTS[(index + 1) % PROJECTS.length];

  if (!raw) {
    return <Navigate to="/projects" replace />;
  }

  const project = localizeProject(raw, locale);
  const next = nextRaw ? localizeProject(nextRaw, locale) : null;
  const gallery = project.images || [project.img];
  const hero = gallery[0];

  return (
    <InnerPageLayout>
      <ProjectSeo project={project} />
      <section className="project-banner" aria-label={project.name}>
        <img
          src={hero}
          alt={`${project.name}, ${project.location}`}
          className="project-banner__img js-parallax"
          data-parallax="0.18"
        />
        <div className="project-banner__overlay" aria-hidden="true"></div>
        <div className="project-banner__content">
          <span className="project-banner__code">{String(index + 1).padStart(2, '0')}</span>
          <h1 className="project-banner__title">{project.name}</h1>
          <span className="project-banner__badge">{t(`portfolio.filters.${project.category}`)}</span>
        </div>
      </section>

      <section className="project-meta" data-section-reveal>
        <div className="inner-wrap">
          <dl className="project-meta__grid">
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">{t('project.location')}</dt>
              <dd className="project-meta__value">{project.location}</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">{t('project.completed')}</dt>
              <dd className="project-meta__value">{project.year}</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">{t('project.type')}</dt>
              <dd className="project-meta__value">{t(`portfolio.filters.${project.category}`)}</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">{t('project.studio')}</dt>
              <dd className="project-meta__value">SEK</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="project-about" data-section-reveal>
        <div className="inner-wrap">
          <div className="project-about__grid">
            <div>
              <p className="project-about__label section-reveal">{t('project.story')}</p>
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

      <section className="project-gallery">
        <div className="inner-wrap">
          <div data-section-reveal>
            <h2 className="project-gallery__title section-reveal">{t('project.gallery')}</h2>
          </div>
          <div className="project-gallery__grid">
            {gallery.map((src, i) => (
              <GalleryFigure
                key={src}
                src={src}
                alt={i === 0 ? t('project.mainView', { name: project.name }) : `${project.name} ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <nav className="project-nav" aria-label={t('project.navAria')} data-section-reveal>
        <div className="inner-wrap">
          <div className="project-nav__inner section-reveal">
            <Link to="/projects" className="project-nav__back">
              {t('project.allWorks')}
            </Link>
            {next && (
              <Link
                to={`/projects/${next.slug}`}
                className="project-nav__link project-nav__link--next"
              >
                <span className="project-nav__label">{t('project.continue')}</span>
                <span className="project-nav__name">{next.name}</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </InnerPageLayout>
  );
}
