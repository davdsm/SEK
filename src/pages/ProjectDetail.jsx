import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InnerPageLayout from '../components/InnerPageLayout.jsx';
import '../../css/hero.css';
import '../../css/smooth-scroll.css';
import '../../css/parallax.css';
import '../../css/section-reveal.css';
import '../../css/inner-page.css';
import '../../css/project.css';
import '../../css/footer.css';

export default function ProjectDetail() {
  useEffect(() => {
    document.title = 'The Meridian Residence · SEK Construction & Development';
  }, []);

  return (
    <InnerPageLayout>
      <section className="project-banner" aria-label="The Meridian Residence">
        <img src="/sections/images/portfolio1.jpg" alt="The Meridian Residence exterior at dusk" className="project-banner__img js-parallax" data-parallax="0.18" />
        <div className="project-banner__overlay" aria-hidden="true"></div>
        <div className="project-banner__content">
          <span className="project-banner__code">R01</span>
          <h1 className="project-banner__title">The Meridian Residence</h1>
          <span className="project-banner__badge">Private Estate</span>
        </div>
      </section>

      <section className="project-meta" data-section-reveal>
        <div className="inner-wrap">
          <dl className="project-meta__grid">
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Location</dt>
              <dd className="project-meta__value">Beverly Hills, CA</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Completed</dt>
              <dd className="project-meta__value">2024</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Size</dt>
              <dd className="project-meta__value">12,000 sq ft</dd>
            </div>
            <div className="project-meta__item section-reveal">
              <dt className="project-meta__label">Architect</dt>
              <dd className="project-meta__value">Foster + Partners</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="project-about" data-section-reveal>
        <div className="inner-wrap">
          <div className="project-about__grid">
            <div>
              <p className="project-about__label section-reveal">Overview</p>
              <h2 className="project-about__title section-reveal">A hillside estate carved into the canyon</h2>
            </div>
            <div>
              <p className="project-about__text section-reveal">The Meridian Residence is a 12,000 square foot private estate perched above Beverly Hills, where limestone cladding, floor to ceiling glass, and a cantilevered pool frame uninterrupted views of the canyon below.</p>
              <p className="project-about__text section-reveal">SEK managed every phase of construction over 28 months, coordinating 14 specialist trades to deliver hand selected stone, custom bronze hardware, and a structural glass envelope that appears to float above the landscape.</p>
              <p className="project-about__text section-reveal">The result is a home where material honesty and architectural ambition coexist: warm travertine underfoot, cool steel at the horizon, and light that moves through the interior from dawn to dusk.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-gallery" data-section-reveal>
        <div className="inner-wrap">
          <h2 className="project-gallery__title section-reveal">Project Gallery</h2>
          <div className="project-gallery__grid">
            <figure className="project-gallery__item project-gallery__item--hero section-reveal">
              <img src="/sections/images/portfolio1.jpg" alt="Meridian Residence full exterior view" className="project-gallery__img js-parallax" data-parallax="0.1" />
            </figure>
            <figure className="project-gallery__item project-gallery__item--wide section-reveal">
              <img src="/sections/images/master.jpg" alt="Pool and terrace overlooking the canyon" className="project-gallery__img js-parallax" data-parallax="0.12" />
            </figure>
            <figure className="project-gallery__item project-gallery__item--side section-reveal">
              <img src="/sections/images/portfolio3.jpg" alt="Living room interior with natural stone" className="project-gallery__img js-parallax" data-parallax="0.16" />
            </figure>
            <figure className="project-gallery__item project-gallery__item--half section-reveal">
              <img src="/sections/images/detail.jpg" alt="Craftsman installing limestone cladding" className="project-gallery__img" />
            </figure>
            <figure className="project-gallery__item project-gallery__item--half section-reveal">
              <img src="/sections/images/time.jpg" alt="Evening light on the facade" className="project-gallery__img" />
            </figure>
            <figure className="project-gallery__item project-gallery__item--third section-reveal">
              <img src="/sections/images/cta.jpg" alt="Entry hall with double height glazing" className="project-gallery__img" />
            </figure>
            <figure className="project-gallery__item project-gallery__item--third section-reveal">
              <img src="/sections/images/portfolio2.jpg" alt="Kitchen with marble island" className="project-gallery__img" />
            </figure>
            <figure className="project-gallery__item project-gallery__item--third section-reveal">
              <img src="/sections/images/portfolio4.jpg" alt="Master suite terrace at sunset" className="project-gallery__img" />
            </figure>
          </div>
        </div>
      </section>

      <nav className="project-nav" aria-label="Project navigation" data-section-reveal>
        <div className="inner-wrap">
          <div className="project-nav__inner section-reveal">
            <Link to="/projects" className="project-nav__back">All Projects</Link>
            <Link to="/projects/the-meridian-residence" className="project-nav__link project-nav__link--next">
              <span className="project-nav__label">Next Project</span>
              <span className="project-nav__name">Arcadia Tower</span>
            </Link>
          </div>
        </div>
      </nav>
    </InnerPageLayout>
  );
}
